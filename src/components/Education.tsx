import { education, certifications, languages } from '../data/cvData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();
  const { ref: langRef, isVisible: langVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-dark-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Formación <span className="gradient-text">Académica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div
            ref={eduRef}
            className={`transition-all duration-700 ${
              eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Estudios
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.title} className="glass rounded-xl p-5 glow-hover transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-base font-semibold text-white mb-1">{edu.title}</h4>
                  <p className="text-primary-light text-sm mb-1">{edu.institution}</p>
                  <p className="text-slate-500 text-xs font-mono">{edu.period}</p>
                  {edu.note && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full">
                      {edu.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            ref={certRef}
            className={`transition-all duration-700 ${
              certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">📜</span> Certificaciones & Cursos
            </h3>
            <div className="glass rounded-xl p-5">
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div
          ref={langRef}
          className={`mt-12 transition-all duration-700 ${
            langVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🌐</span> Idiomas
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-md mx-auto">
            {languages.map((lang) => (
              <div key={lang.name} className="glass rounded-xl p-5 flex-1 min-w-[160px] text-center glow-hover transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-white font-semibold mb-1">{lang.name}</h4>
                <p className="text-primary-light text-sm mb-3">{lang.level}</p>
                <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
