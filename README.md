# Backend Developer Portfolio

A modern, minimalistic personal portfolio website for Ankitha Karyam - Backend Java Developer. Built with Next.js, featuring a terminal-inspired black and white monochrome theme, fully responsive design, and interactive elements.

## 🎨 Design Features

- **Monochrome Theme**: Strictly black and white color scheme with gray tones
- **Terminal Aesthetic**: Hacker/backend-developer dashboard vibe inspired by Linux terminal and GitHub dark mode
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Interactive Elements**: 
  - Expandable project cards with API response-style JSON
  - Interactive code editor with multiple language snippets
  - Smooth animations and transitions
  - Terminal-style CLI input for contact form

## 🚀 Tech Stack

- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: JetBrains Mono (monospace terminal font)
- **Animations**: CSS3 + Tailwind animations

## 📋 Sections

1. **Hero**: Introduction with typewriter effect
2. **About**: Career overview and education
3. **Skills**: Categorized technical skills and certifications
4. **Experience**: Expandable work experience cards
5. **Projects**: Interactive project cards with API response samples
6. **Code Editor**: Interactive code playground with Java, Spring, and SQL examples
7. **Contact**: Terminal-style contact form and direct contact information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel

**Option 1: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Option 2: Connect GitHub Repository**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Deploy to Netlify

**Option 1: Using Netlify CLI**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

**Option 2: Connect GitHub Repository**

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Deploy

## 📱 Features

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### Animations
- Fade-in effects on section load
- Typewriter effect on hero title
- Smooth scroll behavior
- Hover effects on interactive elements

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Readable color contrast (WCAG AA compliant)
- Keyboard navigation support

### Performance
- Next.js optimization
- Image lazy loading
- CSS minification via Tailwind
- Fast page load with efficient code splitting

## 🎯 Customization

### Update Content
Edit the component files in `components/` directory to update:
- Bio and about information
- Skills and technologies
- Work experience
- Projects and achievements
- Contact information

### Modify Colors
Update `tailwind.config.js` in the `terminal` color palette:

```javascript
colors: {
  terminal: {
    black: '#000000',
    white: '#FFFFFF',
    gray1: '#111111',
    // ... more colors
  }
}
```

### Add/Remove Sections
Edit `pages/index.tsx` to include/exclude components and reorder sections.

## 📄 Environment Variables

Create a `.env.local` file if needed for external APIs:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## 🔍 SEO

The portfolio includes:
- Meta tags for social sharing (Open Graph)
- Proper semantic HTML
- Mobile viewport optimization
- Readable URLs

## 📞 Contact

- **Email**: ankitha.karyam.work@gmail.com
- **Phone**: +91 8074543716
- **LinkedIn**: [Ankitha Karyam](https://linkedin.com)
- **GitHub**: [ankitha-karyam](https://github.com)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JetBrains Mono Font](https://www.jetbrains.com/lp/mono/)

---

**Made with ❤️ by Ankitha Karyam**
