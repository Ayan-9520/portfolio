import projectKuber from "@/assets/project-kuber.png";
import projectRupeeDial from "@/assets/project-rupeedial.png";
import projectMotorcart from "@/assets/project-motorcart.png";
import projectMoneyMines from "@/assets/project-moneymines.png";

export const personalInfo = {
  name: "Mohammad Ayan",
  title: "Frontend Developer",
  tagline:
    "React.js | TypeScript | Python | FastAPI | PostgreSQL",
  location: "New Delhi, India",
  phone: "+91 9520776129",
  whatsapp: "https://wa.me/919520776129",
  email: "mohdayan84381@gmail.com",
  portfolio: "https://ayan-new.vercel.app/",
  resume: "/Mohammad-Ayan-Frontend-Developer-Resume.pdf",
  linkedin: "https://www.linkedin.com/feed/",
  github: "https://github.com/",
  summary:
    "Frontend Developer experienced in building responsive, scalable, and production-ready web applications using React.js, JavaScript, TypeScript, and Tailwind CSS. Expertise in API integration, reusable component architecture, and UI/UX development. Currently expanding into Full Stack Development with Python, FastAPI, and PostgreSQL.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroTags = [
  "React.js",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "FastAPI",
  "PostgreSQL",
];

export const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "4+", label: "Live Projects" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Client Focus" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "HTML5 & CSS3", level: 94 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 75 },
      { name: "FastAPI", level: 72 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 92 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "API Integration", level: 88 },
      { name: "Responsive Design", level: 95 },
      { name: "SEO Optimization", level: 82 },
      { name: "WordPress", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "KuberFinserve",
    description:
      "Fintech loan marketplace UI with eligibility flows, lender comparison, and dashboard modules for home, business, and personal loans.",
    image: projectKuber,
    technologies: ["React.js", "TypeScript", "Tailwind", "REST APIs"],
    liveUrl: "https://kuberfinserve.com",
  },
  {
    title: "RupeeDial",
    description:
      "Loan comparison platform to apply across 50+ lenders with eligibility checks, expert support, and mobile-first responsive design.",
    image: projectRupeeDial,
    technologies: ["React.js", "JavaScript", "Tailwind", "REST APIs"],
    liveUrl: "https://rupeedial.com",
  },
  {
    title: "Motorcart",
    description:
      "Automotive marketplace for buying and selling cars with search filters, finance options, and structured lead management UI.",
    image: projectMotorcart,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://motorcart.in",
  },
  {
    title: "MoneyMines",
    description:
      "Financial services website with growth-focused landing pages, organized sales process sections, and performance-optimized UI.",
    image: projectMoneyMines,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "SEO"],
    liveUrl: "https://moneymines.co.in",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company: "MoneyMines.co.in",
    period: "9 Months – Present",
    description:
      "Developed responsive web interfaces using React.js and Tailwind CSS. Integrated REST APIs and built reusable UI components with focus on performance, SEO, and user experience.",
    tech: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript"],
  },
  {
    title: "Frontend Developer",
    company: "SNM Technologies",
    period: "6 Months",
    description:
      "Converted Figma and PSD designs into responsive web applications using React.js, HTML, CSS, and JavaScript. Performed WordPress customization for client projects.",
    tech: ["React.js", "HTML", "CSS", "WordPress"],
  },
];

export const education = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "MJPRU, Bareilly",
    period: "Expected 2025",
    description:
      "Pursuing B.Com while building professional experience in frontend and full-stack web development.",
  },
];

export const testimonials = [
  {
    name: "KuberFinserve Team",
    role: "Fintech Loan Platform",
    quote:
      "Built responsive loan marketplace interfaces with clean component structure and smooth user flows across multiple loan products.",
    initials: "KF",
  },
  {
    name: "MoneyMines Team",
    role: "Finance Platform",
    quote:
      "Ayan delivered responsive React interfaces with clean API integration. His reusable component approach improved our development speed and UI consistency.",
    initials: "MM",
  },
  {
    name: "RupeeDial Project",
    role: "Loan Service Platform",
    quote:
      "Built loan workflow UIs with strong mobile responsiveness and API-driven features. Attention to performance and UX made a real difference.",
    initials: "RD",
  },
  {
    name: "Motorcart Team",
    role: "Automobile Marketplace",
    quote:
      "Structured marketplace pages and lead management interfaces that scaled well across the platform with consistent design patterns.",
    initials: "MC",
  },
];

export const socialLinks = {
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  whatsapp: personalInfo.whatsapp,
};
