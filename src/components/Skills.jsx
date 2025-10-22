import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaDocker, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiExpress } from 'react-icons/si'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #f8f9fa;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillCategory = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
  }
`

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
`

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
    color: #667eea;
  }
`

const SkillLevel = styled.span`
  font-size: 0.85rem;
  color: #718096;
  font-weight: 500;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
`

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
`

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: [
        { name: 'React', level: 'Advanced', percentage: 90, icon: <FaReact /> },
        { name: 'JavaScript', level: 'Advanced', percentage: 95, icon: <SiJavascript /> },
        { name: 'TypeScript', level: 'Intermediate', percentage: 80, icon: <SiTypescript /> },
        { name: 'HTML/CSS', level: 'Advanced', percentage: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: <FaNode />,
      skills: [
        { name: 'Node.js', level: 'Advanced', percentage: 85, icon: <FaNode /> },
        { name: 'Express', level: 'Advanced', percentage: 85, icon: <SiExpress /> },
        { name: 'Python', level: 'Intermediate', percentage: 70, icon: <FaPython /> },
        { name: 'REST APIs', level: 'Advanced', percentage: 90 }
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 'Advanced', percentage: 85, icon: <SiMongodb /> },
        { name: 'PostgreSQL', level: 'Intermediate', percentage: 75, icon: <SiPostgresql /> },
        { name: 'Redis', level: 'Intermediate', percentage: 70, icon: <SiRedis /> },
        { name: 'SQL', level: 'Advanced', percentage: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git', level: 'Advanced', percentage: 90, icon: <FaGitAlt /> },
        { name: 'Docker', level: 'Intermediate', percentage: 75, icon: <FaDocker /> },
        { name: 'CI/CD', level: 'Intermediate', percentage: 70 },
        { name: 'Linux', level: 'Intermediate', percentage: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <span>💡</span>,
      skills: [
        { name: 'Problem Solving', level: 'Advanced', percentage: 90 },
        { name: 'Team Collaboration', level: 'Advanced', percentage: 85 },
        { name: 'Communication', level: 'Advanced', percentage: 85 },
        { name: 'Agile/Scrum', level: 'Intermediate', percentage: 80 }
      ]
    },
    {
      title: 'Currently Learning',
      icon: <span>🎓</span>,
      skills: [
        { name: 'GraphQL', level: 'Beginner', percentage: 50 },
        { name: 'Kubernetes', level: 'Beginner', percentage: 40 },
        { name: 'AWS', level: 'Beginner', percentage: 55 },
        { name: 'Next.js', level: 'Intermediate', percentage: 65 }
      ]
    }
  ]

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Expertise</SectionTitle>

        <SkillsGrid>
          {skillCategories.map((category, catIndex) => (
            <SkillCategory
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>

              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillHeader>
                      <SkillName>
                        {skill.icon}
                        {skill.name}
                      </SkillName>
                      <SkillLevel>{skill.level}</SkillLevel>
                    </SkillHeader>
                    <ProgressBar>
                      <ProgressFill
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + skillIndex * 0.1, duration: 0.8 }}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}

export default Skills
