import clsx from 'clsx';
import Container from '@/ui/Container';
import FadeIn, { FadeInStagger } from '@/ui/FadeIn';
import GridPattern from '@/ui/Grid/GridPattern';
import SectionIntro from '../Section/SectionIntro';
import PageLink from './PageLink';

export interface PageLinksProps {
  title: string;
  intro?: string;
  pages: Array<{
    href: string;
    title: string;
    date: string;
    description: string;
  }>;
  className?: string;
}

export default function PageLinks({
  title,
  intro,
  pages,
  className,
}: PageLinksProps) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        title={title}
        smaller
      >
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
