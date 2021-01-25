import React from "react"
import SocialNetworks from "./ui-elements/social-networks"

const Footer = () => (
  <footer className="bg-gray-800 py-10 mt-5 text-xs md:text-sm text-white">
    <div className="main-container">
      <div className="flex flex-col items-center">
        <p>&copy; 2020 &bull; Thomas Le Naour</p>
        <p className="mt-2 mb-3">Développeur Web basé à Bordeaux</p>
        <p className="mb-5 text-yellow-400 hover:text-yellow-500">
          <a href="mailto:contact@thomaslenaour.com">contact@thomaslenaour.com</a>
        </p>
        <SocialNetworks spaceBetweenLogo="space-x-10" logoWidth="w-8" />
      </div>
    </div>
  </footer>
)

export default Footer
