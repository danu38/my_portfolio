# Modern Portfolio - Danushka Somasiri

A modern, responsive portfolio website built with React, Vite, and Styled Components.

## Features

- **Hero Section**: Eye-catching hero with profile image featuring colorful animated shadows
- **Projects Section**: Accordion-style project showcase with smooth animations
- **Blog Section**: Beautiful card-based blog/articles display
- **Skills Section**: Organized skill categories with progress bars and icons
- **Contact Section**: Contact form and social media links with glass-morphism design
- **Fully Responsive**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered animations throughout

## Tech Stack

- React 19
- Vite
- Styled Components
- Framer Motion
- React Icons

## Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd modern-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Web3Forms API key (get free key from https://web3forms.com)
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Customization

### Adding Your Profile Picture

Replace the placeholder image in the Hero component:
- Place your image in the `public` folder as `profile.jpg`
- Or update the image path in `src/components/Hero.jsx`

### Updating Content

#### Projects
Edit the `projects` array in `src/components/Projects.jsx` to add your own projects.

#### Blog Posts
Edit the `blogPosts` array in `src/components/Blog.jsx` to add your articles.

#### Skills
Edit the `skillCategories` array in `src/components/Skills.jsx` to update your skills.

#### Contact Information
Update your contact details in `src/components/Contact.jsx`:
- Email
- Phone
- Location
- Social media links

### Color Scheme

The portfolio uses a purple gradient theme. To change colors, update the gradient values in styled components:
- Primary: `#667eea`
- Secondary: `#764ba2`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Deployment

You can deploy this portfolio to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Danushka Somasiri - Full Stack Developer
