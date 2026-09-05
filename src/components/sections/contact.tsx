import { Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/sections/section-heading';
import { FadeIn, Stagger, MotionLink } from '@/components/motion/reveal';

const channels = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: profile.links.github, label: 'GitHub', icon: Github },
  { href: profile.links.leetcode, label: 'LeetCode', icon: Code2 },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05" title="Contact" />

      <FadeIn className="rounded-lg border border-line bg-surface-raised/60 p-8 md:p-12">
        <h3 className="text-balance text-2xl font-semibold text-ink md:text-3xl">
          Have a role, project, or product idea worth building well?
        </h3>
        <p className="mt-4 max-w-xl text-ink-muted">
          I&apos;m open to frontend and React Native opportunities. The fastest way to reach me
          is email - I read every message.
        </p>

        <Stagger className="mt-8 flex flex-wrap gap-4">
          {channels.map(({ href, label, icon: Icon }) => (
            <MotionLink
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
              {label}
            </MotionLink>
          ))}
        </Stagger>
      </FadeIn>
    </section>
  );
}
