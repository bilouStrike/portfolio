import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  algo,
  sudoku,
  memory,
  gym24,
  sushi,
  hoo,
  uikit
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BLOCKYPAGE",
    icon: "",
    iconBg: "#383E56",
    date: "2019",
    points: [
      "Built a scalable Page Builder based on Gutenberg Editor with 20+ advanced blocks..",
      "Developed an API endpoint with WordPress to serve Gutenberg Templates.",
      "Developed Both Static and Dynamic Blocks..",
      "Used SASS, BEM and SMACSS Methodologies for CSS..",
    ],
  },
  {
    title: "FRONT-END DEVELOPER - Reactjs",
    company_name: "Freelancer",
    icon: "",
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Built an Advanced Dashboard with React & Redux that uses data from multiple API services..",
      "Used Redux-Saga for handling side effects..",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Used Ant Design UI library and customized it according to the client's needs..",
    ],
  },
  {
    title: "Gutenberg / React Engineer",
    company_name: "rtCamp",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Worked in both Gutenberg and React projects..",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Maxi-Block",
    icon: "",
    iconBg: "#E6DEDD",
    date: "2021/2022",
    points: [
      "Built a scalable Page Builder based on Gutenberg.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built Gutenberg Blocks for an advanced front-end UI.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "VisualSort",
    description:
      "An interactive web application designed to visually represent various sorting algorithms using ReactJS, This educational tool provides a captivating way to understand the inner workings of sorting algorithms by visually demonstrating how they sort data in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: algo,
    source_code_link: "https://github.com/bilouStrike/VisualSort",
  },
  {
    name: "Sudoku game",
    description:
      "The React Sudoku Game Web Application is an entertaining and challenging web-based game that brings the classic Sudoku puzzle to life using the power of ReactJS. Sudoku enthusiasts and casual players alike can enjoy this interactive and intuitive application to test their logical thinking and problem-solving skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/bilouStrike/sudoku-app",
  },
  {
    name: "Memory Game",
    description:
      "The React Memory Game Web Application is an exciting and captivating web-based game that tests and enhances players' memory and concentration skills. Built with the powerful ReactJS library, this interactive application offers a delightful and challenging gaming experience suitable for players of all ages.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memory,
    source_code_link: "https://github.com/bilouStrike/memory-game",
  },
  {
    name: "GYM24 - Landing page",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gym24,
    source_code_link: "https://github.com/bilouStrike/gym-landing-page",
  },
  {
    name: "Sushi - Landing page",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sushi,
    source_code_link: "https://github.com/bilouStrike/sushi-landing-page",
  },
  {
    name: "Hoo Bank - Landing page",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: hoo,
    source_code_link: "https://github.com/bilouStrike/hoo-bank-landing-page",
  },
  {
    name: "UI-kit - ongoing",
    description: "a versatile and powerful collection of meticulously designed components and resources that empower developers to create stunning, responsive, and interactive user interfaces with ease",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      }
    ],
    image: uikit,
    source_code_link: "https://github.com/hiringkanban/frontend",
  },
];

export { technologies, experiences, projects };
