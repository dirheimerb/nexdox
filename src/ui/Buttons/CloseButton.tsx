import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export type ButtonProps = {
  onClose: () => void;
};
export default function CloseButton({ onClose }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClose}
      className="focus:outline-none"
      aria-label="Close"
    >
      <AiOutlineClose />
    </button>
  );
}
