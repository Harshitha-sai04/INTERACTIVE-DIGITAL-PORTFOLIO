# Interactive Digital Portfolio

A modern, responsive portfolio website showcasing skills, projects, and professional experience as an aspiring software engineer.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Responsive Layout**: Mobile-first approach that works seamlessly across all devices
- **Interactive Elements**: Smooth hover effects, scroll animations, and dynamic content
- **Performance Optimized**: Fast loading with WebP images, minified CSS, and optimized JavaScript
- **Accessibility Ready**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, structured data, and semantic HTML for better search visibility

## 🚀 Live Demo

[View Portfolio](https://yourdomain.com) <!-- Replace with your actual URL -->

## 📱 Screenshots

### Desktop View
![Desktop View](screenshot-desktop.png)

### Mobile View  
![Mobile View](screenshot-mobile.png)

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive functionality and smooth animations
- **GSAP** - Professional-grade animations and scroll effects

### Tools & Libraries
- **PostCSS** - CSS processing and optimization
- **CSS Nano** - CSS minification
- **Terser** - JavaScript minification
- **Sharp** - Image optimization and WebP conversion

## 📁 Project Structure

```
interactive-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Source CSS styles
│   ├── style.min.css      # Minified CSS for production
│   ├── responsive.css     # Responsive design rules
│   └── animations.css     # Animation keyframes and effects
├── js/
│   ├── main.js           # Core JavaScript functionality
│   ├── animations.js     # GSAP animations
│   └── smooth-scroll.js  # Enhanced scroll behavior
├── assets/
│   ├── images/
│   │   ├── profile.webp         # Profile photo (WebP format)
│   │   ├── climatescope-preview.webp # ClimateScope project preview
│   │   └── homepage.webp        # CRR IT Learners project preview
│   └── icons/
│       └── social-icons/        # Social media icons
├── scripts/
│   ├── convert-images.js        # Image optimization script
│   ├── build-optimizer.js      # Build process automation
│   └── extract-critical.js     # Critical CSS extraction
├── package.json                 # Node.js dependencies
└── README.md                   # Project documentation
```

## 🎨 Sections

### Hero Section
- **Top Info Bar**: Contact information and availability status
- **Navigation**: Smooth scrolling navigation with active link highlighting
- **Introduction**: Name, title, and professional summary
- **Call-to-Action**: Primary buttons for portfolio navigation

### About Me
- Personal background and education details
- Current CGPA (8.82/10) and academic achievements
- Key statistics: Projects, Internships, and Academic performance

### Technical Skills
- **Programming Languages**: Python, JavaScript, HTML5, CSS3, Java
- **Frameworks & Libraries**: NumPy, Pandas, Matplotlib
- **Tools & Technologies**: Git, VS Code, Power BI, MySQL, Jupyter Notebook

### Featured Projects

#### 1. ClimateScope: Weather Analysis Dashboard  
- **Description**: Comprehensive weather data analysis across 200+ countries
- **Technologies**: Python, Power BI, Pandas, NumPy, Matplotlib
- **Data Processed**: 88,000+ weather records
- **GitHub**: [View Repository](https://github.com/Harshitha-sai04/DV-Climatescope-Harshitha-Sai)

#### 2. CRR IT Learners: Frontend Platform
- **Description**: Academic resource platform with course materials and papers
- **Technologies**: HTML5, CSS3, Vanilla JavaScript, Google Forms/Sheets
- **Focus**: Mobile-friendly, maintainable, backend-free solution
- **GitHub**: [View Repository](https://github.com/Harshitha-sai04/CRR-IT-Learners)

### Professional Experience

#### Front End Web Development Intern
**IBM SkillsBuild — Edunet Foundation** (August 2025 – Present)
- Developed JavaScript applications improving UX by 25%
- Achieved 98% accessibility compliance
- Reduced support tickets by 35% through coding best practices

#### Data Visualization Intern  
**Infosys Springboard** (August 2025 – Present)
- Built 8+ interactive dashboards using EDA
- Increased business intelligence insights by 60%
- Processed 100K+ records using Tableau and Power BI

### Contact
- **Email**: harshithasai@gmail.com
- **Phone**: +91-XXXXXXXXXX 
- **LinkedIn**: [linkedin.com/in/harshithasain](https://linkedin.com/in/harshithasain/)
- **GitHub**: [github.com/Harshitha-sai04](https://github.com/Harshitha-sai04)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harshitha-sai04/interactive-portfolio.git
   cd interactive-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View in browser**
   Open [http://localhost:3000](http://localhost:3000)

### Build for Production

1. **Optimize images**
   ```bash
   npm run convert-images
   npm run generate-responsive
   ```

2. **Build optimized assets**
   ```bash
   npm run build
   ```

3. **Extract critical CSS**
   ```bash
   npm run extract-critical
   ```

4. **Deploy**
   ```bash
   npm run serve
   ```

## 🎯 Performance Features

### Image Optimization
- **WebP Format**: Modern image format for better compression
- **Responsive Images**: Multiple sizes for different screen resolutions  
- **Lazy Loading**: Images load only when needed using Intersection Observer

### CSS Optimization
- **Minification**: Reduced file sizes for faster loading
- **Critical CSS**: Above-the-fold styles loaded first
- **Custom Properties**: Maintainable CSS variables for theming

### JavaScript Optimization
- **ES6+ Features**: Modern JavaScript for better performance
- **Code Splitting**: Lazy loading of non-critical JavaScript
- **Debouncing/Throttling**: Optimized scroll event handling

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1200px
- **Large Desktop**: 1200px+

### Mobile Features
- Hamburger navigation menu
- Touch-optimized buttons and links
- Optimized typography scaling
- Compressed images for faster mobile loading

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Focus Indicators**: Clear visual focus states
- **Reduced Motion**: Respects user motion preferences
- **High Contrast**: Accessible color combinations

## 🔧 Customization

### Colors
Update CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #667eea;    /* Main brand color */
  --secondary-color: #764ba2;  /* Secondary brand color */
  --accent-color: #f093fb;     /* Accent highlights */
}
```

### Content
- **Personal Info**: Update `index.html` hero section
- **Projects**: Modify project cards with your own work
- **Skills**: Add/remove skills in the skills grid
- **Experience**: Update timeline with your background

### Images
- Replace images in `assets/images/` with your own
- Run `npm run convert-images` to optimize new images
- Update image paths in HTML accordingly

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (main)
4. Site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Import repository to Vercel
2. Configure build settings
3. Deploy with one click

## 📊 Performance Metrics

### Target Scores (Lighthouse)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+  
- **SEO**: 100

### Optimizations Applied
- Image optimization and WebP conversion
- CSS and JavaScript minification
- Critical resource prioritization
- Efficient caching strategies

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: Emoji icons for consistent cross-platform display
- **Fonts**: Google Fonts (Inter) for clean typography
- **Animation Library**: GSAP for smooth professional animations
- **Images**: Custom project screenshots and professional photos

## 📞 Support

For any questions or support:
- **Email**: harshithasai@gmail.com
- **LinkedIn**: [Harshitha Sai](https://linkedin.com/in/harshithasain/)
- **GitHub Issues**: [Create an issue](https://github.com/Harshitha-sai04/interactive-portfolio/issues)

---

**Built with ❤️ by Naraharisetti Harshitha Sai**

*Last Updated: September 2025*