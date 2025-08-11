# NumberScope 🧮

**Explore the World of Numbers and Their Names**

NumberScope is an educational web application designed to help users understand, convert, and explore numbers of all magnitudes. From simple number-to-word conversions to complex mathematical concepts, NumberScope provides an intuitive interface for learning about numerical systems.

## ✨ Features

### 🔢 Core Tools
- **Number Converter** - Convert any number to its full English name with audio playback
- **Multiple Formats** - Scientific notation, engineering notation, Roman numerals, and more
- **Global Number Systems** - Explore how different cultures name and represent large numbers
- **Place Value Analysis** - Understand the structure of numbers through place value breakdown

### 🆕 Enhanced Learning Resources
- **Number Sequences** - Explore famous mathematical sequences like Fibonacci, prime numbers, and more
- **Math Constants** - Learn about important mathematical constants like π, e, and the golden ratio
- **Number Visualizer** - Understand large numbers through visual comparisons to familiar concepts
- **Mental Math Trainer** - Practice mental calculation skills with timed challenges and useful techniques
- **Scientific Calculator** - Advanced calculator with unlimited precision and support for large numbers
- **Cultural Significance** - Discover how different cultures perceive and use numbers in tradition and mythology
- **Number Glossary** - A searchable collection of definitions for number-related terms and concepts

### 🎯 Educational Features
- **Audio Playback** - Hear numbers pronounced correctly
- **Multiple Number Systems** - Short scale, long scale, and Indian number systems
- **Interactive Learning** - Hands-on tools for better understanding
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark/Light Mode** - Toggle between themes for comfortable viewing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NumberScoup
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
pnpm build
pnpm preview
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icon toolkit

### State Management & Data
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM** - Client-side routing for React applications

### Additional Libraries
- **Math.js** - Mathematics library for number operations
- **date-fns** - Modern JavaScript date utility library
- **Recharts** - Composable charting library for React
- **Sonner** - Toast notifications for React

## 📁 Project Structure

```
NumberScoup/
├── public/                 # Static assets and icons
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/       # Layout components (Header, Footer, Layout)
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and helpers
│   │   ├── number-utils.ts    # Number conversion utilities
│   │   └── utils.ts           # General utility functions
│   ├── pages/            # Application pages
│   │   ├── Index.tsx           # Homepage
│   │   ├── Converter.tsx       # Number converter tool
│   │   ├── Formats.tsx         # Number format examples
│   │   ├── Scales.tsx          # Number scale explorer
│   │   ├── Systems.tsx         # Number system comparison
│   │   ├── Sequences.tsx       # Mathematical sequences
│   │   ├── Constants.tsx       # Mathematical constants
│   │   ├── Visualizer.tsx      # Number visualization
│   │   ├── MentalMath.tsx      # Mental math trainer
│   │   ├── Calculator.tsx      # Scientific calculator
│   │   ├── Cultural.tsx        # Cultural number significance
│   │   ├── Glossary.tsx        # Number terminology
│   │   ├── About.tsx           # About page
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite build configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Key Components

### Layout System
- **Header** - Navigation menu with dropdown categories for Tools, Learn, and Explore
- **Footer** - Site information and links
- **Layout** - Wrapper component providing consistent structure

### Number Utilities (`src/lib/number-utils.ts`)
- Number-to-words conversion (short scale, long scale, Indian system)
- Scientific and engineering notation
- Roman numeral conversion
- Place value analysis
- Input validation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Collapsible navigation for mobile devices
- Touch-friendly interface elements

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Progressive Web App Features

- Responsive design for all screen sizes
- Fast loading with Vite
- Accessible UI components
- Offline-capable (with service worker support)

## 🔧 Development Scripts

```json
{
  "dev": "vite",                    # Start development server
  "build": "vite build",            # Build for production
  "lint": "eslint --quiet ./src",   # Run ESLint
  "preview": "vite preview"         # Preview production build
}
```

## 🎯 Use Cases

- **Students** - Learning number systems and mathematical concepts
- **Teachers** - Educational tool for mathematics classes
- **Developers** - Reference for number formatting and conversion
- **Researchers** - Exploring mathematical sequences and constants
- **General Users** - Understanding large numbers and their names

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **React community** for the excellent documentation and ecosystem

## 📞 Support

If you have any questions or need help with NumberScope, please:

1. Check the existing issues in the repository
2. Create a new issue with a clear description
3. Include steps to reproduce any bugs
4. Specify your browser and operating system

---

**Made with ❤️ for the love of numbers and mathematics**
