import Link from 'next/link';
import clsx from 'clsx';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  DribbbleIcon,
} from './Icons';

export interface SocialMediaProps {
  className?: string;
  invert?: boolean;
}
export const socialMediaProfiles = [
  { title: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { title: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { title: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { title: 'GitHub', href: 'https://github.com', icon: GitHubIcon },
  { title: 'Dribbble', href: 'https://dribbble.com', icon: DribbbleIcon },
];

export default function SocialMedia({
  className,
  invert = false,
}: SocialMediaProps) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
