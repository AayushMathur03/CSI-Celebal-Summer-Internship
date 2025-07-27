# Aayush's Personal Portfolio

[![Render](https://img.shields.io/badge/Deployed%20on-Render-00c7b7?logo=render&logoColor=white)](https://portfolio-website-rxmy.onrender.com)

> A modern, responsive personal portfolio website showcasing projects, skills, education, and experience with an interactive dark/light mode interface.

## 🌟 Live Demo

**Experience the portfolio:** [https://portfolio-website-rxmy.onrender.com](https://portfolio-website-rxmy.onrender.com)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Sections Overview](#-sections-overview)
- [Customization Guide](#-customization-guide)


## 🎯 Overview

This portfolio website is built with vanilla HTML, CSS, and JavaScript, featuring a clean, modern design with smooth animations and full responsiveness across all devices. The site includes interactive elements, a dark/light mode toggle, and showcases professional information in an engaging format.

## ✨ Features

- **Modern Design System**: Clean, professional layout with glassmorphism effects
- **Dark/Light Mode Toggle**: Seamless theme switching with user preference persistence
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions and hover effects throughout
- **Custom Cursor**: Enhanced user experience with animated cursor
- **Project Gallery**: Dynamic showcase with tech stack tags and GitHub integration
- **Timeline Components**: Visual education and experience timelines
- **Contact Form**: Functional contact form with client-side validation
- **Social Integration**: Direct links to GitHub, LinkedIn, and email
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code, Sublime Text, etc.)
- Optional: Local web server for development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the website**
   ```bash
   # Option 1: Direct browser opening
   open index.html
   # or double-click index.html in your file explorer
   
   # Option 2: Using Python's built-in server (recommended for development)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js live-server (if installed)
   npx live-server
   ```

3. **View your portfolio**
   - Open your browser and navigate to the local file or server address
   - The website should load with all features functional

### Development Setup

For active development with live reloading:

```bash
# Install live-server globally (optional)
npm install -g live-server

# Navigate to project directory
cd portfolio-website

# Start development server
live-server --port=3000 --open=/index.html
```

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── styles.css              # Complete stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── LICENSE                 # MIT License file
└── assets/                 # Media and icon assets
    ├── profile.jpg         # Profile/headshot image
    ├── project1.png        # Project screenshot 1
    ├── project2.png        # Project screenshot 2
    ├── project3.png        # Project screenshot 3
    └── icons/              # SVG icon collection
        ├── github.svg      # GitHub icon (light theme)
        ├── github-dark.svg # GitHub icon (dark theme)
        ├── linkedin.svg    # LinkedIn icon
        ├── email.svg       # Email icon
        └── ...             # Additional skill/tech icons
```

## 🎨 Sections Overview

### 🏠 Home Section
- Animated hero area with typewriter effect
- Professional introduction and tagline
- Call-to-action buttons for resume and contact

### 👨‍💻 About Me Section
- Professional profile image
- Personal biography and career summary
- Interactive "Fun Fact" button with rotating facts
- Skills overview with visual progress indicators

### 🛠️ Skills Section
- Technology stack with branded icons
- Proficiency levels with animated progress bars
- Categorized by Frontend, Backend, Tools, etc.

### 🎓 Education Section
- Interactive timeline of academic achievements
- Institution details with dates and degrees
- Responsive design for mobile viewing

### 💼 Experience Section
- Professional timeline with role details
- Company information and achievements
- Technology stack used in each position

### 🚀 Projects Section
- Grid-based project gallery
- Project screenshots with hover effects
- Technology tags and GitHub repository links
- Live demo links where available

### 📬 Contact Section
- Functional contact form with validation
- Direct email and social media links
- Professional contact information

### 🔗 Footer
- Social media integration
- Copyright information
- Additional navigation links

## 🎨 Customization Guide

### Personal Information

1. **Update your details in `index.html`:**
   ```html
   <!-- Update name, title, and bio -->
   <h1>Your Name</h1>
   <p>Your Professional Title</p>
   
   <!-- Update social links -->
   <a href="https://github.com/yourusername">GitHub</a>
   <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
   ```

2. **Replace images in `assets/` folder:**
   ```bash
   # Replace with your images (maintain same filenames or update HTML references)
   assets/profile.jpg        # Your professional headshot
   assets/project1.png       # Your project screenshots
   assets/project2.png
   assets/project3.png
   ```

### Styling Customization

1. **Update CSS variables in `styles.css`:**
   ```css
   :root {
     --primary-color: #your-color;      /* Main accent color */
     --secondary-color: #your-color;    /* Secondary accent */
     --background-light: #your-color;   /* Light theme background */
     --background-dark: #your-color;    /* Dark theme background */
     --text-light: #your-color;         /* Light theme text */
     --text-dark: #your-color;          /* Dark theme text */
   }
   ```

2. **Customize fonts:**
   ```css
   /* Update font imports at top of styles.css */
   @import url('https://fonts.googleapis.com/css2?family=Your-Font&display=swap');
   
   /* Update font variables */
   --font-primary: 'Your-Font', sans-serif;
   --font-secondary: 'Your-Secondary-Font', monospace;
   ```

### Content Updates

1. **Skills Section**: Update the skills array in `script.js`
2. **Projects Section**: Modify project data in the HTML
3. **Experience/Education**: Update timeline entries with your information
4. **Fun Facts**: Edit the facts array in `script.js`

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables, CSS Animations
- **Icons**: Custom SVG icons, Font Awesome integration
- **Fonts**: Google Fonts (Space Grotesk, Fira Mono)
- **Deployment**: Render (or any static hosting service)

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

---

**Made with ❤️ by Aayush** | [Report Bug](https://github.com/your-username/portfolio-website/issues) | [Request Feature](https://github.com/your-username/portfolio-website/issues)
