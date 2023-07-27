'use client';
import { IconType } from 'react-icons';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  onClick: () => void;
}

export default function Button({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
                relative
                w-full
                rounded-lg
                transition
                hover:opacity-80
                disabled:cursor-not-allowed
                disabled:opacity-50
                ${outline ? 'bg-white' : 'bg-rose-500'}
                ${outline ? 'border-black' : 'border-rose-500'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3"
        />
      )}
      {label}
    </button>
  );
}
