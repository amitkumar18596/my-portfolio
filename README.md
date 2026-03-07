# Modern Portfolio Website

A stunning, responsive, and high-performance personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Dark/Light Mode**: Seamless theme switching with system preference support.
- **Smooth Animations**: Engaging scroll-triggered animations and layout transitions using Framer Motion.
- **Component-Based**: Clean and maintainable architecture with reusable React components.
- **SEO Friendly**: Optimized metadata and semantic HTML for better search engine visibility.
- **Modern UI**: Premium design with glassmorphism, gradients, and micro-interactions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: TypeScript

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router files (layout, page, globals.css)
├── components/     # UI Components
│   ├── layout/     # Shared layout parts (Navbar, Footer, etc.)
│   ├── sections/   # Main page sections (Hero, About, Projects, etc.)
│   └── ThemeProvider.tsx
├── lib/            # Utility functions
└── styles/         # Global styles and Tailwind markers
```

## 🚥 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone or download the repository.
2. Navigate to the project directory:
   ```bash
   cd "Amit Portfolio"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3001/my-portfolio](http://localhost:3001/my-portfolio).

## 📄 Sections

- **Hero**: Catchy introduction with key CTA buttons.
- **About**: Personal profile and professional statistics.
- **Skills**: Categorized technical expertise.
- **Projects**: Showcase of recent work with tech stack details.
- **Contact**: Professional contact form and social links.

