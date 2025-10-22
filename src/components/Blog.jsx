import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa'

const BlogSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
      radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
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
  margin-bottom: 3rem;
  color: white;
`

const BlogGrid = styled.div`
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

const BlogCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
`

const BlogContent = styled.div`
  padding: 1.5rem;
`

const BlogMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #718096;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: #667eea;
  }
`

const BlogTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`

const BlogExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const ReadMore = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${BlogCard}:hover & {
    gap: 0.75rem;

    svg {
      transform: translateX(4px);
    }
  }
`

const Blog = () => {
  const blogPosts = [
    {
      title: 'Predictive AI Model',
      excerpt: 'Developed a predictive model to analyze and optimize energy consumption patterns at electric vehicle (EV) charging stations, using real-world data from Arlanda Airport. Identifying efficient energy usage trends for smarter energy distribution.',
      date: '2024-06-01',
      readTime: 'Research Paper',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '/thesis.png',
      link: 'https://diva-portal.org/smash/record.jsf?dswid=-3471&pid=diva2%3A1871256&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&aq=%5B%5B%7B%22freeText%22%3A%22predictive+model+danushka+somasiri%22%7D%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all'
    },
    {
      title: 'Exploring Joomla CMS Vulnerabilities - JoomScan',
      excerpt: 'JoomScan is a powerful tool to scan Joomla sites for vulnerabilities. This article describes how to use it effectively to identify and address security issues in Joomla CMS installations.',
      date: '2021-07-01',
      readTime: '8 min read',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: '/Joomlascan.png',
      link: 'https://techblog.domains.lk/2020/12/exploring-joomla-cms-vulnerabilities.html'
    },
    {
      title: 'Exploring WordPress Vulnerabilities - WPScan',
      excerpt: 'Introduction to WPScan, a security tool for scanning WordPress installations. Learn how to identify vulnerabilities and secure your WordPress site against common threats.',
      date: '2022-01-01',
      readTime: '7 min read',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      image: '/wpscan.png',
      link: 'https://techblog.domains.lk/2020/10/exploring-wordpress-vulnerabilities.html'
    },
    {
      title: 'Hardening WordPress',
      excerpt: 'A comprehensive step-by-step guide on hardening your WordPress installation. Covers security best practices, configuration tips, and essential measures to protect your WordPress site from attacks.',
      date: '2020-11-01',
      readTime: '10 min read',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      image: '/hardningwp.png',
      link: 'https://techblog.domains.lk/2020/11/hardening-wordpress.html'
    }
  ]

  return (
    <BlogSection id="blog">
      <Container>
        <SectionTitle>Latest Articles</SectionTitle>

        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => window.open(post.link, '_blank')}
            >
              <BlogImage $gradient={post.gradient}>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
              </BlogImage>

              <BlogContent>
                <BlogMeta>
                  <MetaItem>
                    <FaCalendar />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </MetaItem>
                  <MetaItem>
                    <FaClock />
                    {post.readTime}
                  </MetaItem>
                </BlogMeta>

                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>

                <ReadMore>
                  Read More
                  <FaArrowRight />
                </ReadMore>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  )
}

export default Blog
