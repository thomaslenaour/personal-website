import React from "react"

import SocialNetworks from "../ui-elements/social-networks"

const IntroductionSection = () => {
  return (
    <section className="main-container mt-5 md:mt-28">
      <div className="flex flex-col md:flex-row items-center">
        <div id="me" className="flex-shrink-0 mb-5" />
        <div className="md:ml-10 flex-1 max-w-xl">
          <p className="main-title mb-5">
            Bonjour <span role="img" aria-label="Emoji agitant la main">👋</span>, comment allez-vous ?
          </p>
          <h1 className="text-lg md:text-xl lg:text-2xl mb-5">
            Je m'appelle{' '}
            <strong className="text-underline">Thomas Le Naour</strong> et je
            suis développeur spécialisé dans la création de sites web sur-mesure
          </h1>
          <SocialNetworks spaceBetweenLogo="space-x-10" logoWidth="w-10" />
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection
