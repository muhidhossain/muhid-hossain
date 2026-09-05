import { caseStudies } from '@/data/work';
import { SectionHeading } from '@/components/sections/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-line bg-surface-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="04" title="Selected Work" />

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <StaggerItem
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {project.company} &middot; {project.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line px-2 py-1 font-mono text-xs text-ink-muted"
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
