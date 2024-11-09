// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate AI engineer by day, full-stack web developer for some variety, statistics and art enthusiast for reasons beyond reason. I relish mental duels over a chessboard and occasionally mistake hiking trails for gravity experiments in my spare time.`;

export const ABOUT_TEXT = `I am an AI developer with a passion for solving real-world problems, leveraging my strong background in AI research and big data analysis. I am particularly interested in human-robot interaction and exploring its potential applications across various fields and domains. In my most recent role as AI Lead at Myna, I developed innovative AI-driven solutions to complex challenges.

I have also honed my problem-solving skills through competitive programming, representing my university at the ACM ICPC 2022. In my free time, I enjoy table tennis, tennis, chess, hiking, art, and reading.

Technically, I have hands-on experience with a range of technologies and disciplines, including TensorFlow, PyTorch, PostgreSQL, React.js, Node.js, Tailwind CSS, Kubernetes, Pinecone (Vector DB), Retrieval-Augmented Generation (RAG), Langchain, and statistics, just to name a few.`;

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
    technologies: ["PyTorch", "Pinecone", "Langchain", "SQL","Python","Github","Matplotlib", "Google Cloud", "Spark NLP", "RAG"],
  },
  {
    year: "October 2023 - June 2024",
    role: " Human-Robot Interaction Researcher",
    company: "UB CSE Department",
    description: [
      "Conducted research on AI and machine learning to enhance human-robot interaction, focusing on emotion detection and AI-driven processes.",
      "Developed multi-modal emotion detection models using Python, TensorFlow, and PyTorch, achieving over 85% accuracy.",
      "Integrated AI models into robotic systems for real-time data analysis and customized interactions."
    ],
    technologies: ["Matplotlib", "PyTorch","Python","Github","Statistics"],
  },
  {
    year: "April 2022",
    role: "Competitive Programmer",
    company: "ACM ICPC - North America Regionals 2022",
    description: [
      "Competed in a high-pressure environment, solving complex algorithmic problems under strict time constraints.",
      "Collaborated with teammates to optimize solutions and implement efficient algorithms in real-time.",
      "Demonstrated expertise in data structures, algorithms, and mathematical concepts to solve advanced programming challenges."
    ],
    technologies: [ "Python", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory", "Mathematics"]
  },
  {
    year: "August 2022 - June 2024",
    role: " Tech Consultant",
    company: "Tech Squad - SUNY IT Wing",
    description: [
      "Led a team of 32 IT consultants, managing projects and resources to deliver technical solutions efficiently.",
      "Oversaw software and hardware implementations, ensuring client satisfaction and effective problem-solving.",
      "Implemented project management best practices, increasing efficiency by 25% and achieving a 95% client satisfaction rate."
    ],
    technologies: ["Salesforce", "Problem-solving","Communication","Teamwork","UNIX Command Line"],
  },
];

