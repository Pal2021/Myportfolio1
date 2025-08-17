// src/data/portfolioData.js
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  User,
  Briefcase,
  Code,
  Phone,
  Award,
  BookOpen,
  GraduationCap,
  Download,
  MessageSquare,
  Wrench,
} from "lucide-react";

export const personalInfo = {
  name: "Prashant Pal",
  title: "Software Engineer at TCS",
  location: "Bangalore, Karnataka, India",
  email: "prashantl2986@gmail.com",
  phone: "+91 8306579128",
  bio: "Passionate Software Engineer with expertise in Java, Spring Boot, React.js, and modern web technologies. Currently working at TCS, building scalable microservices applications and contributing to digital transformation initiatives with focus on backend development and system architecture.",
  experience: "1+ years",
  projects: "30+",
  clients: "3+",
  resumeUrl:
    "https://drive.google.com/file/d/1mLcYGVHDYJ7Q0HvSsEsJvzacc0LCUyNQ/view?usp=sharing",
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Pal2021",
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/prashantpal13",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/prashantpal",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:prashantl2986@gmail.com",
    color: "hover:text-red-500",
  },
];

export const githubProjects = [
  {
    id: 1,
    title: "LinkedIn Application",
    description:
      "Transitioned from monolithic to microservices architecture (6 services) using Spring Boot, enabling independent scaling and deployment, resulting in an 85% improvement in system scalability, fault isolation, and maintenance efficiency.",
    technologies: [
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "Neo4j",
      "Apache Kafka",
      "Microservices",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/Pal2021/LinkedIn-App",
    demo: "https://your-linkedin-demo.com",
    image: "💼",
    highlights: [
      "85% improvement in system scalability",
      "70% reduction in query latency with Neo4j",
      "Zero-downtime deployments with Kubernetes",
      "JWT-based authentication with Spring Security",
    ],
  },
  {
    id: 2,
    title: "Riding Application",
    description:
      "Engineered a monolithic ride-hailing backend using Spring Boot, JPA, and PostgreSQL with a layered (Controller-Service-Repository) architecture and geospatial ride-matching capabilities.",
    technologies: [
      "Spring Boot",
      "JPA",
      "Hibernate",
      "PostgreSQL",
      "JWT",
      "Maven",
    ],
    github: "https://github.com/Pal2021/Ride-Application",
    demo: "https://your-riding-demo.com",
    image: "🚗",
    highlights: [
      "Geospatial ride-matching using Haversine formula",
      "Real-time surge pricing engine",
      "Transactional integrity with JPA isolation levels",
      "Custom queries and DTO mapping optimization",
    ],
  },
  {
    id: 3,
    title: "ETL Data Pipeline",
    description:
      "Developed and managed scalable ETL pipelines using Azure Data Factory to automate data integration and transformation across diverse sources for enterprise data processing.",
    technologies: ["Azure Data Factory", "SQL", "Data Integration", "ETL"],
    github: "https://github.com/Pal2021/etl-pipeline",
    demo: "#",
    image: "📊",
    highlights: [
      "Automated data integration across diverse sources",
      "Scalable data transformation pipelines",
      "Cost-effective third-party API optimization",
    ],
  },
  {
    id: 4,
    title: "Payment App",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "NodeJs"],
    github: "https://github.com/Pal2021/PaymentApp",
    demo: "https://prashant-portfolio.vercel.app",
    image: "💻",
  },
  {
    id: 5,
    title: "RealState Website",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "NodeJs"],
    github: "https://github.com/Pal2021/RealState",
    demo: "https://prashant-portfolio.vercel.app",
    image: "💻",
  },
  {
    id: 6,
    title: "Digital voting System",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations built with React and Tailwind CSS.",
    technologies: ["Core java ", "Java swing"],
    github: "https://github.com/Pal2021/Digital-Voting-System",
    demo: "https://prashant-portfolio.vercel.app",
    image: "💻",
  },
  {
    id: 7,
    title: "YoutubeClone",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations built with React and Tailwind CSS.",
    technologies: ["React", "JavaScript", "NodeJs"],
    github: "https://github.com/Pal2021/YoutubeClone",
    demo: "https://prashant-portfolio.vercel.app",
    image: "💻",
  },
  {
    id: 8,
    title: "Chat Application",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "NodeJs"],
    github: "https://github.com/Pal2021/chat-application",
    demo: "https://prashant-portfolio.vercel.app",
    image: "💻",
  },
];

