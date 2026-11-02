import { portfolio } from '@/lib/portfolio';
import { AcademicService } from '@/components/AcademicService';
import { EducationSection } from '@/components/EducationSection';

export function About() {
  const { profile } = portfolio;
  return <section id="about" className="section-spacing border-t border-slate-800 bg-[#0b1021]/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div><p className="section-eyebrow">05 / Profile</p><h2 className="section-title">A mechatronics foundation.<br />A multidisciplinary practice.</h2></div>
        <div><p className="text-base leading-relaxed text-slate-300">{profile.about.professionalBackground}</p><p className="mt-5 text-sm leading-relaxed text-slate-400">{profile.about.careerFocus}</p>
          <details className="mt-6 rounded-xl border border-slate-800 p-5"><summary className="cursor-pointer text-sm font-medium text-cyan-300">Engineering approach & research interests</summary><p className="mt-4 text-sm leading-relaxed text-slate-400">{profile.about.engineeringApproach}</p><p className="mt-4 text-sm leading-relaxed text-slate-400">{profile.about.researchInterests}</p></details>
        </div>
      </div>
      <EducationSection />
      <AcademicService />
    </div>
  </section>;
}