export const PROJECTS = [
  { title: "Rufus AI Web Scraper", date: "October 2023", 
    date:"October 2024",
    description: [ "Developed Rufus, an AI-powered tool designed to intelligently crawl websites and extract relevant data for use in Retrieval-Augmented Generation (RAG) pipelines.", "Implemented advanced Natural Language Processing (NLP) using spaCy for keyword extraction and content relevance.", "Utilized Selenium WebDriver and BeautifulSoup for dynamic web content handling and HTML parsing.", "Extracted metadata such as titles, headings, and last updated dates to provide structured output suitable for RAG integration.", "Released Rufus as a Python package available via pip, enabling easy installation and integration into existing workflows." ], 
    technologies: ["Python", "spaCy", "Selenium", "BeautifulSoup", "NLP", "Web Scraping", "Retrieval-Augmented Generation", "API Development"], 
  },
  {
    title: "Business Intelligence & Review Analysis Platform",
    date: "August 2024 - September 2024",
    description: [
    "Engineered a hybrid neural network combining RoBERTa, CNN, and LSTM architectures to analyze customer sentiment, achieving 85%+ accuracy through transfer learning and custom data preprocessing",
    "Developed a multi-index RAG pipeline integrating Claude API to extract and categorize business aspects across 90+ predefined metrics, enabling granular analysis of customer feedback",
    "Built scalable data collectors to process and analyze multiple data sources including customer reviews, website content, and social media engagement metrics",
    "Implemented distributed text processing using Spark NLP for efficient analysis of large-scale business data, with automated insight generation through aspect-based sentiment categorization",
    "Deployed the system on Google Cloud Vertex AI with automated scaling, enabling real-time analysis and feedback generation for business decision-making"
    ],
    technologies: [
    "RoBERTa",
    "CNN-LSTM",
    "Claude API",
    "Spark NLP",
    "Google Cloud",
    "Vertex AI",
    "RAG",
    "PyTorch",
    "Transformers",
    "Spacy",
    "NLTK",
    "pandas",
    "NumPy"
    ],
    },
  {
    title: "New Personal Website in React, Tailwind, and Framer Motion",
    date: "October 2024",
    description: [
      "Currently developing a new personal portfolio website using React, Tailwind CSS, and Framer Motion for smooth animations.",
      "Designed the website to be responsive and optimized for mobile and desktop users.",
      "Integrated dynamic animations and transitions for interactive user experience using Framer Motion.",
      "Building reusable components to ensure modularity and future scalability."
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design", "JavaScript", "UI/UX design"],
  },
  {
    title: "Restaurant Review Sentiment Analysis - Insight Generation Project",
    date: "August 2024 - September 2024",
    description: [
      "Created a RAG pipeline to preprocess a large dataset and generate queries using sentiment analysis from RoBERTa model, topic analysis, and keyword extraction using Spark NLP.",
      "Utilized a vector database (Pinecone) to store insights and tips data, feeding them into a retriever.",
      "Performed cosine similarity search on the index and generated responses that mitigated hallucination.",
      "Extracted and processed restaurant reviews from Google and Yelp APIs to provide meaningful insights.",
      "Deployed the project on Google Cloud Console using Cloud Functions and Vertex AI for scalability."
    ],
    technologies: ["RoBERTa", "Spark NLP", "LangChain", "Pinecone", "Google Cloud", "Vertex AI", "Cosine Similarity", "APIs", "RAG", "Statistics"],
  },
  {
    title: "Definitely Labeeb: Personalized Chatbot",
    date: "September 2024",
    description: [
      "Created a personalized chatbot using AI and machine learning, integrating it into my personal website for 24/7 information access.",
      "Implemented Retrieval-Augmented Generation with LangChain and deployed on cloud platforms using Docker and Kubernetes.",
      "Leveraged data engineering techniques for efficient data processing and AI model deployment."
    ],
    technologies: ["LangChain", "RAG", "AI", "Docker", "Kubernetes", "Cloud"],
  },
  {
    title: "Reinforcement Learning Stock Market Prediction Project",
    date: "April 2024",
    description: [
      "Developed a stock prediction app using reinforcement learning with a Deep Q-Network model in Python.",
      "Created a two-step prediction tool allowing users to input a stock symbol and get real-time predictions with a 'buy, hold, sell' recommendation.",
      "Integrated historic financial data from multiple sources to improve prediction accuracy.",
      "Simulated a custom stochastic market environment to mimic the randomness of stock market trends.",
      "Achieved an average return on investment of 12% on real trades based on model predictions."
    ],
    technologies: ["Python", "Reinforcement Learning", "Deep Q-Network", "Financial Data", "Custom Market Environment", "Stochastic Modeling"],
  },
  {
    title: "Real-Time Facial Emotion Recognition Project",
    date: "January 2024",
    description: [
      "Developed a real-time facial emotion recognizer that uses live camera input to predict facial emotions.",
      "Utilized facial landmarks and custom-built computer vision models to process real-time video frames.",
      "Trained the model using the CK+ emotion detection dataset for accurate emotion prediction.",
      "Achieved efficient real-time performance for detecting emotions like happiness, anger, surprise, and more."
    ],
    technologies: ["Computer Vision", "Facial Landmarks", "Python", "OpenCV", "CK+ Dataset", "Real-Time Processing"],
  },
  {
    title: "Social Media Meme Editor Application",
    date: "March 2023 - May 2023",
    description: [
      "Collaborated with a team in an Agile environment to develop a full-stack social media application for editing and sharing memes.",
      "Implemented user login verification, password hashing, and user profile pages with personalized data.",
      "Users could post edited memes on the social media page, where others could interact with posts.",
      "Built logout functionality and designed a secure, scalable backend using PHP and SQL.",
      "Deployed the application on Heroku, ensuring smooth user experience with responsive front-end using HTML, CSS, and JavaScript."
    ],
    technologies: ["PHP", "SQL", "Heroku", "HTML", "CSS", "JavaScript", "Agile", "Login Verification", "Password Hashing"],
  },
  
  {
    title: "Multi-Modal Emotion Detection",
    date: "October 2023 - March 2024",
    description: [
      "Read through novel research papers and translated them into recreated code for emotion detection.",
      "Achieved 86% accuracy on average for detecting emotions across three modalities: face, speech, and text.",
      "Developed the system as part of research to create an emotionally intelligent chatbot.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NLP", "Computer Vision", "Speech Recognition"],
  },
  {
    title: "Neural Network Powered Self-Driving Car Simulation",
    date: "January 2023",
    description: [
      "Created a 2D top-down simulation of a self-driving car using a simple Neural Network and reinforcement learning.",
      "Developed the environment using Vanilla JavaScript.",
      "Achieved autonomous navigation with a 90%+ success rate in a custom environment."
    ],
    technologies: ["Neural Networks", "Reinforcement Learning", "Vanilla JavaScript", "Simulation"],
  },

  {
    title: "EnCapsulate: Video Summarization Application",
    date: "March 2022",
    description: [
      "Developed a lecture summarization app using NLP and machine learning algorithms to process multi-modal data.",
      "Implemented AI-driven processes for real-time and recorded summarization, reducing video review time by 50%.",
      "Utilized Python, TensorFlow, and AWS to deploy scalable solutions."
    ],
    technologies: ["Python", "TensorFlow", "NLP", "AWS", "Machine Learning", "Video Processing", "SpaCy"],
  },
];

export const CONTACT = {
  address: "6125 Nickel Way Avenue, NY-14228 ",
  phoneNo: "+1(716)9846390 ",
  email: "labeebzahed@gmail.com",
};
