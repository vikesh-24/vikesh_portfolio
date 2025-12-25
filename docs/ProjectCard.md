# ProjectCard Component Documentation

## Overview

The `ProjectCard` component is a TypeScript-based, feature-rich card component designed to showcase projects in a professional portfolio. It includes advanced features like WhatsApp integration, PostgreSQL knowledge display, and comprehensive project management capabilities.

## Features

### ✅ Core Features
- **Project Image Display**: Priority loading with Next.js Image optimization
- **Project Title**: Clear, prominent project names
- **Short Description**: 2-line maximum with proper truncation
- **Technology Badges**: Maximum 4 shown with overflow indicator
- **Project Links**: Live demo, GitHub, and WhatsApp contact options
- **Hover Effects**: Smooth animations and interactive feedback
- **Responsive Design**: Grid layout that adapts to all screen sizes
- **TypeScript Support**: Full type safety with comprehensive interfaces

### ✅ Advanced Features
- **WhatsApp Integration**: Direct contact through WhatsApp Business API
- **PostgreSQL Knowledge**: Database expertise highlighting
- **Status Indicators**: Completed, in-progress, planned project states
- **Featured Projects**: Special highlighting for standout projects
- **Category Filtering**: Web, mobile, fullstack, API, database categories
- **Priority Loading**: Optimized image loading for better performance
- **Accessibility**: ARIA labels and keyboard navigation support

## TypeScript Interfaces

### ProjectTechnology
```typescript
export interface ProjectTechnology {
  name: string
  color: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
}
```

### ProjectLink
```typescript
export interface ProjectLink {
  type: 'demo' | 'github' | 'whatsapp'
  url: string
  label: string
}
```

### ProjectCardProps
```typescript
export interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: ProjectTechnology[]
  links: ProjectLink[]
  category: 'web' | 'mobile' | 'fullstack' | 'database' | 'api'
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'planned'
  priority?: boolean
}
```

## Usage Example

```typescript
import ProjectCard from './components/ProjectCard'

const projectData = {
  id: '1',
  title: 'Medical Representatives Management System',
  description: 'A comprehensive web application connecting medical representatives with healthcare providers.',
  image: '/images/projects/medical-system.jpg',
  category: 'fullstack',
  featured: true,
  status: 'completed',
  priority: true,
  technologies: [
    { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'PostgreSQL', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' }
  ],
  links: [
    { type: 'demo', url: 'https://demo.com', label: 'Live Demo' },
    { type: 'github', url: 'https://github.com/project', label: 'GitHub' },
    { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
  ]
}

<ProjectCard {...projectData} />
```

## Technology Icons

The component automatically maps technology names to appropriate icons:

- **React/Next.js/TypeScript**: Code icon
- **Node.js/Express.js**: Settings icon
- **PostgreSQL/MongoDB/MySQL**: Database icon
- **Kotlin/React Native**: Smartphone icon
- **CSS/Tailwind**: Palette icon
- **Git/Postman**: Settings icon

## WhatsApp Integration

### Features
- **Direct Contact**: Opens WhatsApp with pre-filled message
- **Project Context**: Includes project title in message
- **Professional Messaging**: Pre-formatted business inquiries
- **Cross-platform**: Works on mobile and desktop

### Implementation
```typescript
const handleWhatsAppClick = (phoneNumber: string) => {
  const message = `Hi Vikesh! I'm interested in your project: ${title}. Can you tell me more about it?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
