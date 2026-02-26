import { experiences } from '../data/cvData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 md:gap-10 pb-12 last:pb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline rail */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-dark" />
        {/* Line */}
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent mt-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 -mt-1">
        {/* Period badge */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-mono text-primary-light bg-primary/10 rounded-full border border-primary/20">
          {exp.period}
        </span>

        {/* Card */}
        <div className="glass rounded-xl p-6 glow-hover transition-all duration-300 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
            <span className="text-primary-light font-medium text-sm">{exp.company}</span>
          </div>
          <ul className="space-y-2.5">
            {exp.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experiencia <span className="gradient-text">Laboral</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Más de 4 años construyendo soluciones tecnológicas para empresas de diversos rubros.
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
