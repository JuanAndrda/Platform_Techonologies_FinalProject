# Juan Miguel Rashley Andrada - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## About

This is my personal portfolio website showcasing my projects, skills, and experience as a 2nd year Computer Science student. The website features a dark theme design with smooth animations and an intuitive user interface.

## Features

- **Modern Design**: Clean, minimalist dark theme inspired by professional portfolio designs
- **Smooth Animations**: Powered by Framer Motion for professional transitions and effects
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Interactive Components**: Engaging hover effects and micro-interactions
- **Project Showcase**: Display of all my GitHub projects with filtering capabilities
- **Contact Form**: Functional contact form for easy communication
- **SEO Optimized**: Proper meta tags and semantic HTML for better search visibility

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.6
- **Animations**: Framer Motion 10.16.0
- **Icons**: React Icons 4.12.0
- **Form Handling**: EmailJS Browser 3.11.0
- **Utilities**: React Intersection Observer 9.5.3

## Sections

1. **Hero**: Eye-catching introduction with animated text and CTAs
2. **About**: Personal introduction, educational timeline, and stats
3. **Skills**: Comprehensive display of technical skills and proficiency levels
4. **Projects**: Filterable grid of projects from GitHub repositories
5. **Contact**: Contact form and information

## Projects Featured

- Banking System (OOP & Data Structures) - Java
- Banking System Two - Java
- Techno Hub - Web Development
- Technology Website - Web Development
- Web Computing Project - Web Development
- Bank End App - Web Development

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JuanAndrda/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Personal Information

- **Projects**: Edit `src/data/projects.js`
- **Skills**: Edit `src/data/skills.js`
- **Timeline**: Edit `src/data/timeline.js`
- **Contact Info**: Update in `src/components/contact/Contact.jsx`
- **Social Links**: Update in `src/components/common/SocialSidebar.jsx`

### Changing Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#2b2b2b',
    secondary: '#3a3a3a',
    border: '#505050',
  },
  light: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
  },
  accent: {
    blue: '#4a9eff',
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## Contact

- **Email**: juanandrada@email.com
- **GitHub**: [@JuanAndrda](https://github.com/JuanAndrda)
- **Facebook**: [Juan Rashley Andrada](https://www.facebook.com/juanrashley.andrada)
- **Instagram**: [@onemiguel_](https://www.instagram.com/onemiguel_)
- **Location**: Leon, Iloilo, Philippines

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Built with Vite for blazing fast development

---

Built with ❤️ and ⚛️ React
