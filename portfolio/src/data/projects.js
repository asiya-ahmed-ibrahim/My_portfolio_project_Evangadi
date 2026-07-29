import evangadiImg from "../assets/images/AI_forum.png";
import hotelImg from "../assets/images/Natay_hotel.png";
import chatgptImg from "../assets/images/Chat-gpt.png";
import NETFLIXImg from "../assets/images/Netflix.png"
import odms from "../assets/images/odms.jpg"

const projects = [
  {
    id: "evangadi-forum",
    title: "Evangadi AI Forum",
    description: "A Q&A forum platform built as part of a team project.",
    image: evangadiImg,
    tags: ["Web", "Full-Stack"],
    problem:
      "A project given to students learning at Evangadi, to develop a place to ask questions, get answers, and discuss topics as a team — built to practice real-world full-stack collaboration.",
    role: "Frontend developer on a 6-person team — built the Dashboard, Post Question, Question Detail, RAG Documents, and Discussion Summary Panel pages, plus contributed on backend and deployment.",
    solution:
      "A forum-style Q&A platform with Google OAuth login, and an AI-powered RAG (Retrieval-Augmented Generation) feature — the assistant pulls answers directly from uploaded documents instead of guessing, plus a Discussion Summary Panel that condenses long threads into a quick overview.",
    challenges:
      "Deploying to Railway surfaced real config bugs — a missing 'port' field in the MySQL setup and a mismatched environment variable name (DB_PASS vs DB_PASSWORD) that took real debugging to track down. Also resolved Google OAuth integration issues and a Vite/Tailwind v4 config conflict.",
    techStack: [
      "React",
      "Vite",
      "Express",
      "MySQL",
      "Railway",
      "Vercel",
      "Google OAuth",
    ],
    liveLink: "https://ai-powered-forum-project-flame.vercel.app/",
    githubLink: "https://github.com/asiya-ahmed-ibrahim/ai-powered-forum-project",
  },
  {
  id: "chatgpt-clone",
  title: "ChatGPT Clone",
  description: "An AI chat specificaly chat-gpt's clone interface built to explore AI integration.",
  image: chatgptImg,
  tags: ["AI", "Web"],
  problem:
    "An individual Evangadi coursework assignment to practice integrating a real AI API into a full-stack application, built solo start to finish.",
  role:
    "Built entirely solo — frontend, backend, database, and deployment.",
  solution:
    "A ChatGPT-style chat interface powered by the Gemini API, with a React frontend and an Express/MySQL backend handling chat logic and storage.",
  challenges:
    "Deployment and environment variable debugging — similar config issues to the Forum project, tracking down mismatched env variable names and database connection settings between local and production.",
  techStack: ["React", "Express", "MySQL", "Gemini API", "Railway", "Vercel"],
  liveLink: " https://gpt-clone-project.netlify.app/",
  githubLink: "https://github.com/asiya-ahmed-ibrahim/chatGpt-colne-project",
},
{
  id: "hotel-site",
  title: "Natay Hotel Website",
  description: "A commercial hotel website built for a freelance client.",
  image: hotelImg,
  tags: ["Web", "Freelance"],
  problem:
    "A freelance client, Natay Hotel in Addis Ababa didn't have a website for their hotel, needed a full commercial website to showcase their property and services online.",
  role:
    "Sole developer — designed and built the entire site as a freelance deliverable.",
  solution:
    "A custom-designed hotel website with an Ethiopian-inspired visual identity, built on React with a Node/Express and MySQL backend.",
  challenges: "",
  techStack: ["React", "Node.js", "Express", "MySQL"],
  liveLink: "#",
  githubLink: "",
},
{
  id: "NETLIX-clone",
    title: "NETFLIX clone",
    description: "A NETFLIX clone website I have build while I was taking a full-stack course in Evangadi.",
    image: NETFLIXImg,
    tags: ["Web"],
    problem: "",
    role: "I built the full-project as it was an individual task.",
    solution: "The result is a Netflix clone website interface which is built using react, node.js, Express and MySQL.",
    challenges: "",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    liveLink: "https://movie-website12.netlify.app/",
    githubLink: "https://github.com/asiya-ahmed-ibrahim/Movie-Website-Clone",

},
{
  id: "odms",
    title: "Organ Donation Managment System",
    description: "",
    image: odms,
    tags: ["Web","full-stack"],
    problem: "",
    role: "",
    solution: "",
    challenges: "",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/asiya-ahmed-ibrahim/OrganDonationSystem",
}

];

const evangadi_projects = [
{
  id: "",
    title: "Apple Clone",
    description: "A NETFLIX clone website I have build while I was taking a full-stack course in Evangadi.",
    image: NETFLIXImg,
    tags: ["Web","clone"],
    problem: "",
    role: "I built the full-project as it was an individual task.",
    solution: "The result is a Netflix clone website interface which is built using react, node.js, Express and MySQL.",
    challenges: "",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    liveLink: "https://movie-website12.netlify.app/",
    githubLink: "",
}
]

export default projects;
