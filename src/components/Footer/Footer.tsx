import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-icon.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import twitterIcon from '../../assets/twitter-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/iakshatdubey/" className="logo">
        <span>Akshat </span>
        <span>Dubey</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/iakshatdubey/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/DubeyAkshat/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://api.whatsapp.com/send/?phone=%2B916375798139&text=Hi+Akshat!"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a> */}
        <a
          href="https://twitter.com/DubeyAkshat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </Container>
  )
}
