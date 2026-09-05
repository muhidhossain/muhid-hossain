import Image from 'next/image';
import { profile } from '@/data/profile';
import { education, certifications } from '@/data/experience';
import { SectionHeading } from '@/components/sections/section-heading';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal';

const stats = [
  { label: 'Years experience', value: '4+' },
  { label: 'Companies', value: '4' },
  { label: 'Core stack', value: 'React / RN / Next.js' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[280px_1fr]">
        <FadeIn className="mx-auto md:mx-0">
          <div className="group relative w-fit">
            <div className="absolute -inset-1 rounded-lg border border-accent/40" />
            <Image
              src="/images/profile.png"
              alt={profile.name}
              width={240}
              height={240}
              className="relative rounded-lg border border-line object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          </div>

          <Stagger className="mt-8 space-y-4 font-mono text-sm">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="flex flex-col">
                <span className="text-ink-muted">{stat.label}</span>
                <span className="text-ink">{stat.value}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-5 text-base leading-relaxed text-ink-muted">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="grid gap-8 pt-4 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
              <Stagger className="mt-3 space-y-3">
                {education.map((e) => (
                  <StaggerItem key={e.degree}>
                    <p className="font-medium text-ink">{e.degree}</p>
                    <p className="text-sm">
                      {e.school} &middot; {e.period}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                Certifications
              </h3>
              <Stagger className="mt-3 space-y-3">
                {certifications.map((c) => (
                  <StaggerItem key={c.name}>
                    <p className="font-medium text-ink">{c.name}</p>
                    <p className="text-sm">
                      {c.issuer} &middot; {c.date}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
