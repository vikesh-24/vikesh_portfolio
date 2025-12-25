export type ProjectLink = {
  type: 'demo' | 'github' | 'whatsapp'
  url: string
  label: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  category: 'fullstack' | 'web' | 'mobile' | 'database' | 'api' | 'management'
  featured?: boolean
  status?: 'completed' | 'in-progress' | 'planned'
  priority?: boolean
  technologies: string[]
  links: ProjectLink[]
  role: string
  outcomes: string[]
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'KFM Studio Web Page',
    description: 'Led and developed a full-stack MERN website for KFM Studio. As Project Manager, I coordinated client requirements, managed development timeline, and ensured quality delivery while also handling full-stack development tasks.',
    image: '/images/kfm-studio.jpg',
    category: 'management',
    featured: true,
    status: 'completed',
    priority: true,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Project Management'],
    links: [
      { type: 'demo', url: '#', label: 'Live Demo' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Project Manager & Developer',
    outcomes: [
      'Successfully delivered full MERN stack website',
      'Managed entire project lifecycle',
      'Coordinated client requirements and delivery'
    ]
  },
  {
    id: '2',
    title: 'E-Commerce System',
    description: 'Built an e-commerce site with MERN stack. As Team Lead, I managed Scrum ceremonies, coordinated team tasks, resolved blockers, and developed key features including product management and shopping cart.',
    image: '/images/ecommerce-system.jpg',
    category: 'management',
    status: 'completed',
    priority: true,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Scrum'],
    links: [
      { type: 'demo', url: '#', label: 'Live Demo' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Team Lead & Full-Stack Developer',
    outcomes: [
      'Led Scrum activities and sprints',
      'Developed product and cart features',
      'Ensured effective team coordination'
    ]
  },
  {
    id: '3',
    title: 'Task Manager Mobile App',
    description: 'Led Agile development of a task management mobile app. As Project Manager, I used Trello for sprint planning, managed development milestones, coordinated team tasks, and developed core features using Kotlin and SQLite.',
    image: '/images/task-manager-app.jpg',
    category: 'management',
    status: 'completed',
    priority: true,
    technologies: ['Android Studio', 'Kotlin', 'SQLite', 'Trello', 'Agile'],
    links: [
      { type: 'demo', url: '#', label: 'App Demo' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Team Lead & Developer',
    outcomes: [
      'Managed Agile development process',
      'Used Trello for project planning',
      'Built core app features with Kotlin'
    ]
  },
  {
    id: '4',
    title: 'Online Grocery Ordering System',
    description: 'Developed a comprehensive grocery ordering system. As Full-Stack Developer, I managed the project timeline, coordinated database design, and integrated front-end and back-end systems using Java, HTML, CSS, and MySQL.',
    image: '/images/grocery-system.jpg',
    category: 'management',
    status: 'completed',
    priority: false,
    technologies: ['Java', 'HTML', 'CSS', 'MySQL', 'Full-Stack'],
    links: [
      { type: 'demo', url: '#', label: 'Project Demo' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-Stack Developer',
    outcomes: [
      'Integrated front-end and back-end systems',
      'Created user-friendly ordering interface',
      'Implemented secure database operations'
    ]
  },
  {
    id: '5',
    title: 'Chemical Lab Management System',
    description: 'Built a comprehensive chemical lab management system. As Full-Stack Developer, I managed project requirements, designed database schema, coordinated system testing, and implemented full-stack solution using MongoDB, Express.js, React.js, and Node.js.',
    image: '/images/chemical-lab-system.jpg',
    category: 'management',
    status: 'completed',
    priority: false,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full-Stack'],
    links: [
      { type: 'demo', url: '#', label: 'Project Demo' },
      { type: 'whatsapp', url: '94771129911', label: 'Discuss Project' }
    ],
    role: 'Full-Stack Developer',
    outcomes: [
      'Built comprehensive lab management system',
      'Implemented chemical inventory tracking',
      'Created efficient lab operation workflows'
    ]
  }
]
