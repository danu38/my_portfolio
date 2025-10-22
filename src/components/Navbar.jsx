import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const NavLinks = styled.div`
  display: none;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.05rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);

    &::after {
      width: 100%;
    }
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(20px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-left: 3px solid transparent;
  padding-left: 1rem;

  &:hover {
    color: #667eea;
    border-left-color: #667eea;
    padding-left: 1.5rem;
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo onClick={scrollToTop}>DS</Logo>

          <NavLinks>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection('blog')}>Blog</NavLink>
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </NavLinks>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                <FaTimes />
              </CloseButton>
              <MobileNavLink onClick={scrollToTop}>Home</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('projects')}>
                Projects
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('blog')}>
                Blog
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('skills')}>
                Skills
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('contact')}>
                Contact
              </MobileNavLink>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