```

## Responsive Design

### Grid Layout
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Large Desktop**: 3 columns with larger cards

### Breakpoints
```css
grid md:grid-cols-2 lg:grid-cols-3 gap-8
```

## Hover Effects

### Card Interactions
- **Lift Effect**: Cards rise on hover
- **Scale Effect**: Subtle scaling for feedback
- **Shadow Enhancement**: Dynamic shadow changes
- **Image Zoom**: Project images scale on hover

### Button Interactions
- **Scale Animation**: Buttons scale on hover/tap
- **Color Transitions**: Smooth color changes
- **Icon Animations**: Icon movements for feedback

## Status Management

### Project Statuses
- **Completed**: Green badge with checkmark
- **In Progress**: Yellow badge with progress indicator
- **Planned**: Blue badge with calendar icon

### Featured Projects
- **Special Ring**: Gradient border for featured projects
- **Featured Badge**: Prominent "Featured" label
- **Priority Loading**: Featured projects load first

## Database Expertise

### PostgreSQL Features
- **Advanced Queries**: Complex SQL operations
- **Performance Optimization**: Query optimization skills
- **Data Modeling**: Database design expertise
- **Integration**: Seamless API integration

### Technology Stack
- **PostgreSQL**: Primary relational database
- **MongoDB**: NoSQL database for flexibility
- **MySQL**: Traditional relational database
- **Redis**: Caching and session management

## Performance Optimizations

### Image Loading
- **Priority Loading**: Critical images load first
- **Lazy Loading**: Non-critical images load on demand
- **Responsive Images**: Different sizes for different screens
- **WebP Support**: Modern image format support

### Code Splitting
- **Dynamic Imports**: Components load on demand
- **Bundle Optimization**: Minimal bundle size
- **Tree Shaking**: Unused code elimination

## Accessibility Features

### ARIA Support
- **Labels**: Proper labeling for screen readers
- **Descriptions**: Detailed project descriptions
- **Navigation**: Keyboard navigation support
- **Focus Management**: Proper focus indicators

### Color Contrast
- **High Contrast**: Meets WCAG guidelines
- **Dark Mode**: Full dark mode support
- **Color Blindness**: Color-safe design choices

## Customization

### Styling
```typescript
// Custom colors for technologies
const customColors = {
  'React': 'bg-blue-100 text-blue-800',
  'PostgreSQL': 'bg-blue-100 text-blue-800',
  'TypeScript': 'bg-blue-100 text-blue-800'
}
```

### Animation
```typescript
// Custom animation variants
const customVariants = {
  hover: { scale: 1.05, y: -5 },
  tap: { scale: 0.95 }
}
```

## Error Handling

### Image Fallbacks
- **Loading States**: Skeleton loading for images
- **Error States**: Fallback images for failed loads
- **Placeholder**: Professional placeholder design
- **Retry Logic**: Automatic retry on failure

### Data Validation
- **Type Checking**: TypeScript validation
- **Required Fields**: Required prop validation
- **Default Values**: Sensible defaults for optional props
- **Error Boundaries**: Graceful error handling

## Integration Examples

### With Projects Component
```typescript
import { projectsData } from '../data/projects'

{projectsData.map(project => (
  <ProjectCard key={project.id} {...project} />
))}
```

### With Filter System
```typescript
const filteredProjects = projectsData.filter(
  project => project.category === activeFilter
)
```

## Best Practices

### Data Structure
- **Consistent Format**: Standardized project data format
- **Image Optimization**: Proper image sizing and formats
- **Link Validation**: Valid URLs and proper routing
- **Technology Mapping**: Consistent technology naming

### Performance
- **Lazy Loading**: Load components when needed
- **Memoization**: Prevent unnecessary re-renders
- **Bundle Splitting**: Separate concerns in bundles
- **Caching**: Proper caching strategies

### SEO
- **Alt Text**: Descriptive image alt text
- **Meta Tags**: Proper meta information
- **Structured Data**: Schema markup for projects
- **Semantic HTML**: Proper HTML structure

## Troubleshooting

### Common Issues
1. **Image Not Loading**: Check image path and format
2. **TypeScript Errors**: Verify prop types and interfaces
3. **Styling Issues**: Check Tailwind class names
4. **Animation Problems**: Verify Framer Motion setup

### Debug Tips
- Use React DevTools for component inspection
- Check browser console for errors
- Verify TypeScript compilation
- Test responsive behavior

## Future Enhancements

### Planned Features
- **Video Previews**: Project video demonstrations
- **Live Statistics**: Real-time project metrics
- **Collaboration Tools**: Team collaboration features
- **Analytics Integration**: Project performance tracking

### Technical Improvements
- **Server-Side Rendering**: Better SEO and performance
- **Progressive Web App**: Offline functionality
- **Internationalization**: Multi-language support
- **Advanced Filtering**: More sophisticated filtering options 