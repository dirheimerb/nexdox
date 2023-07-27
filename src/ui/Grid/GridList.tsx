import clsx from 'clsx';
import { FadeInStagger } from '../FadeIn';

export interface GridListProps {
  className?: string;
  children: React.ReactNode;
}

export function GridList({ className, children }: GridListProps) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  );
}
