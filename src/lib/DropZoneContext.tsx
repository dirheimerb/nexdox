'use client';
import supabase from './supabase';
import React, { useReducer, DragEvent, createContext, useContext } from 'react';

export interface State {
  isDragging: boolean;
  data: null | string;
  type: null | string;
}

export type Action =
  | { type: 'DRAG_IN'; payload: DragEvent }
  | { type: 'DRAG_OUT' }
  | { type: 'DROP'; payload: DragEvent }
  | { type: 'SUBMIT'; payload: { file: File; name: File['name'] } };

export const initialState: State = {
  isDragging: false,
  data: null,
  type: null,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'DRAG_IN':
      action.payload.preventDefault();
      return { ...state, isDragging: true };
    case 'DRAG_OUT':
      return { ...state, isDragging: false };
    case 'SUBMIT':

      let paths = '';
      const upload = async () => {
        const path = supabase.storage
          .from('public')
          .upload(`public/${action.payload.name}`, action.payload.file);
        paths = (await path).data?.path || '';
        return path;
      };
      upload();
      return { ...state, isDragging: false };
    case 'DROP':
      action.payload.preventDefault();
      const dataTransfer = action.payload.dataTransfer;
      let data: string | null = null;
      let type: string | null = null;
      if (dataTransfer) {
        if (dataTransfer.files && dataTransfer.files.length > 0) {
          data = dataTransfer.files[0].name; // Gets the file name
          type = 'file';
        } else {
          // Tries to retrieve different types of data
          data =
            dataTransfer.getData('text/plain') ||
            dataTransfer.getData('text/html');
          type = 'text';
        }
      }
      return { isDragging: false, data, type };
    default:
      return state;
  }
}

export interface DropZoneContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const DropZoneContext = createContext<DropZoneContextType | undefined>(
  undefined,
);

export const useDropZoneContext = (): DropZoneContextType => {
  const context = useContext(DropZoneContext);
  if (!context) {
    throw new Error(
      'useDropZoneContext must be used within a DropZoneProvider',
    );
  }
  return context;
};

export const DropZoneProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DropZoneContext.Provider value={{ state, dispatch }}>
      {children}
    </DropZoneContext.Provider>
  );
};
