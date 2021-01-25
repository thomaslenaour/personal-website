import React from "react"

import twitterLogo from '../../images/social-networks/twitter.svg'
import githubLogo from '../../images/social-networks/github.svg'
import linkedinLogo from '../../images/social-networks/linkedin.svg'

const SocialNetworks = ({ spaceBetweenLogo, logoWidth }) => (
  <ul className={`flex items-center ${spaceBetweenLogo}`}>
    <li>
      <a href="https://twitter.com/lenaourthomas" target="_blank" rel="noreferrer" class="focus:outline-none">
        <img src={twitterLogo} alt="Logo Twitter" className={logoWidth} />
      </a>
    </li>
    <li>
      <a href="https://github.com/thomaslenaour" target="_blank" rel="noreferrer" class="focus:outline-none">
        <img
          src={githubLogo}
          alt="Logo Github"
          className={`bg-white rounded-full ${logoWidth}`}
        />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/lenaourthomas" target="_blank" rel="noreferrer" class="focus:outline-none">
        <img
          src={linkedinLogo}
          alt="Logo LinkedIn"
          className={`bg-white rounded ${logoWidth}`}
        />
      </a>
    </li>
  </ul>
)

export default SocialNetworks
