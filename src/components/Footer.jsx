import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 3rem 2rem 2rem;
  color: white;

  @media (min-width: 768px) {
    padding: 4rem 4rem 2rem;
  }
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
`

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: #667eea;
    transform: translateX(5px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    color: #667eea;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }
`

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Danushka Somasiri</FooterTitle>
            <FooterText>
              Full Stack Developer passionate about building modern web applications
              with clean code and great user experiences. Let's create something amazing together!
            </FooterText>
            <SocialLinks>
              <SocialIcon href="https://github.com/danu38" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/chandani-somasiri-36478754/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="mailto:danushkasomasiri@gmail.com">
                <FaEnvelope />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink onClick={scrollToTop}>Home</FooterLink>
            <FooterLink onClick={() => scrollToSection('projects')}>Projects</FooterLink>
            <FooterLink onClick={() => scrollToSection('blog')}>Blog</FooterLink>
            <FooterLink onClick={() => scrollToSection('skills')}>Skills</FooterLink>
            <FooterLink onClick={() => scrollToSection('contact')}>Contact</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <FooterText>Uppsala, Sweden</FooterText>
            <FooterLink href="mailto:danushkasomasiri@gmail.com">
              danushkasomasiri@gmail.com
            </FooterLink>
            <FooterLink href="tel:+46761564436">
              +46 761 564 436
            </FooterLink>
          </FooterColumn>
        </FooterContent>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Danushka Somasiri. Made with <FaHeart /> and React
          </Copyright>
          <QuickLinks>
            <a href="https://github.com/danu38/my_portfolio" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
          </QuickLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