export const skills = [
  "Java",
  "C++",
  "JavaScript",
  "SQL",
  "HTML/CSS",
  "Spring Boot",
  "Hibernate",
  "React",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Graph Database",
  "Neo4j",
  "Apache Kafka",
  "Docker",
  "Kubernetes",
  "Maven",
  "Gradle",
  "Git",
  "IntelliJ",
  "Postman",
  "Azure Data Factory",
  "Microservices",
  "JWT",
  "Spring Security",
];

export const techLogos = {
  Java: "☕",
  "C++": "🔷",
  JavaScript: "🟨",
  SQL: "🗃️",
  "HTML/CSS": "🌐",
  "Spring Boot": "🍃",
  Hibernate: "💾",
  React: "⚛️",
  "Tailwind CSS": "💨",
  MySQL: "🐬",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  "Graph Database": "🕸️",
  Neo4j: "🔗",
  "Apache Kafka": "📨",
  Docker: "🐳",
  Kubernetes: "⚙️",
  Maven: "📦",
  Gradle: "🔧",
  Git: "📝",
  IntelliJ: "💡",
  Postman: "📮",
  "Azure Data Factory": "☁️",
  Microservices: "🏗️",
  JWT: "🔐",
  "Spring Security": "🛡️",
};

export const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    position: "Software Engineer",
    duration: "July 2024 - Present",
    location: "Bangalore, Karnataka",
    description: [
      "Successfully migrated services with schema modifications for certain collections to ensure scalability and backward compatibility",
      "Written optimized code for creating minimum number of reduced network calls and third-party API calls for cost-saving",
      "Developed and managed scalable ETL pipelines using Azure Data Factory to automate data integration and transformation across diverse sources",
      "Collaborated with cross-functional teams to deliver high-quality software solutions using Spring Boot and microservices architecture",
    ],
  },
  {
    company: "Worked as FreeLancer",
    position: "MERN stack Developer",
    duration: "Jan 2024 - July 2024",
    location: "Ballia, UP",
    description: [
      "Built and deployed a real estate website for a client using the MERN stack, enabling property listing, search, and user authentication with optimized API calls for faster performance.",

      "Developed a gambling application using the MERN stack, implementing secure payment handling, real-time game interactions, and responsive UI for seamless user experience.",

      "Designed and maintained scalable REST APIs with Node.js and Express, ensuring efficient data flow between frontend (React) and backend (MongoDB).",

      "Collaborated with clients to gather requirements and delivered end-to-end MERN solutions, from database design to frontend deployment.",
    ],
  },
];

export const certificates = [
  {
    id: 1,
    title: "Advanced Learning Algorithms",
    issuer: "Stanford University",
    date: "Nov 2023",
    credentialId: "GSFZ6T3XPPRW",
    skills: ["Machine Learning", "Deep Learning", "Optimization"],
    url: "https://www.coursera.org/account/accomplishments/certificate/GSFZ6T3XPPRW",
    image: "🎓",
  },
  {
    id: 2,
    title: "Machine Learning",
    issuer: "Stanford University",
    date: "Nov 2023",
    credentialId: "GKUGXZWV9CJH",
    skills: ["Supervised Learning", "Regression", "Classification"],
    url: "https://www.coursera.org/account/accomplishments/certificate/GKUGXZWV9CJH",
    image: "🤖",
  },
  {
    id: 3,
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Stanford University",
    date: "Nov 2023",
    credentialId: "YTH44UM8N6JL",
    skills: [
      "Unsupervised Learning",
      "Recommender Systems",
      "Reinforcement Learning",
    ],
    url: "https://www.coursera.org/account/accomplishments/certificate/YTH44UM8N6JL",
    image: "📊",
  },
  {
    id: 4,
    title: "Agile Fundamentals: Including Scrum & Kanban",
    issuer: "Udemy",
    date: "Jan 2025 · Expired Feb 2025",
    credentialId: "UC-90c6ef3e-300f-4ded-96d6-59f19d2ad438",
    skills: ["Agile Methodologies", "Scrum", "Kanban"],
    url: "https://www.udemy.com/certificate/UC-90c6ef3e-300f-4ded-96d6-59f19d2ad438",
    image: "⚡",
  },
];

