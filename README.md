# MAVIX Frontend

A modern, premium AI assistant web application built with React, Vite, and Tailwind CSS. Features a futuristic design with glassmorphism effects, smooth animations, and a responsive layout.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Clone and install dependencies:**
```bash
git clone 
cd MAVIX-frontend
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **AOS** - Animate on scroll library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   ├── Navbar.jsx
│   └── ...
├── routes/             # Page components
│   ├── Home.jsx
│   ├── Features.jsx
│   ├── Pricing.jsx
│   └── ...
├── lib/               # Utilities and configurations
│   ├── animations.js  # Framer Motion variants
│   └── utils.js      # Helper functions
├── assets/           # Static assets
├── App.jsx          # Main app component
├── main.jsx        # Entry point
└── index.css      # Global styles
```

## 🎨 Design System

### Colors
- **Background:** `#0F172A` (Dark slate)
- **Primary:** `#3B82F6` (Blue)
- **Accent:** `#8B5CF6` (Purple)
- **Text:** `#F8FAFC` (Off-white)
- **Muted:** `#94A3B8` (Gray)

### Typography
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)

### Components
- **Glass Cards:** Backdrop blur with translucent backgrounds
- **Gradient Buttons:** Primary to accent color gradients
- **Smooth Animations:** Framer Motion powered transitions

## 📱 Pages & Features

### Home (`/`)
- Hero section with animated mesh background
- Feature showcase grid
- How it works timeline
- Testimonials slider
- CTA sections

### Features (`/features`)
- Sticky navigation subnav
- Detailed feature sections with images
- Interactive scroll-based highlighting

### Pricing (`/pricing`)
- Monthly/yearly toggle
- Three-tier pricing cards
- FAQ section
- Enterprise contact form

### About (`/about`)
- Company mission and values
- Team member cards
- Interactive timeline
- Statistics showcase

### Contact (`/contact`)
- Contact method cards
- Functional contact form with validation
- Toast notifications
- Quick links to FAQ/docs

### Auth Pages (`/login`, `/signup`)
- Form validation with real-time feedback
- Password requirements checker
- Social login placeholders
- Responsive design

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Optimized for all screen sizes

### Animations
- Scroll-triggered animations with AOS
- Page transitions with Framer Motion
- Hover effects and micro-interactions
- Respects `prefers-reduced-motion`

### Performance
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size
- Fast loading times

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔮 Future Enhancements

- [ ] Real API integration
- [ ] User authentication system
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] PWA capabilities
- [ ] Advanced analytics integration
- [ ] A/B testing framework

## 🐛 Known Issues

- Mock API calls simulate real backend interactions
- Social login buttons are placeholders
- Dashboard redirect points to localhost:3001 (update for production)

## 📄 License

MIT License - feel free to use this project for learning and commercial purposes.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
- Images by [Unsplash](https://unsplash.com)
- Animations by [Framer Motion](https://framer.com/motion)

---

Built with ❤️ using React and modern web technologies.# MAVIX_Frontend
# MAVIX_Frontend
# MAVIX_Frontend
