import { projects, personalProjects, type Project } from '../data/cvData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const techColorMap: Record<string, string> = {
  Java: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Python: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Angular: 'bg-red-500/10 text-red-400 border-red-500/20',
  'Vue.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Node.js': 'bg-lime-500/10 text-lime-400 border-lime-500/20',
  Docker: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  PostgreSQL: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  MySQL: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
  Kotlin: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  GraphQL: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  Kafka: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  Micronaut: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Quasar: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Capacitor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
};

function getTechColor(tech: string) {
  return techColorMap[tech] || 'bg-primary/10 text-primary-light border-primary/20';
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-6 glow-hover transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          {project.featured && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full">
              ⭐ Destacado
            </span>
          )}
        </div>
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-2 py-0.5 text-xs font-medium border rounded-md ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Responsibilities */}
      <p className="text-xs text-slate-500 border-t border-white/5 pt-3">
        <span className="font-medium text-slate-400">Rol:</span> {project.responsibilities}
      </p>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: personalRef, isVisible: personalVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Una selección de proyectos profesionales en los que he participado.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Personal Projects */}
        <div
          ref={personalRef}
          className={`transition-all duration-700 ${
            personalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Proyectos <span className="gradient-text">Personales</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {personalProjects.map((project) => (
              <div
                key={project.name}
                className="glass rounded-xl p-6 glow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🚀</span>
                  <h4 className="text-lg font-bold text-white">{project.name}</h4>
                </div>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
