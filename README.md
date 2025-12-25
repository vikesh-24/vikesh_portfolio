# Vikesh  - Professional Portfolio

A modern, responsive portfolio website built with Next.js, showcasing professional web development skills and projects.

## 🚀 Features

- **Professional Design**: Clean, modern UI with professional color scheme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Profile Picture Banner**: Professional hero section with profile image
- **Interactive Projects**: Detailed project showcase with modal views
- **Contact Form**: Professional contact section with form validation
- **SEO Optimized**: Meta tags and structured data for better visibility

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
app/
├── components/
│   ├── Hero.jsx          # Professional hero section with profile banner
│   ├── About.jsx         # About section with education
│   ├── Skills.jsx        # Skills and technologies
│   ├── Projects.jsx      # Project showcase with modals
│   ├── Contact.jsx       # Contact form and information
│   ├── Footer.jsx        # Footer with social links
│   ├── Navbar.jsx        # Navigation component
│   └── ThemeProvider.jsx # Dark/light mode provider
├── globals.css           # Global styles and Tailwind config
├── layout.jsx           # Root layout with metadata
└── page.jsx             # Main page component
```

## 🎨 Customization Guide

### Adding Your Profile Picture

1. **Replace the placeholder image**:
   - Add your profile photo to `/public/images/profile-placeholder.jpg`
   - Recommended size: 400x400px or larger (square aspect ratio)
   - Format: JPG, PNG, or WebP

2. **Update the image path** in `Hero.jsx`:
   ```jsx
   <Image
     src="/images/your-profile-photo.jpg"  // Update this path
     alt="Your Name"
     // ... other props
   />
   ```

### Adding Your Resume

1. **Add your resume** to `/public/resume.pdf`
2. **Update the download link** in `Hero.jsx`:
   ```jsx
   const downloadResume = () => {
     const resumeUrl = '/your-resume.pdf'  // Update this path
     window.open(resumeUrl, '_blank')
   }
   ```

### Updating Personal Information

1. **Contact Information**: Update in `Hero.jsx` and `Contact.jsx`
2. **About Section**: Modify content in `About.jsx`
3. **Skills**: Update skills list in `Skills.jsx`
4. **Projects**: Add your projects in `Projects.jsx`

### Customizing Colors

The portfolio uses a professional color scheme. To customize:

1. **Primary Colors**: Update in `tailwind.config.js`
2. **Gradients**: Modify gradient classes in components
3. **Theme Colors**: Adjust dark/light mode colors

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Vikesh
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema markup for better search visibility

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer

## 🌟 Key Features

### Hero Section
- Professional profile picture banner
- Animated gradient text
- Experience statistics
- Call-to-action buttons
- Floating social links

### About Section
- Professional background information
- Education timeline
- Personal information display

### Skills Section
- Categorized skill display
- Progress indicators
- Additional expertise highlights

### Projects Section
- Interactive project cards
- Detailed project modals
- Technology tags
- Feature lists

### Contact Section
- Professional contact form
- Contact information cards
- Social media links
- Availability status

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: vikeshramesh1@gmail.com
- **LinkedIn**: [Vikesh ](https://www.linkedin.com/in/vikesh-ramesh-7bb901288/)
- **GitHub**: [Vikesh0702](https://github.com/Vikesh0702)

---

**Built with ❤️ by Vikesh ** 