import { uploadFile } from '@/app/Storage/Files/File';

//'use client';
export interface State {
  isDragging: boolean;
  data: null | string;
  type: null | string;
}

export type Action =
  | { type: 'DRAG_IN'; payload: DragEvent }
  | { type: 'DRAG_OUT' }
  | { type: 'DROP'; payload: DragEvent }
  | { type: 'UPLOAD'; payload: DragEvent };

export const initialState: State = {
  isDragging: false,
  data: null,
  type: null,
};

export default async function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'DRAG_IN':
      action.payload.preventDefault();
      return { ...state, isDragging: true };
    case 'DRAG_OUT':
      return { ...state, isDragging: false };
    case 'DROP':
      action.payload.preventDefault();
      const dataTransfer = action.payload.dataTransfer;
      let data: string | null = null;
      let type: string | null = null;
      if (dataTransfer) {
        if (dataTransfer.files && dataTransfer.files.length > 0) {
          let name = dataTransfer.files[0].name;
          await uploadFile('public', dataTransfer.files[0]);
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
