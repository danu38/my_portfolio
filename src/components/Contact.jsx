import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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
      radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.5);
    transform: translateY(-4px);
  }
`

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
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

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0;
`

const InfoText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
`

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`

const Input = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.div`
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  background: ${props => props.$success ? 'rgba(67, 233, 123, 0.1)' : 'rgba(245, 87, 108, 0.1)'};
  color: ${props => props.$success ? '#43e97b' : '#f5576c'};
  border: 1px solid ${props => props.$success ? 'rgba(67, 233, 123, 0.3)' : 'rgba(245, 87, 108, 0.3)'};
`

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(e.target)

    // Get access key from environment variable
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus({ success: true, message: 'Thank you! Your message has been sent successfully.' })
        e.target.reset()
      } else {
        setFormStatus({ success: false, message: 'Oops! Something went wrong. Please try again.' })
      }
    } catch (error) {
      setFormStatus({ success: false, message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Let's Connect</SectionTitle>
        <Subtitle>
          Have a project in mind or just want to chat? Feel free to reach out!
        </Subtitle>

        <ContentWrapper>
          <ContactInfo>
            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <InfoHeader>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <InfoTitle>Email</InfoTitle>
              </InfoHeader>
              <InfoText>
                <a href="mailto:danushka@example.com">danushkasomasiri@gmail.com</a>
              </InfoText>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <InfoHeader>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <InfoTitle>Phone</InfoTitle>
              </InfoHeader>
              <InfoText>
                <a href="tel:+1234567890">+46 761564436</a>
              </InfoText>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InfoHeader>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                <InfoTitle>Location</InfoTitle>
              </InfoHeader>
              <InfoText>Uppsala, Sweden</InfoText>
            </InfoCard>

            <InfoCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <InfoHeader>
                <InfoTitle>Social Media</InfoTitle>
              </InfoHeader>
              <SocialLinks>
                <SocialButton href="https://github.com/danu38" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/chandani-somasiri-36478754/e" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialButton>
                
              </SocialLinks>
            </InfoCard>
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormWrapper>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                  />
                </FormGroup>

                {formStatus && (
                  <StatusMessage $success={formStatus.success}>
                    {formStatus.message}
                  </StatusMessage>
                )}

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Form>
            </FormWrapper>
          </motion.div>
        </ContentWrapper>
      </Container>
    </ContactSection>
  )
}

export default Contact
