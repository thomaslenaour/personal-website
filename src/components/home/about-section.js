import React from 'react'

import Wave from '../ui-elements/Wave'
import TitleText from './title-text'
import SkillList from './skills/skills-list'

import programmerPicture from '../../images/home/programmer.svg'

const AboutSection = () => {
  const skills = [
    'HTML',
    'CSS',
    'JS',
    'PHP',
    'SQL',
    'NoSQL',
    'React',
    'Node.js',
    'Express.js',
    'Laravel',
    'Symfony',
    'Tailwind CSS',
    'Bootstrap',
    'Docker',
    'Kubernetes',
    'SEO',
    'Python',
    'Modèle MVC',
    'Linux',
  ]

  return (
    <section>
      <div className="relative">
        <Wave color="#FBBF24" />
        <Wave color="#1F2937" classes="absolute top-0 mt-3" />
      </div>
      <div className="bg-gray-800 text-white">
        <div className="main-container py-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <TitleText title="Développeur basé à Bordeaux 🇫🇷">
                Passionné par l'informatique dès le plus jeune âge, je me suis
                formé en autodidacte aux différents langages de programmation.
                J'ai fait le choix de m'orienter vers le développement web &
                mobile, domaines pour lesquelles je porte un fort intérêt. J'ai
                eu l'occasion de m'épanouir dans de nombreux projets, ce qui m'a
                permis d'augmenter ma palette de compétences.
              </TitleText>
              <SkillList skills={skills} classes="mt-5" />
              <TitleText title="Étudiant en informatique 👨‍💻" classes="mt-10">
                Passionné par l'informatique dès le plus jeune âge, je me suis
                formé en autodidacte aux différents langages de programmation.
                J'ai fait le choix de m'orienter vers le développement web &
                mobile, domaines pour lesquelles je porte un fort intérêt. J'ai
                eu l'occasion de m'épanouir dans de nombreux projets, ce qui m'a
                permis d'augmenter ma palette de compétences.
              </TitleText>
            </div>
            <div className="flex justify-center">
              <img
                src={programmerPicture}
                alt="Illustration programmeur"
                className="w-2/3 lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Wave color="#FBBF24" reverse />
        <Wave color="#1F2937" classes="absolute bottom-0 mb-3" reverse />
      </div>
    </section>
  )
}
export default AboutSection
