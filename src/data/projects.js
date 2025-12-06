export const projects = [
  {
    id: 1,
    slug: "banking-system-oop",
    title: "Banking System (OOP & Data Structures)",
    description: "Comprehensive banking system demonstrating Object-Oriented Programming principles and Data Structures implementation",
    fullDescription: "A fully functional banking system built with Java that showcases core OOP concepts including inheritance, polymorphism, encapsulation, and abstraction. This project implements various data structures for efficient account management, transaction processing, and data persistence. The system features a robust architecture with separation of concerns, utilizing design patterns like Singleton for database connections and Factory for creating different account types. It demonstrates my understanding of software architecture and best coding practices through clean, maintainable, and scalable code.",
    image: "/projects/banking-system.png",
    technologies: ["Java", "OOP", "Data Structures", "MySQL"],
    technologiesDetail: {
      "Java": "Core language leveraging OOP principles, collections framework, and exception handling for robust application logic",
      "OOP": "Implemented inheritance hierarchies, polymorphism for account types, encapsulation for data security, and abstraction for common behaviors",
      "Data Structures": "Custom implementations of LinkedList for transaction history, Stack for undo operations, Queue for transaction processing, and HashMap for efficient account lookup",
      "MySQL": "Relational database for persistent storage with prepared statements to prevent SQL injection and ensure data integrity"
    },
    category: "Java",
    featured: true,
    date: "2024-08",
    status: "Completed",
    problem: "Traditional banking systems often lack proper OOP implementation and efficient data structure usage, leading to maintenance issues, poor scalability, and difficulty adding new features.",
    solution: "Designed a modular banking system with clear class hierarchies and interfaces, implementing custom data structures optimized for banking operations, and following SOLID principles for maintainability.",
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
        title: "Data Persistence",
        description: "MySQL integration with JDBC for reliable data storage, retrieval, and transaction management with proper connection pooling"
      },
      {
        title: "Security Features",
        description: "Password hashing with SHA-256, session management, input validation, and transaction authorization to ensure secure banking operations"
      }
    ],
    challenges: [
      {
        challenge: "Implementing thread-safe transaction processing to prevent race conditions when multiple users access the same account",
        solution: "Used synchronized methods and Java's concurrent collections (ConcurrentHashMap) to ensure atomic operations and prevent data corruption"
      },
      {
        challenge: "Balancing OOP design principles with performance requirements, especially for large transaction histories",
        solution: "Profiled code using JProfiler to identify bottlenecks, then optimized critical paths by implementing lazy loading and caching strategies without sacrificing design quality"
      }
    ],
    learnings: [
      "Deep understanding of OOP design patterns and their practical applications in real-world banking scenarios",
      "Importance of writing testable, maintainable code through proper separation of concerns and dependency injection",
      "Database optimization techniques including indexing, query optimization, and connection pooling for improved performance",
      "Proper exception handling strategies and error recovery mechanisms to ensure system reliability"
    ],
    futureImprovements: [
      "Add REST API layer using Spring Boot for web and mobile client support",
      "Implement microservices architecture to separate account, transaction, and notification services for better scalability",
      "Add real-time notifications using WebSockets for instant transaction alerts",
      "Integrate with payment gateways for external transfers and bill payments"
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
    fullDescription: "An enhanced iteration of the banking system project that builds upon the foundation of the first version. This implementation introduces multi-account management capabilities, comprehensive transaction history tracking, and significantly improved security measures. The project demonstrates evolution in software design thinking and incorporates feedback and learnings from the initial banking system. It features a more sophisticated user interface, better error handling, and improved algorithm efficiency for transaction processing.",
    image: "/projects/banking-system-2.png",
    technologies: ["Java", "OOP", "Algorithms"],
    technologiesDetail: {
      "Java": "Utilized advanced Java features including generics, lambda expressions, and stream API for cleaner and more efficient code",
      "OOP": "Enhanced class design with better abstraction layers, interface segregation, and composition over inheritance principles",
      "Algorithms": "Implemented sorting algorithms for transaction ordering, binary search for efficient account lookup, and graph algorithms for analyzing account relationships"
    },
    category: "Java",
    featured: false,
    date: "2024-09",
    status: "Completed",
    problem: "The initial banking system lacked multi-account support, had limited transaction analysis capabilities, and needed more robust security measures for production readiness.",
    solution: "Redesigned the architecture to support multiple accounts per user, implemented advanced algorithms for transaction analysis and fraud detection, and added comprehensive audit logging for security compliance.",
    features: [
      {
        title: "Multi-Account Management",
        description: "Users can create and manage multiple accounts of different types simultaneously with cross-account transfers and consolidated balance views"
      },
      {
        title: "Advanced Transaction History",
        description: "Comprehensive transaction tracking with filtering, sorting, search capabilities, and export functionality for financial reporting"
      },
      {
        title: "Enhanced Security",
        description: "Two-factor authentication, transaction limits, fraud detection algorithms, and comprehensive audit logging for compliance"
      },
      {
        title: "Performance Optimization",
        description: "Improved algorithms for faster transaction processing, efficient data retrieval with caching, and optimized database queries"
      }
    ],
    challenges: [
      {
        challenge: "Managing complex relationships between multiple accounts while maintaining data consistency and transaction integrity",
        solution: "Implemented database transactions with proper isolation levels and created a transaction coordinator service to handle multi-account operations atomically"
      },
      {
        challenge: "Detecting potentially fraudulent transactions in real-time without impacting system performance",
        solution: "Developed a rule-based fraud detection system using efficient algorithms to analyze transaction patterns and flag suspicious activity asynchronously"
      }
    ],
    learnings: [
      "Importance of iterative development and incorporating user feedback into subsequent versions",
      "Advanced algorithm design and analysis for optimizing system performance under load",
      "Security best practices including defense-in-depth strategies and secure coding principles",
      "Database transaction management and ACID properties in practice"
    ],
    futureImprovements: [
      "Implement machine learning models for smarter fraud detection",
      "Add support for international transactions with currency conversion",
      "Create a mobile application companion for account management",
      "Integrate blockchain technology for immutable transaction records"
    ],
    relatedProjects: [1],
    githubLink: "https://github.com/JuanAndrda/BankingSystemTwo",
    liveLink: null
  },
  {
    id: 3,
    slug: "techno-hub",
    title: "Techno Hub",
    description: "Technology-focused web platform showcasing modern web technologies and best practices",
    fullDescription: "Techno Hub is a comprehensive technology information platform that serves as a central hub for tech enthusiasts to explore various technology topics, trends, and tutorials. Built with a focus on clean, semantic HTML, modern CSS techniques including Flexbox and Grid, and vanilla JavaScript for interactivity, this project demonstrates fundamental web development skills without relying on frameworks. The website features a responsive design that works seamlessly across all device sizes, smooth animations, and an intuitive user interface that prioritizes user experience.",
    image: "/projects/techno-hub.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologiesDetail: {
      "HTML": "Semantic HTML5 markup with proper document structure, accessibility attributes, and SEO-friendly tags for better search engine visibility",
      "CSS": "Modern CSS3 with Flexbox and Grid layouts, custom properties for theming, animations, transitions, and mobile-first responsive design principles",
      "JavaScript": "Vanilla JavaScript for DOM manipulation, event handling, dynamic content loading, and interactive features without framework dependencies"
    },
    category: "Web Development",
    featured: true,
    date: "2024-10",
    status: "Completed",
    problem: "Many technology information websites are cluttered, difficult to navigate, and not optimized for mobile devices, making it hard for users to find relevant information quickly.",
    solution: "Created a clean, minimalist design with intuitive navigation, responsive layout that adapts to any screen size, and organized content structure that makes information easily discoverable.",
    features: [
      {
        title: "Responsive Design",
        description: "Fully responsive layout using CSS Grid and Flexbox that provides optimal viewing experience across desktop, tablet, and mobile devices"
      },
      {
        title: "Interactive Components",
        description: "Dynamic navigation menu, smooth scroll effects, interactive cards, and modal windows implemented with vanilla JavaScript"
      },
      {
        title: "Modern CSS Techniques",
        description: "Utilizes CSS custom properties for theming, CSS animations for smooth transitions, and modern layout systems for flexible design"
      },
      {
        title: "Performance Optimized",
        description: "Optimized images, minified CSS/JS, lazy loading for images, and efficient DOM manipulation for fast page load times"
      }
    ],
    challenges: [
      {
        challenge: "Creating complex layouts that work consistently across different browsers without using CSS frameworks",
        solution: "Implemented CSS Grid and Flexbox with proper fallbacks, tested across multiple browsers, and used autoprefixer for vendor prefix compatibility"
      },
      {
        challenge: "Maintaining smooth performance with vanilla JavaScript while implementing multiple interactive features",
        solution: "Used event delegation for efficient event handling, implemented debouncing for scroll events, and optimized DOM queries by caching references"
      }
    ],
    learnings: [
      "Deep understanding of CSS layout systems (Flexbox and Grid) and when to use each one",
      "Importance of semantic HTML for accessibility and SEO optimization",
      "Performance optimization techniques including lazy loading, code minification, and efficient JavaScript",
      "Cross-browser compatibility testing and progressive enhancement strategies"
    ],
    futureImprovements: [
      "Add a blog section with content management capabilities",
      "Implement dark mode toggle with CSS custom properties",
      "Add search functionality for finding specific technology topics",
      "Integrate with a backend API for dynamic content updates"
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
    image: "/projects/technology-website.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologiesDetail: {
      "HTML": "Well-structured semantic markup with proper heading hierarchy, meta tags for SEO, and accessibility features including ARIA labels",
      "CSS": "Advanced CSS styling with custom animations, gradient backgrounds, box shadows, and responsive media queries for mobile-first design",
      "JavaScript": "Interactive features including smooth scrolling, dynamic content display, form validation, and responsive navigation menu"
    },
    category: "Web Development",
    featured: false,
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
    description: "Web development project demonstrating fundamental web technologies and best practices",
    fullDescription: "A comprehensive web development project that showcases fundamental skills in HTML structure, CSS styling, and JavaScript interactivity. This project serves as a demonstration of core web development competencies, including proper HTML semantics, modern CSS layout techniques, and practical JavaScript functionality. Built as part of my web computing coursework, it emphasizes clean code, organized structure, and adherence to web standards. The project includes multiple sections demonstrating different aspects of web development from static content presentation to dynamic user interactions.",
    image: "/projects/web-computing.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologiesDetail: {
      "HTML": "Semantic HTML5 elements including header, nav, main, section, article, and footer for proper document structure and accessibility",
      "CSS": "CSS3 styling with layout techniques, custom styling for forms and tables, responsive design with media queries",
      "JavaScript": "DOM manipulation, event listeners, form handling, dynamic content generation, and basic data validation"
    },
    category: "Web Development",
    featured: false,
    date: "2024-08",
    status: "Completed",
    problem: "Demonstrating comprehensive understanding of fundamental web technologies in a single cohesive project that showcases multiple skills and techniques.",
    solution: "Created a multi-section website that incorporates various HTML elements, CSS styling techniques, and JavaScript functionality, each section focusing on different aspects of web development.",
    features: [
      {
        title: "Semantic HTML Structure",
        description: "Proper use of HTML5 semantic elements for better document structure, accessibility, and SEO"
      },
      {
        title: "CSS Styling Techniques",
        description: "Demonstrates various CSS concepts including the box model, positioning, flexbox, and responsive design"
      },
      {
        title: "JavaScript Interactivity",
        description: "Interactive elements including form validation, dynamic content updates, and user interaction handling"
      },
      {
        title: "Web Standards Compliance",
        description: "Follows W3C standards for HTML and CSS, ensuring cross-browser compatibility and accessibility"
      }
    ],
    challenges: [
      {
        challenge: "Organizing code in a clean, maintainable way without using build tools or frameworks",
        solution: "Implemented a clear file structure with separate CSS and JavaScript files, used meaningful class names, and added comprehensive comments"
      },
      {
        challenge: "Ensuring browser compatibility across different versions and vendors",
        solution: "Used feature detection, provided fallbacks for older browsers, and tested extensively across Chrome, Firefox, Safari, and Edge"
      }
    ],
    learnings: [
      "Fundamental web development concepts and how HTML, CSS, and JavaScript work together",
      "Importance of code organization and documentation for maintainability",
      "Web standards and best practices for accessibility and SEO",
      "Debugging techniques using browser developer tools"
    ],
    futureImprovements: [
      "Refactor code using modern JavaScript ES6+ features",
      "Add a build process with bundling and minification",
      "Implement a CSS preprocessor like Sass for better style organization",
      "Add unit tests for JavaScript functionality"
    ],
    relatedProjects: [3, 4],
    githubLink: "https://github.com/JuanAndrda/Web-page-Computing-",
    liveLink: null
  },
  {
    id: 6,
    slug: "bank-end-app",
    title: "Bank End App",
    description: "Backend-focused banking application emphasizing business logic and data management",
    fullDescription: "Bank End App is a backend-focused application that handles core banking operations with emphasis on robust business logic, data management, and server-side processing. This project demonstrates understanding of backend development concepts including data validation, business rule enforcement, and secure data handling. While the frontend is built with CSS and JavaScript, the focus is on the underlying logic that powers banking operations, including account management, transaction processing, and data persistence. The application showcases ability to separate concerns between presentation and business logic layers.",
    image: "/projects/bank-end-app.png",
    technologies: ["CSS", "JavaScript", "Backend"],
    technologiesDetail: {
      "CSS": "Styled user interface components with focus on form design, data tables, and feedback messages for banking operations",
      "JavaScript": "Client-side validation and interaction logic, with emphasis on backend integration and data handling",
      "Backend": "Server-side logic for banking operations including account management, transaction processing, data validation, and business rule enforcement"
    },
    category: "Web Development",
    featured: false,
    date: "2024-10",
    status: "Completed",
    problem: "Creating a banking application that prioritizes backend logic and data integrity while providing a functional frontend interface for testing and demonstration.",
    solution: "Developed a layered architecture separating presentation from business logic, implemented comprehensive data validation at multiple levels, and created a simple but effective frontend for interacting with backend services.",
    features: [
      {
        title: "Business Logic Layer",
        description: "Robust backend logic handling account operations, transaction processing, balance calculations, and business rule validation"
      },
      {
        title: "Data Validation",
        description: "Multi-layered validation on both client and server side to ensure data integrity and prevent invalid operations"
      },
      {
        title: "Transaction Management",
        description: "Secure transaction processing with proper error handling, rollback capabilities, and transaction logging"
      },
      {
        title: "User Interface",
        description: "Functional frontend interface for testing backend operations including forms, data display, and feedback messages"
      }
    ],
    challenges: [
      {
        challenge: "Implementing complex business rules and validation logic without a backend framework",
        solution: "Created a modular validation system with reusable validation functions and clear separation between different types of business rules"
      },
      {
        challenge: "Ensuring data consistency and handling concurrent operations in a JavaScript environment",
        solution: "Implemented proper state management patterns and used promises to handle asynchronous operations in a predictable manner"
      }
    ],
    learnings: [
      "Backend development concepts and the importance of business logic separation from presentation",
      "Data validation strategies and implementing validation at multiple application layers",
      "Error handling and providing meaningful feedback for various failure scenarios",
      "State management in JavaScript applications and handling asynchronous operations"
    ],
    futureImprovements: [
      "Migrate to a Node.js backend with Express for better server-side capabilities",
      "Implement RESTful API endpoints for cleaner frontend-backend separation",
      "Add database integration with PostgreSQL or MongoDB for data persistence",
      "Implement authentication and authorization for secure user access"
    ],
    relatedProjects: [1, 2],
    githubLink: "https://github.com/JuanAndrda/bankendapp",
    liveLink: null
  }
];

export const categories = ["All", "Java", "Web Development", "Featured"];
