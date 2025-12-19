export const projects = [
  {
    id: 1,
    slug: "banking-system-oop",
    title: "Banking System (OOP & Data Structures)",
    description: "Comprehensive banking system demonstrating Object-Oriented Programming principles and Data Structures implementation",
    fullDescription: "A command-line banking system built with Java that showcases core OOP concepts including inheritance, polymorphism, encapsulation, and abstraction. This project implements custom data structures (LinkedList, Queue) for efficient account management and transaction processing. The system features role-based authentication with Admin and Customer access levels, complete CRUD operations for customers and accounts, and real-time transaction processing using queue-based FIFO ordering. Demonstrates understanding of OOP principles and data structure implementation through clean, well-documented code.",
    image: "/images/BankingOne.jpg",
    technologies: ["Java", "OOP", "Data Structures", "In-Memory Storage"],
    technologiesDetail: {
      "Java": "Core language leveraging OOP principles, collections framework, and exception handling for robust application logic",
      "OOP": "Implemented inheritance hierarchies, polymorphism for account types, encapsulation for data security, and abstraction for common behaviors",
      "Data Structures": "Custom implementations of LinkedList for transaction history and customer management, Queue for FIFO transaction processing, and efficient in-memory data management",
      "In-Memory Storage": "All data stored in-memory using Java Collections (LinkedList, Queue) with no external database dependency for focused learning on data structures"
    },
    category: "Java",
    featured: true,
    date: "2024-08",
    status: "Completed",
    problem: "Need to demonstrate understanding of OOP principles and custom data structure implementation in a practical, real-world scenario without the complexity of database integration.",
    solution: "Designed an educational banking system with clear class hierarchies implementing inheritance and polymorphism, custom LinkedList and Queue data structures for transaction management, and role-based authentication for security.",
    features: [
      {
        title: "Account Management",
        description: "Create, update, and manage different account types (Savings, Checking, Business) with inheritance hierarchy implementing polymorphic behavior"
      },
      {
        title: "Transaction Processing",
        description: "Efficient transaction handling using queues for pending transactions and stacks for maintaining transaction history with undo capabilities"
      },
      {
        title: "Custom Data Structures",
        description: "Hand-built LinkedList for managing customers and transaction histories, Queue implementation for FIFO transaction processing order"
      },
      {
        title: "Authentication System",
        description: "Role-based access control with Admin and Customer user types, password management, and session handling for secure operations"
      }
    ],
    challenges: [
      {
        challenge: "Implementing custom LinkedList and Queue data structures from scratch without using Java's built-in collections",
        solution: "Designed and implemented generic data structure classes with proper node linking, memory management, and efficient traversal algorithms"
      },
      {
        challenge: "Managing relationships between Customer and UserAccount entities while maintaining clean OOP design",
        solution: "Created comprehensive documentation and implemented clear linking patterns between authentication and customer data models"
      }
    ],
    learnings: [
      "Deep understanding of OOP principles including inheritance, polymorphism, encapsulation, and abstraction in practical applications",
      "How to implement custom data structures from scratch and understand their performance characteristics",
      "Importance of comprehensive code documentation and creating educational resources for complex systems",
      "Proper input validation strategies and error handling mechanisms to ensure system reliability"
    ],
    futureImprovements: [
      "Add database integration with MySQL or PostgreSQL for data persistence across sessions",
      "Implement file-based data serialization for saving and loading banking data",
      "Create a GUI using JavaFX or Swing to replace command-line interface",
      "Add support for interest calculations on savings accounts and overdraft fees on checking accounts"
    ],
    relatedProjects: [2],
    githubLink: "https://github.com/JuanAndrda/BankingProject",
    liveLink: null
  },
  {
    id: 2,
    slug: "banking-system-two",
    title: "Banking System Two",
    description: "Advanced banking system implementation with enhanced features and improved architecture",
    fullDescription: "An enhanced command-line banking system that builds upon the foundation of the first version with improved architecture and additional features. This implementation demonstrates refined OOP design with better abstraction layers, comprehensive documentation across 8 markdown files explaining core concepts, and Insertion Sort algorithm implementation for transaction ordering. The project showcases evolution in software design with clearer separation of concerns, enhanced validation patterns, and extensive educational documentation including detailed guides on class relationships, data structures, and transaction logic.",
    image: "/images/BankingTwo.jpg",
    technologies: ["Java", "OOP", "Algorithms"],
    technologiesDetail: {
      "Java": "Core Java with focus on collections framework, custom data structures (LinkedList, Stack, Queue), and comprehensive exception handling",
      "OOP": "Enhanced class design with inheritance hierarchies, polymorphism for account types, encapsulation, abstraction, and clear separation of concerns across multiple packages",
      "Algorithms": "Insertion Sort implementation for transaction ordering and sorting operations with detailed algorithm documentation"
    },
    category: "Java",
    featured: true,
    date: "2024-09",
    status: "Completed",
    problem: "Need to improve upon the initial banking system with better code organization, enhanced validation, and comprehensive documentation for educational purposes.",
    solution: "Restructured the codebase with improved package organization (models, auth, managers, utilities), implemented robust validation patterns, added Insertion Sort for data ordering, and created 8 comprehensive markdown documentation files.",
    features: [
      {
        title: "Enhanced Code Organization",
        description: "Well-structured package hierarchy with separate packages for models, authentication, managers, and utilities for better maintainability"
      },
      {
        title: "Comprehensive Documentation",
        description: "8 markdown files documenting OOP concepts, class relationships, data structures, transaction logic, exception handling, and customer-user linking"
      },
      {
        title: "Sorting Algorithm Implementation",
        description: "Insertion Sort algorithm for organizing transactions and account data with educational documentation explaining the implementation"
      },
      {
        title: "Improved Validation",
        description: "Robust input validation with ValidationPatterns and InputValidator utilities for data integrity and error prevention"
      }
    ],
    challenges: [
      {
        challenge: "Creating comprehensive documentation that effectively explains complex OOP concepts and system architecture to other learners",
        solution: "Developed 8 detailed markdown guides covering different aspects of the system, from basic concepts to advanced implementation details"
      },
      {
        challenge: "Improving code organization from the first version while maintaining backward compatibility with core features",
        solution: "Refactored into a clean package structure (auth, managers, models, utilities) with clear separation of concerns and responsibilities"
      }
    ],
    learnings: [
      "Importance of iterative development and refining code architecture based on lessons learned from previous versions",
      "How to create effective technical documentation that serves as both reference material and learning resource",
      "Implementing sorting algorithms (Insertion Sort) and understanding their practical applications",
      "Value of organized package structure and clear naming conventions for code maintainability"
    ],
    futureImprovements: [
      "Add more sorting algorithms (QuickSort, MergeSort) for performance comparison",
      "Implement additional data structures like Binary Search Trees for faster account lookups",
      "Add file persistence to save and load banking data between program executions",
      "Create unit tests to ensure code reliability and facilitate future refactoring"
    ],
    relatedProjects: [1],
    githubLink: "https://github.com/JuanAndrda/BankingSystemTwo",
    liveLink: null
  },
  {
    id: 3,
    slug: "techno-hub",
    title: "Techno Hub",
    description: "Technology-focused web platform project (In Planning)",
    fullDescription: "Techno Hub is a planned technology information platform concept designed to serve as a central hub for tech enthusiasts. The project envisions a website built with modern web technologies including HTML5, CSS3, and JavaScript. The concept focuses on creating a responsive design that would work seamlessly across all device sizes, with smooth animations and an intuitive user interface. This project represents forward-thinking planning for a comprehensive tech platform, currently in the conceptual stage with the repository initialized for future development.",
    image: "/images/TechnoHub.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologiesDetail: {
      "HTML": "Planned semantic HTML5 markup with proper document structure and accessibility attributes",
      "CSS": "Planned modern CSS3 implementation with Flexbox and Grid layouts, animations, and responsive design",
      "JavaScript": "Planned vanilla JavaScript for interactivity and dynamic content features"
    },
    category: "Web Development",
    featured: false,
    date: "2024-10",
    status: "Planning",
    problem: "Need for a technology information platform that provides clean navigation and organized content for tech enthusiasts.",
    solution: "Conceptualized a platform design focused on minimalist aesthetics, intuitive navigation, and responsive layout for optimal user experience.",
    features: [
      {
        title: "Planned Responsive Design",
        description: "Concept for fully responsive layout using CSS Grid and Flexbox for optimal viewing across all devices"
      },
      {
        title: "Planned Interactive Features",
        description: "Design for dynamic navigation menu, smooth scroll effects, and interactive components using vanilla JavaScript"
      },
      {
        title: "Modern Web Technologies",
        description: "Project planned to utilize HTML5, CSS3, and vanilla JavaScript without framework dependencies"
      },
      {
        title: "Content Organization",
        description: "Concept for organizing technology topics, trends, and tutorials in an easily discoverable structure"
      }
    ],
    challenges: [
      {
        challenge: "Planning a comprehensive technology platform without overwhelming the user experience",
        solution: "Developed concept focusing on clean, minimalist design with well-organized content hierarchy"
      },
      {
        challenge: "Balancing feature richness with simplicity in the initial design phase",
        solution: "Created a phased approach starting with core features and planning for future enhancements"
      }
    ],
    learnings: [
      "Importance of thorough planning before beginning development",
      "Understanding project scope and feature prioritization",
      "Researching modern web technologies and design patterns",
      "Planning for scalability and future feature additions"
    ],
    futureImprovements: [
      "Begin development with core HTML structure and CSS styling",
      "Implement responsive navigation and layout systems",
      "Add JavaScript interactivity for dynamic features",
      "Create content sections for technology topics and tutorials"
    ],
    relatedProjects: [4, 5],
    githubLink: "https://github.com/JuanAndrda/Techno-Hub",
    liveLink: null
  },
  {
    id: 4,
    slug: "technology-website",
    title: "Technology Website",
    description: "Informational technology website with responsive design and modern UI/UX",
    fullDescription: "A clean and professional informational website focused on technology topics, showcasing modern web design principles and CSS techniques. This project emphasizes responsive design, visual hierarchy, and user experience. Built entirely with HTML, CSS, and JavaScript, it demonstrates the ability to create attractive, functional websites without relying on frameworks or libraries. The website features carefully crafted typography, a cohesive color scheme, and smooth interactions that create an engaging user experience.",
    image: "/images/TechnologyWebsit.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologiesDetail: {
      "HTML": "Well-structured semantic markup with proper heading hierarchy, meta tags for SEO, and accessibility features including ARIA labels",
      "CSS": "Advanced CSS styling with custom animations, gradient backgrounds, box shadows, and responsive media queries for mobile-first design",
      "JavaScript": "Interactive features including smooth scrolling, dynamic content display, form validation, and responsive navigation menu"
    },
    category: "Web Development",
    featured: true,
    date: "2024-09",
    status: "Completed",
    problem: "Creating an engaging, professional technology website that stands out visually while maintaining fast load times and excellent user experience across all devices.",
    solution: "Implemented a mobile-first design approach with carefully chosen typography and colors, optimized assets for performance, and created smooth interactions that enhance rather than distract from content.",
    features: [
      {
        title: "Modern UI Design",
        description: "Clean, contemporary design with careful attention to typography, spacing, color theory, and visual hierarchy"
      },
      {
        title: "Responsive Navigation",
        description: "Mobile-friendly hamburger menu that transforms into a full navigation bar on larger screens with smooth transitions"
      },
      {
        title: "CSS Animations",
        description: "Subtle entrance animations, hover effects, and transitions that enhance user engagement without overwhelming the experience"
      },
      {
        title: "Form Validation",
        description: "Client-side form validation with real-time feedback, error messages, and success states for better user interaction"
      }
    ],
    challenges: [
      {
        challenge: "Balancing visual appeal with performance, especially regarding animation and image optimization",
        solution: "Used CSS transforms for performant animations, implemented lazy loading for images, and optimized asset sizes using compression tools"
      },
      {
        challenge: "Creating a consistent design system with just CSS without preprocessors or design frameworks",
        solution: "Developed a custom CSS architecture with naming conventions, organized stylesheets by component, and used CSS custom properties for design tokens"
      }
    ],
    learnings: [
      "UI/UX design principles including visual hierarchy, white space, and color psychology",
      "CSS animation performance optimization using transform and opacity properties",
      "Importance of consistent design systems and reusable CSS components",
      "Mobile-first responsive design methodology and breakpoint strategies"
    ],
    futureImprovements: [
      "Add a content management system for easy content updates",
      "Implement internationalization for multiple language support",
      "Add analytics integration to track user behavior and engagement",
      "Create an admin panel for managing website content"
    ],
    relatedProjects: [3, 5],
    githubLink: "https://github.com/JuanAndrda/TECHNOLOGY_WEBSITE",
    liveLink: null
  },
  {
    id: 5,
    slug: "web-computing-project",
    title: "Web Computing Project",
    description: "Educational web project demonstrating HTML structure and CSS styling fundamentals",
    fullDescription: "A multi-page educational web project that showcases fundamental HTML and CSS skills developed during web computing coursework. The project consists of multiple HTML pages demonstrating proper document structure, semantic markup, and CSS styling techniques. With a focus on foundational web development concepts, this project emphasizes clean HTML organization, effective use of CSS for visual presentation, and adherence to web standards. The static website demonstrates understanding of core web technologies without relying on JavaScript frameworks or interactivity.",
    image: "/images/WebComputing.jpg",
    technologies: ["HTML", "CSS"],
    technologiesDetail: {
      "HTML": "Semantic HTML5 markup across 4 pages (Computing activity.html, chelson.html, discription.html, renz.html) with proper document structure and element usage",
      "CSS": "Multiple stylesheets (ProfileStyle.css, renz.css, style.css, style2.css) for component-specific and page-specific styling with layout and visual design"
    },
    category: "Web Development",
    featured: false,
    date: "2024-08",
    status: "Completed",
    problem: "Need to demonstrate fundamental understanding of HTML and CSS for web computing coursework through a practical multi-page website project.",
    solution: "Created a collection of HTML pages with dedicated CSS stylesheets demonstrating proper document structure, semantic markup, and styling capabilities for an educational assignment.",
    features: [
      {
        title: "Multi-Page Structure",
        description: "Four distinct HTML pages showcasing different content layouts and organizational patterns"
      },
      {
        title: "Component Styling",
        description: "Multiple CSS files for different styling needs including profile styles and page-specific designs"
      },
      {
        title: "HTML Fundamentals",
        description: "Demonstrates proper use of HTML elements, document structure, and semantic markup practices"
      },
      {
        title: "CSS Layout Techniques",
        description: "Application of CSS for visual styling, layout control, and design consistency across pages"
      }
    ],
    challenges: [
      {
        challenge: "Creating multiple pages with consistent styling and structure for a coursework project",
        solution: "Developed separate CSS files for different components while maintaining visual consistency across all pages"
      },
      {
        challenge: "Understanding and applying proper HTML document structure and semantic markup",
        solution: "Studied HTML5 standards and implemented proper element usage across all four pages of the project"
      }
    ],
    learnings: [
      "Fundamental HTML document structure and proper use of semantic elements",
      "CSS styling techniques for layout and visual design",
      "Importance of organizing files and stylesheets for multi-page websites",
      "Web development basics as foundation for more advanced projects"
    ],
    futureImprovements: [
      "Add JavaScript for interactive features and dynamic content",
      "Implement responsive design with CSS media queries for mobile devices",
      "Enhance accessibility with ARIA labels and semantic improvements",
      "Modernize CSS with Flexbox and Grid layout systems"
    ],
    relatedProjects: [3, 4],
    githubLink: "https://github.com/JuanAndrda/Web-page-Computing-",
    liveLink: null
  },
  {
    id: 6,
    slug: "bank-end-app",
    title: "Bank End App",
    description: "Web-based banking application using Firebase for backend services and AI-assisted development",
    fullDescription: "Bank End App is an educational web application that explores backend concepts through Firebase integration and AI-assisted development. Built as a learning project for understanding backend technologies, this application leverages Firebase's Backend-as-a-Service platform for data storage and authentication. The project demonstrates practical application of cloud services, frontend-backend integration, and modern web development practices. With CSS for styling and JavaScript for frontend logic, the app showcases how to build full-stack applications using managed cloud services.",
    image: "/images/backend.jpg",
    technologies: ["CSS", "JavaScript", "Firebase"],
    technologiesDetail: {
      "CSS": "Styling for user interface components including forms, layouts, and visual design (53.6% of codebase)",
      "JavaScript": "Frontend application logic, Firebase integration, data handling, and user interactions (41.6% of codebase)",
      "Firebase": "Backend-as-a-Service platform providing authentication, cloud database storage, and hosting infrastructure"
    },
    category: "Web Development",
    featured: false,
    date: "2024-10",
    status: "Completed",
    problem: "Learning backend development concepts and cloud service integration while building a practical banking application without managing server infrastructure.",
    solution: "Utilized Firebase as a Backend-as-a-Service platform to handle database operations and authentication, allowing focus on application logic and frontend-backend integration patterns.",
    features: [
      {
        title: "Firebase Integration",
        description: "Cloud backend services including Firestore database for data storage and Firebase Authentication for user management"
      },
      {
        title: "Web Application Interface",
        description: "CSS-styled frontend with forms, layouts, and user interface components for banking operations"
      },
      {
        title: "AI-Assisted Development",
        description: "Project developed using AI tools to learn backend concepts and best practices in modern web development"
      },
      {
        title: "Cloud Deployment",
        description: "Firebase hosting configuration for deploying the web application to production environment"
      }
    ],
    challenges: [
      {
        challenge: "Learning to integrate Firebase services and understand Backend-as-a-Service architecture for the first time",
        solution: "Used AI assistance and Firebase documentation to understand authentication flows, database operations, and deployment processes"
      },
      {
        challenge: "Structuring a full-stack application with proper separation between frontend and backend logic",
        solution: "Organized code with clear Firebase service integration points and maintained clean separation of concerns in the application structure"
      }
    ],
    learnings: [
      "How to use Firebase for backend services including authentication and cloud database",
      "Backend-as-a-Service concepts and benefits of managed cloud infrastructure",
      "Integration patterns between frontend JavaScript and cloud backend services",
      "Leveraging AI tools for learning new technologies and development best practices"
    ],
    futureImprovements: [
      "Add more advanced Firebase features like Cloud Functions for server-side logic",
      "Implement real-time data synchronization using Firebase Realtime Database",
      "Enhance security with Firebase Security Rules for data access control",
      "Add more sophisticated banking features like transaction history and account analytics"
    ],
    relatedProjects: [1, 2],
    githubLink: "https://github.com/JuanAndrda/bankendapp",
    liveLink: null
  }
];

export const categories = ["All", "Java", "Web Development", "Featured"];
