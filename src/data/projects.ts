export type ProjectStatus = 'Live' | 'In Development'

export type ProjectImage = {
  src: string
  alt: string
  label: string
}

export type Project = {
  title: string
  subtitle: string
  status: ProjectStatus
  featured?: boolean
  description: string
  tech: string[]
  highlights: string[]
  learned?: string
  images: ProjectImage[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: 'OpsFlow',
    subtitle: 'Full-Stack Operations Management Platform',
    status: 'Live',
    featured: true,
    description:
      'OpsFlow is a full-stack platform designed to streamline internal service requests. Employees can submit and track requests, while staff and managers can manage request progress, collaborate through comments, and monitor operational performance through role-based dashboards.',
    tech: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'JWT',
      'Vercel',
      'Render',
      'Neon',
    ],
    highlights: [
      'JWT authentication with protected frontend and backend routes',
      'Role-based experiences for employees, staff, and managers',
      'Request creation, filtering, status updates, and history timelines',
      'Comment-based collaboration on individual requests',
      'Manager analytics for request volume and resolution performance',
      'Persistent light and dark themes',
      'Production deployment across Vercel, Render, and Neon',
    ],
    learned:
      'Building OpsFlow strengthened my understanding of how a React frontend, Express API, authentication system, and relational database work together in production. I also gained experience troubleshooting deployment issues and designing interfaces around real authorization rules.',
    images: [
      {
        src: '/projects/opsflow/opsflow-login.png',
        alt: 'OpsFlow sign-in page',
        label: 'Authentication',
      },
      {
        src: '/projects/opsflow/opsflow-dashboard.png',
        alt: 'OpsFlow employee dashboard',
        label: 'Employee Dashboard',
      },
      {
        src: '/projects/opsflow/opsflow-request-detail.png',
        alt: 'OpsFlow request detail page showing its timeline and comments',
        label: 'Request Details',
      },
      {
        src: '/projects/opsflow/opsflow-analytics.png',
        alt: 'OpsFlow manager analytics dashboard',
        label: 'Manager Analytics',
      },
    ],
    liveUrl: 'https://opsflow-rycaillet.vercel.app/',
    githubUrl: 'https://github.com/rycaillet/opsflow',
  },
  {
    title: 'SideQuest',
    subtitle: 'Activity Recommendation Application',
    status: 'Live',
    description:
      'SideQuest is a responsive web application that helps users discover real activities around Fairfax and Northern Virginia based on budget, energy level, setting, group type, and search preferences. It was designed to make local activity planning simple through a clear interface and focused recommendation logic.',
    tech: [
      'JavaScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'Filtering Logic',
      'Local Storage',
    ],
    highlights: [
      'Preference-based activity recommendation system',
      'Filtering by budget, energy level, setting, group type, and keywords',
      'Reusable JavaScript functions with separated responsibilities',
      'Random recommendation and detailed activity views',
      'Saved favorites persisted with local storage',
      'Responsive interface for desktop and mobile users',
    ],
    learned:
      'SideQuest helped me practice organizing application behavior into focused JavaScript functions and connecting user selections to useful recommendations. It also reinforced the importance of validation, clear feedback, persistent client-side state, and responsive design.',
    images: [
      {
        src: '/projects/sidequest/sidequest-home.png',
        alt: 'SideQuest landing page introducing the local activity recommendation experience',
        label: 'Landing Page',
      },
      {
        src: '/projects/sidequest/sidequest-preferences.png',
        alt: 'SideQuest preference form for budget, setting, group type, energy level, and keywords',
        label: 'Preference Selection',
      },
      {
        src: '/projects/sidequest/sidequest-results.png',
        alt: 'SideQuest activity results showing multiple matching local recommendations',
        label: 'Recommendation Results',
      },
      {
        src: '/projects/sidequest/sidequest-details.png',
        alt: 'SideQuest activity detail modal showing recommendation context and activity information',
        label: 'Quest Details',
      },
    ],
    liveUrl: 'https://rycaillet-sidequest.surge.sh/',
    githubUrl: 'https://github.com/rycaillet/SideQuest',
  },
  {
    title: 'AI Golf Swing Coach',
    subtitle: 'Computer Vision and AI Coaching Platform',
    status: 'In Development',
    description:
      'An upcoming application designed to analyze golf swing videos and provide practical, understandable feedback. The goal is to combine computer vision, video processing, and personalized coaching into a useful tool for everyday golfers.',
    tech: [
      'React',
      'TypeScript',
      'Python',
      'Computer Vision',
      'AI',
      'Video Processing',
    ],
    highlights: [
      'Golf swing video upload and playback',
      'Body position and movement analysis',
      'Actionable feedback written for everyday golfers',
      'Progress tracking across multiple swing submissions',
    ],
    images: [],
  },
]