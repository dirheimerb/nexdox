import clsx from 'clsx';

import Container from '@/ui/Container';
import FadeIn from '@/ui/FadeIn';

interface PageIntroProps {
  title: string;
  content: string;
  created_at: string;
  centered?: boolean;
}

export function PageIntro({
  content,
  title,
  created_at,
  centered = false,
}: PageIntroProps) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {title}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {content}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto',
          )}
        >
          {created_at}
        </div>
      </FadeIn>
    </Container>
  );
}
