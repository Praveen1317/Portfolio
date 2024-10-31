import netflix from "../assets/projects/netflix.jpg";
import travello from "../assets/projects/travello.jpg";
import portfolio from "../assets/projects/portfolio.png";
import sentiment from "../assets/projects/sentiment.png";

export const ME_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, Python, HTML, CSS and Js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, express js, Django and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly applications having Master's Degree from University of south Dakota. With 3 years of professional experience, I have worked with a variety of technologies, including Js, HTML, CSS, Python, React, Express.js, Node.js, Django, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - April 2024",
    role: "Software Development Engineer Intern",
    company: "Skillo Inc.",
    description: `Utilized HTML, CSS, JavaScript, Node.js, and Express.js to develop robust user authentication and RESTful APIs, ensuring cross-browser compatibility and efficient communication. By enhancing SQL database queries, I significantly improved performance and reduced response times, and implemented secure user authentication using JWT tokens. Collaborating with cross-functional teams, I translated project requirements into technical specifications, leading to successful and timely project delivery.`,
    technologies: ["Javascript", "Express.js", "Node.js", "Postman"],
  },
  {
    year: "Oct 2021 - Jan 2023",
    role: "Software Developer",
    company: "Wipro Technologies",
    description: `Designed and implemented an efficient payment history collection method, leveraging Python for data extraction and transformation, and developed a data export feature with automatic daily updates, enhancing user satisfaction. Integrated Jenkins for continuous integration to automate build, testing, and reporting processes, and maintained project repositories on Git for reliable code review and version control. Collaborated closely with designers, testers, and project managers, ensuring alignment with project requirements and fostering effective team communication.`,
    technologies: ["HTML", "CSS", "Python", "mySQL","Git","API"],
  },
  {
    year: " Sep 2020 - Sep 2021",
    role: "Full Stack Developer Intern",
    company: "TRC Tech",
    description: `Utilized Python (Flask) and Java, integrating FastAPI for efficient API development, resulting in streamlined processes and accelerated project delivery. By applying Agile methodologies and using Jenkins and Docker for continuous integration and delivery, I enhanced team collaboration and ensured timely delivery of high-quality solutions. Writing clean, efficient, and maintainable code, I created robust software solutions with improved scalability, performed comprehensive testing and debugging, and achieved enhanced user satisfaction with minimized post-deployment issues.`,
    technologies: ["Python", "Flask", "Java", "Docker"],
  },
 
];

export const PROJECTS = [
  {
    title: "Netflix Prototype",
    image: netflix,
    description:
      "Developed a Prototype of Netflix using React Js and TMDB API.Fetched the movie data from TMDB API and organized the data based on various categories.Build Custom CSS classes which can replicate Netflix UI. Used movie trailer API to fetch the trailer corresponding to the movie and was able to showcase it using react-YouTube player",
    technologies: ["JavaScript", "React JS", "TMDB API", "HTML", "CSS","react-YouTube"],
  },
  {
    title: "Travel App Prototype",
    image: travello,
    description:
      "Developed a travel app prototype using Django, offering features like user authentication, data fetching from third-party APIs, and a responsive UI with Bootstrap. Utilized RESTful APIs for seamless integration of real-time travel data, providing users with up-to-date information on destinations, flights, and accommodations.",
    technologies: ["Django", "HTML","CSS", "MySQL", "Rest AP","Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Java  Script", "React", "Tailwind CSS", ],
  },
  {
    title: "Sentiment Analysis on Reddit Data using LSTM ",
    image: sentiment,
    description:
      "Developed a Deep Learning classification model to analyze the sentiment of reddit data. This model is a decision-making model used to decide opinions, emotions, and attitudes expressed in the text data.",
    technologies: ["Deep Learning", "conv1D", "MaxPooling", "mySQL"],
  },
];

export const CONTACT = {
  address: "7378 W lake sammamish pkwy, 98052,  Redmond, Washington",
  phoneNo: "+1 605-659-1027 ",
  email: "susmithapasupuleti0303@gmail.com",
};
