import clsx from 'clsx';
import Border from '../../components/Border';
import FadeIn from '../FadeIn';

export interface GridListItemProps {
  title: string;
  className?: string;
  invert?: boolean;
  children: React.ReactNode;
}

export default function GridListItem({
  title,
  children,
  className,
  invert = false,
}: GridListItemProps) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-neutral-300 before:bg-white after:bg-white/10'
          : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100',
        className,
      )}
    >
      <FadeIn>
        <Border
          position="left"
          className="pl-8"
          invert={invert}
        >
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-neutral-950',
            )}
          >
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
