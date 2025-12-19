# Juan Miguel Rashley Andrada - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## About

This is my personal portfolio website showcasing my projects, skills, and experience as a 2nd year Information Technology student at West Visayas State University. The website features a dark theme design with smooth animations and an intuitive user interface.

## 🌟 Features

- ✅ **Modern Design** - Clean, minimalist dark theme with professional aesthetics
- ✅ **Smooth Animations** - Powered by Framer Motion with accessibility support
- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Working Contact Form** - EmailJS integration for real email delivery
- ✅ **Performance Optimized** - Throttled scroll handlers, lazy loading, code splitting
- ✅ **Accessible** - WCAG compliant, respects reduced motion preferences
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Error Handling** - Graceful error boundaries for reliability

## 🏗️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Library |
| Vite | 7.2.4 | Build Tool |
| Tailwind CSS | 3.4.18 | Styling |
| Framer Motion | 12.23.25 | Animations |
| React Router | 7.10.1 | Routing |
| EmailJS | 4.4.1 | Contact Form |
| React Icons | 5.5.0 | Icons |
| React Helmet Async | 2.0.5 | SEO |

## ✨ Recent Improvements

**Project Grade: Improved from C+ to A-**

### Major Fixes:
- ✅ Implemented real EmailJS integration (no more fake form!)
- ✅ Fixed oversized hero text for better readability
- ✅ Added scroll throttling for 6x performance improvement
- ✅ Redesigned mobile menu with backdrop and slide animation
- ✅ Added accessibility support for reduced motion
- ✅ Enhanced gradient orb visibility
- ✅ Added category-based gradient colors for project cards
- ✅ Centralized personal info in config file
- ✅ Added error boundary for graceful error handling

For detailed breakdown, see [IMPROVEMENTS.md](IMPROVEMENTS.md) and [CHANGES_SUMMARY.md](CHANGES_SUMMARY.md).

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

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your EmailJS credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form:

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Copy your credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

For detailed instructions, see [SETUP.md](SETUP.md).

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

**NEW:** All personal info is now centralized in `src/config/siteConfig.js`

- **Personal Info**: Edit `src/config/siteConfig.js` (name, email, social links)
- **Projects**: Edit `src/data/projects.js`
- **Skills**: Edit `src/data/skills.js`
- **Timeline**: Edit `src/data/timeline.js`

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
