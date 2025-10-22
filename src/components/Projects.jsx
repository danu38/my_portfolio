import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const AccordionItem = styled(motion.div)`
  background: white;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }
`

const AccordionHeader = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.$isOpen ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.$isOpen ? 'white' : '#2d3748'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isOpen ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'};
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`

const ChevronIcon = styled(motion.div)`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const AccordionContent = styled(motion.div)`
  overflow: hidden;
`

const ContentInner = styled.div`
  padding: 2rem;
  border-top: 1px solid #e2e8f0;
`

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$primary ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e2e8f0'};
  color: ${props => props.$primary ? 'white' : '#2d3748'};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const projects = [
    {
      title: 'AI Subtitle Generator',
      description: 'Real-time subtitle overlay on video player using Web Speech API. Generates live subtitles for videos with advanced speech recognition technology.',
      technologies: ['React', 'JavaScript', 'Web Speech API', 'HTML5 Video', 'CSS3'],
      github: 'https://github.com/danu38/subtitle-generator',
      live: 'https://subtitle-generator-443e.onrender.com/'
    },
    {
      title: 'Movie App',
      description: 'A responsive movie discovery app built with React and The Movie Database (TMDB) API. Features dynamic routing, real-time movie data, and accessibility-friendly design, including loading states, error handling, and a 404 page for invalid routes.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'TMDB API', 'HTML5', 'CSS3'],
      github: 'https://github.com/danu38/js_movie_project_TypeScript',
      live: 'https://findyourmovieshere.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'Responsive weather application that connects to the OpenWeatherMap API to display real-time weather data. Shows current weather, temperature in Celsius, and a 4-day forecast for selected locations.',
      technologies: ['JavaScript', 'TypeScript', 'OpenWeatherMap API', 'HTML5', 'CSS3'],
      github: 'https://github.com/danu38/js-project-weather-app',
      live: 'https://weatherforecastteamearth.netlify.app/'
    },
    {
      title: 'Business Website',
      description: 'Modern, responsive business website using HTML, CSS, and JavaScript. Built with Flexbox and CSS Grid, enhanced with animations. Includes a functional contact form with input validation and form submission.',
      technologies: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
      github: 'https://github.com/danu38/js-project-business-site',
      live: 'https://cosmic-malasada-d5ebe2.netlify.app/'
    },
    {
      title: 'Recipe Search Tool',
      description: 'Built a recipe search tool using the Spoonacular API. Styled to match a Figma design, with JavaScript handling user input and conditional messages for an intuitive user experience.',
      technologies: ['JavaScript', 'TypeScript', 'Spoonacular API', 'HTML5', 'CSS3'],
      github: 'https://github.com/danu38/js-project-recipe-library',
      live: 'https://recepielibrary.netlify.app/'
    },
    {
      title: 'E-Learning Platform with Moodle',
      description: 'Set up and configured a full Moodle-based e-learning website. Created and managed training courses focused on WordPress development, including course structure, content uploads, and user access management.',
      technologies: ['Moodle', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/danu38',
      live: 'https://suhurusara.lk/'
    },
    {
      title: 'Travel Sri Lanka (Upcoming)',
      description: 'Upcoming project showcasing top travel destinations across Sri Lanka, featuring a place directory, booking list, and price comparison tools. Focused on clean UI design, dynamic content, and travel-related API integration.',
      technologies: ['JavaScript', 'TypeScript', 'Travel APIs', 'HTML5', 'CSS3'],
      github: 'https://github.com/danu38',
      live: 'https://todolist.netlify.app'
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>

        {projects.map((project, index) => (
          <AccordionItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <AccordionHeader
              onClick={() => toggleAccordion(index)}
              $isOpen={openIndex === index}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ChevronIcon
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </ChevronIcon>
            </AccordionHeader>

            <AnimatePresence>
              {openIndex === index && (
                <AccordionContent
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContentInner>
                    <ProjectDescription>{project.description}</ProjectDescription>

                    <TechStack>
                      {project.technologies.map((tech, i) => (
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </TechStack>

                    <ProjectLinks>
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        View Code
                      </ProjectLink>
                      <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer" $primary>
                        <FaExternalLinkAlt />
                        Live Demo
                      </ProjectLink>
                    </ProjectLinks>
                  </ContentInner>
                </AccordionContent>
              )}
            </AnimatePresence>
          </AccordionItem>
        ))}
      </Container>
    </ProjectsSection>
  )
}

export default Projects
