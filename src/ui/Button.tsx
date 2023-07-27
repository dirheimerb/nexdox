import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  href?: string;
  className?: string;
}

export function Button({
  invert,
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonClassName = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  );

  const innerContent = <span className="relative top-px">{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClassName}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...rest}
    >
      {innerContent}
    </button>
  );
}
