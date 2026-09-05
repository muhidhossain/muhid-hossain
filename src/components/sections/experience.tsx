import { experience } from '@/data/experience';
import { SectionHeading } from '@/components/sections/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="02" title="Experience" />

        <Stagger className="relative space-y-12 border-l border-line pl-8">
          {experience.map((job) => (
            <StaggerItem key={`${job.company}-${job.start}`} className="relative">
              <span
                className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-surface ${
                  job.current ? 'animate-pulse bg-accent' : 'bg-ink-muted'
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                <span className="font-mono text-xs text-ink-muted">
                  {job.start} - {job.end}
                </span>
              </div>
              <p className="mt-1 font-medium text-accent">
                {job.company} <span className="text-ink-muted">&middot; {job.location}</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line bg-surface px-2 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
