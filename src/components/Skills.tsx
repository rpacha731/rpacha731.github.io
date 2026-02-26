import { technicalSkills, softSkills } from '../data/cvData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SkillCard({ category, index }: { category: typeof technicalSkills[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-6 glow-hover transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-primary/10 text-primary-light border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: softRef, isVisible: softVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-dark-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Stack tecnológico que manejo en el día a día para construir soluciones robustas.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Soft Skills */}
        <div
          ref={softRef}
          className={`transition-all duration-700 ${
            softVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Habilidades <span className="gradient-text">Blandas</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-5 py-3 glass rounded-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