export const articles = [
  {
    id: 1,
    title: "Building Microservices with Spring Boot",
    description:
      "Complete guide to transitioning from monolithic to microservices architecture using Spring Boot, covering service discovery, load balancing, and deployment strategies.",
    date: "2024-12-15",
    readTime: "10 min read",
    url: "https://spring.io/guides/gs/spring-boot/",
    tags: ["Spring Boot", "Microservices", "Java", "Architecture"],
  },
  {
    id: 2,
    title: "Optimizing Database Queries with JPA",
    description:
      "Best practices for writing efficient JPA queries, custom repository methods, and DTO mapping for better performance in Spring Boot applications.",
    date: "2024-11-20",
    readTime: "8 min read",
    url: "https://docs.spring.io/spring-data/jpa/docs/current/reference/html/",
    tags: ["JPA", "Hibernate", "Database", "Performance"],
  },
  {
    id: 3,
    title: "Containerizing Spring Boot with Docker",
    description:
      "Step-by-step guide to containerizing Spring Boot applications with Docker and deploying them using Kubernetes orchestration.",
    date: "2024-10-10",
    readTime: "12 min read",
    url: "https://spring.io/guides/gs/spring-boot-docker/",
    tags: ["Docker", "Kubernetes", "Spring Boot", "DevOps"],
  },
  {
    id: 4,
    title: "Graph Databases vs Relational: Neo4j Use Cases",
    description:
      "Exploring when to use Neo4j graph database over traditional relational databases with real-world examples and performance comparisons.",
    date: "2024-09-25",
    readTime: "7 min read",
    url: "https://neo4j.com/developer/graph-database/",
    tags: ["Neo4j", "Graph Database", "Database Design", "Performance"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    college: "Lovely Professional University",
    university: "LPU",
    duration: "June 2020 - June 2024",
    grade: "7.11 CGPA",
    location: "Phagwara, Punjab",
    subjects: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
    ],
    achievements: [
      "Completed 800+ coding problems on LeetCode",
      "Solved 250+ problems on GeeksForGeeks",
      "Secured 142nd rank in TCS CodeVita annual coding competition round 2",
      "Achieved Specialist rank on Codeforces",
      "Top 15% performer in LeetCode contests",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (12th)",
    college: "Banshi Bazar Inter College",
    university: "UP Board",
    duration: "2018 - 2020",
    grade: "85%",
    location: "Ballia, Uttar Pradesh",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    achievements: [
      "Strong foundation in Mathematics and Computer Science",
      "Active participation in programming competitions",
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "TCS CodeVita Competition",
    description:
      "Secured 142nd rank in TCS CodeVita annual coding competition round 2",
    category: "Competition",
    year: "2024",
  },
  {
    id: 2,
    title: "LeetCode Problem Solving",
    description:
      "Solved 800+ coding problems demonstrating strong algorithmic skills",
    category: "Coding",
    year: "2024",
  },
  {
    id: 3,
    title: "GeeksForGeeks Contributions",
    description: "Solved 250+ problems on GeeksForGeeks platform",
    category: "Coding",
    year: "2024",
  },
  {
    id: 4,
    title: "Codeforces Specialist",
    description:
      "Achieved Specialist rating on Codeforces competitive programming platform",
    category: "Competition",
    year: "2024",
  },
  {
    id: 5,
    title: "LeetCode Contest Performance",
    description: "Consistently performed in top 15% of LeetCode contests",
    category: "Competition",
    year: "2024",
  },
];

export const services = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Building robust and scalable server-side applications using Java, Spring Boot, and microservices architecture with secure APIs and efficient database management.",
    icon: "⚙️",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
    features: [
      "Microservices Architecture",
      "RESTful API Development",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "ETL Pipeline Development",
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web applications using modern frontend technologies like React.js with focus on user experience and performance.",
    icon: "💻",
    technologies: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
    features: [
      "Responsive Web Design",
      "Single Page Applications",
      "Component-based Architecture",
      "Modern UI/UX Implementation",
    ],
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on cloud platforms with containerization, orchestration, and CI/CD pipelines for scalable infrastructure.",
    icon: "☁️",
    technologies: [
      "Docker",
      "Kubernetes",
      "Azure Data Factory",
      "Git",
      "Maven",
      "Gradle",
    ],
    features: [
      "Container Orchestration",
      "Microservices Deployment",
      "Data Pipeline Management",
      "Version Control & Build Management",
    ],
  },
  {
    id: 4,
    title: "Database Solutions",
    description:
      "Designing and implementing efficient database solutions including relational databases, graph databases, and data integration pipelines.",
    icon: "🗄️",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Graph Databases",
      "SQL Optimization",
    ],
    features: [
      "Database Architecture Design",
      "Query Performance Optimization",
      "Data Migration & ETL",
      "Graph Database Implementation",
    ],
  },
];

export const menuItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "articles", label: "Articles", icon: BookOpen },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "services", label: "Services", icon: Wrench },
  { id: "contact", label: "Contact", icon: MessageSquare },
];
