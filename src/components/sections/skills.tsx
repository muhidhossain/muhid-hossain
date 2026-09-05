import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/sections/section-heading';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Skills" />

      <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem
            key={group.label}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-lg border border-line bg-surface-raised/60 p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
