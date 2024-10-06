import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate AI engineer by day, full-stack web developer for some variety, statistics and art enthusiast for reasons beyond reason. I relish mental duels over a chessboard and occasionally mistake hiking trails for gravity experiments in my spare time.`;

export const ABOUT_TEXT = `I am an AI developer with a passion for solving real-world problems. With a strong background in AI research, I specialize in translating cutting-edge research papers into practical code. In my latest role as AI Lead at Myna, I developed innovative AI-driven solutions to complex challenges.

Beyond AI, I have experience in competitive programming, having represented my university at the ACM ICPC 2022. I’m also a keen enthusiast of table tennis, tennis, chess, hiking, art, and reading.

Technically, I have hands-on experience with a range of technologies including TensorFlow, PostgreSQL, Tailwind CSS, React.js, Node.js, Pinecone (Vector DB), Retrieval-Augmented Generation (RAG), Langchain, and Statistics.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "AI Lead",
    company: "Myna Insights (TechStars ’24 Batch)",
    description: [
      "Architected and deployed scalable AI systems using Python, RAG, and LangChain, leading to the company’s acceptance into Techstars.",
      "Implemented machine learning models for data-driven insights, enhancing business operations and achieving 98% accuracy in customer queries.",
      "Collaborated with cross-functional teams, utilizing AWS, Docker, and Kubernetes to optimize performance and scalability."
    ],
    technologies: ["PyTorch", "Pinecone", "Langchain", "SQL","Python","Github","Matplotlib", "Google Cloud"],
  },
  {
    year: "June 2024 - Present",
    role: " Human-Robot Interaction Researcher",
    company: "UB CSE Department",
    description: [
      "Conducted research on AI and machine learning to enhance human-robot interaction, focusing on emotion detection and AI-driven processes.",
      "Developed multi-modal emotion detection models using Python, TensorFlow, and PyTorch, achieving over 85% accuracy.",
      "Integrated AI models into robotic systems for real-time data analysis and customized interactions."
    ],
    technologies: ["Matplotlib", "PyTorch","Python","Github","Statistics"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "6125 Nickel Way Avenue, NY-14228 ",
  phoneNo: "+1(716)9846390 ",
  email: "labeebzahed@gmail.com",
};
