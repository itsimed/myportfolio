# Personal Portfolio

A modern, responsive personal portfolio website built with Vite, React, TypeScript, and TailwindCSS.

## ✨ Features

- **Modern Design**: Clean, minimal design with a green (#59d102) and yellow (#f3f520) gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **TypeScript**: Full TypeScript support for better development experience
- **Modular Components**: Well-organized, reusable components
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Sections

- **Hero Section**: Full-screen introduction with gradient background and CTA
- **About Section**: Personal introduction with avatar and description
- **Skills Section**: Interactive skill grid with progress bars and icons
- **Projects Section**: Showcase of featured projects with descriptions and links
- **Contact Section**: Contact form and social media links
- **Navigation**: Responsive navbar with smooth scrolling

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/) - Build tool and development server
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Hero section component
│   ├── About.tsx       # About section component
│   ├── Skills.tsx      # Skills section component
│   ├── Projects.tsx    # Projects section component
│   ├── Contact.tsx     # Contact section component
│   └── Navbar.tsx      # Navigation component
├── config/             # Configuration files
│   ├── colors.ts       # Color palette configuration
│   ├── fonts.ts        # Font configuration
│   ├── theme.ts        # Theme configuration
│   └── assets.ts       # Assets configuration
├── styles/             # Global styles
├── assets/             # Static assets
├── data/               # Static data
├── types/              # TypeScript type definitions
├── ui/                 # Atomic UI components
├── layout/             # Layout components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── constants/          # Application constants
```

## 🎨 Customization

### Colors

The color theme can be customized in `src/config/colors.ts`:

```typescript
export const colors = {
  primary: '#59d102',    // Green theme
  secondary: '#f3f520',  // Yellow theme
  background: '#000000', // Black background
  foreground: '#ffffff', // White text
  // ... other colors
};
```

### Content

1. **Personal Information**: Update the content in each component file
2. **Projects**: Modify the projects array in `src/components/Projects.tsx`
3. **Skills**: Update the skills array in `src/components/Skills.tsx`
4. **Contact**: Update social links and contact information in `src/components/Contact.tsx`

### Styling

The project uses TailwindCSS with custom configuration in `tailwind.config.js`. Custom colors and gradients are defined for easy theming.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Mobile (sm): 640px and up
- Tablet (md): 768px and up
- Desktop (lg): 1024px and up
- Large Desktop (xl): 1280px and up

## 🎭 Animations

The portfolio includes several animation features:

- **Scroll-triggered animations**: Elements animate in as they come into view
- **Hover effects**: Interactive hover states for buttons and cards
- **Smooth scrolling**: Navigation links smoothly scroll to sections
- **Loading animations**: Progressive content loading with stagger effects

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project includes:

- ESLint for code linting
- TypeScript for type checking
- Prettier-compatible formatting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📬 Contact

- GitHub: [@username](https://github.com/username)
- LinkedIn: [Your Name](https://linkedin.com/in/username)
- Email: your.email@example.com

---

⭐ Star this repo if you find it helpful!