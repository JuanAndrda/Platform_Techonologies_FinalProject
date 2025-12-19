# Portfolio Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up EmailJS (for contact form):**

   a. Go to [EmailJS](https://www.emailjs.com/) and create a free account

   b. Add an email service (Gmail, Outlook, etc.)

   c. Create an email template with these variables:
      - `{{from_name}}` - Sender's name
      - `{{from_email}}` - Sender's email
      - `{{message}}` - Message content
      - `{{to_name}}` - Your name (auto-filled)

   d. Copy your credentials and create a `.env` file:
   ```bash
   cp .env.example .env
   ```

   e. Fill in your `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Update personal information:**

   Edit `src/config/siteConfig.js` with your details:
   ```javascript
   export const siteConfig = {
     name: 'Your Name',
     email: 'your.email@example.com',
     // ... update all fields
   };
   ```

4. **Start development server:**
```bash
npm run dev
```

5. **Open browser:**
   Navigate to `http://localhost:5173`

---

## 📝 Customization

### Update Your Projects
Edit `src/data/projects.js` to add/modify your projects

### Update Your Skills
Edit `src/data/skills.js` to showcase your technical skills

### Update Timeline
Edit `src/data/timeline.js` for your educational/professional timeline

### Change Colors
Edit `tailwind.config.js` to customize the color scheme

### Add Your Images
Place project images in `public/projects/` directory

---

## 🏗️ Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables (EmailJS credentials)
5. Deploy!

### Netlify
1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

---

## ✨ Recent Improvements

### Fixed Issues:
✅ Contact form now uses EmailJS (no more fake submissions)
✅ Hero text size reduced for better readability
✅ Added scroll throttling for better performance
✅ Improved mobile menu with backdrop overlay
✅ Added accessibility support (prefers-reduced-motion)
✅ Enhanced gradient orb visibility
✅ Added category-based gradient colors for project cards
✅ Centralized personal info in config file
✅ Added error boundary for better error handling

---

## 📚 Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool
- **Tailwind CSS 3.4.18** - Styling
- **Framer Motion 12.23.25** - Animations
- **React Router 7.10.1** - Routing
- **EmailJS 4.4.1** - Contact form

---

## 🐛 Troubleshooting

### Contact form not working
- Verify `.env` file exists and has correct credentials
- Check browser console for errors
- Verify EmailJS account is active

### Build fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version

### Styles not loading
- Run `npm run build` to rebuild
- Clear browser cache
- Check if Tailwind is configured correctly

---

## 📧 Support

If you encounter issues, check:
1. Browser console for errors
2. Network tab for failed requests
3. EmailJS dashboard for delivery status

---

Built with ❤️ and React
