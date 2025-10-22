import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(255, 0, 150, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 204, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(255, 200, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  z-index: 1;

  @media (min-width: 968px) {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
`

const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  position: relative;
  min-height: 280px;

  @media (max-width: 767px) {
    gap: 0;
    min-height: 200px;
    transform: scale(0.85);
  }
`

const ImageCard = styled.img`
  width: 180px;
  height: 240px;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100px;
    height: 140px;
    border: 3px solid rgba(255, 255, 255, 0.9);
  }

  /* Left card - rotated left */
  &:nth-child(1) {
    transform: rotate(-15deg) translateY(10px);
    z-index: 1;

    @media (max-width: 767px) {
      transform: rotate(-10deg) translateY(5px);
    }

    &:hover {
      transform: rotate(-15deg) translateY(10px) scale(1.05);
      z-index: 4;
    }
  }

  /* Center card - main focus */
  &:nth-child(2) {
    transform: rotate(0deg) scale(1.1);
    z-index: 3;
    width: 200px;
    height: 260px;

    @media (max-width: 767px) {
      width: 120px;
      height: 160px;
      transform: rotate(0deg) scale(1.05);
    }

    &:hover {
      transform: rotate(0deg) scale(1.15);
      z-index: 4;
    }
  }

  /* Right card - rotated right */
  &:nth-child(3) {
    transform: rotate(15deg) translateY(10px);
    z-index: 2;

    @media (max-width: 767px) {
      transform: rotate(10deg) translateY(5px);
    }

    &:hover {
      transform: rotate(15deg) translateY(10px) scale(1.05);
      z-index: 4;
    }
  }
`

const TextContent = styled.div`
  flex: 1;
  color: white;
  text-align: left;

  @media (max-width: 967px) {
    text-align: center;
  }
`

const Greeting = styled(motion.h4)`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 3px;
  text-transform: uppercase;
`

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #f0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #c4b5fd;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;

  @media (max-width: 967px) {
    margin: 0 auto;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  cursor: pointer;
  z-index: 10;

  svg {
    font-size: 2.5rem;
    color: white;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroSection>
      <Container>
        <ImageWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageContainer>
            <ImageCard
              src="/comingsoon.jpg"
              alt="Coming Soon"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/180x240/667eea/ffffff?text=Coming+Soon'
              }}
            />
            <ImageCard
              src="/profile.jpeg"
              alt="Danushka Somasiri"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x260/764ba2/ffffff?text=Profile'
              }}
            />
            <ImageCard
              src="/nature.png"
              alt="Nature"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/180x240/8b5cf6/ffffff?text=Nature'
              }}
            />
          </ImageContainer>
        </ImageWrapper>

        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I am Danushka 👋
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer
          </Name>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building Digital Experiences
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Passionate developer with a strong foundation in front-end technologies and
            experience across the full stack. Comfortable with version control using Git
            and collaborative development workflows. Experienced in building dynamic back-end
            systems and database-driven applications.
          </Description>
        </TextContent>
      </Container>

      <ScrollIndicator
        onClick={scrollToProjects}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaChevronDown />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero
