# Rylan McNeil - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work experience, projects, and skills as a frontend developer specializing in blockchain and Web3 applications.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Modern UI/UX** - Clean, professional design with hover effects and micro-interactions
- **Performance Optimized** - Fast loading times with Next.js 15 and Turbopack
- **TypeScript** - Full type safety throughout the application
- **Accessible** - WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-themes** - Dark mode support

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📁 Project Structure

```
portfolioV2/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact section
│   ├── Navbar.tsx         # Navigation bar
│   ├── FloatingSocials.tsx # Social media links
│   ├── StaticOverlay.tsx  # Visual effects
│   └── ui/                # Reusable UI components
│       ├── AnimatedHeader.tsx
│       ├── Container.tsx
│       ├── ScrollButton.tsx
│       └── ThemeToggle.tsx
├── context/               # React context
│   └── ThemeProvider.tsx  # Theme provider
├── data/                  # Static data
│   ├── experience.ts      # Work history data
│   └── projects.ts        # Projects data
├── types/                 # TypeScript types
│   └── index.ts
├── public/                # Static assets
│   └── images/           # Image assets
└── package.json          # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme
- **Light Theme**: Clean off-white background with dark accents
- **Dark Theme**: Deep black background with purple accents
- **Custom CSS Variables**: Consistent theming across components

### Animations
- Staggered entrance animations
- Smooth scroll transitions
- Hover effects and micro-interactions
- Intersection Observer based animations

### Responsive Breakpoints
- **Mobile**: 320px+
- **Tablet**: 640px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rylo-13/PortfolioV2.git
   cd portfolioV2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📋 Sections

### 1. Hero Section
- Animated hero text with staggered entrance
- Professional introduction
- Call-to-action elements

### 2. About Me
- Personal background and experience
- Technology stack showcase
- Professional bio

### 3. Work Experience
- Interactive work experience cards
- Company information and roles
- Detailed achievements and responsibilities
- Responsive timeline layout

### 4. Projects
- Showcase of key projects
- Project descriptions and technologies
- Live links to deployed projects
- Visual project previews

### 5. Contact
- Professional contact form
- Email integration
- Social media links

## 🎯 Key Features

### Navigation
- Fixed navigation bar with smooth scrolling
- Theme toggle button
- Mobile-responsive design
- Section highlighting on scroll

### Social Links
- Floating social media icons
- GitHub and LinkedIn integration
- Animated entrance effects

### Performance
- Optimized images with Next.js Image component
- Lazy loading for better performance
- Turbopack for faster builds
- Minimal bundle size

## 🔧 Customization

### Adding New Projects

Edit `data/projects.ts`:

```typescript
{
  id: "project-name",
  title: "Project Title",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  image: "/images/project-image.png",
  link: "https://project-url.com",
  github: "https://github.com/username/repo"
}
```

### Updating Work Experience

Edit `data/experience.ts`:

```typescript
{
  role: "Job Title",
  company: "Company Name",
  period: "Start Date — End Date",
  location: "Location",
  description: "Brief description",
  achievements: [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Animations**: Adjust timing in component files

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: rylanjmcneil@gmail.com
- **LinkedIn**: [Rylan McNeil](https://www.linkedin.com/in/rylanmcneil/)
- **GitHub**: [@Rylo-13](https://github.com/Rylo-13)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
