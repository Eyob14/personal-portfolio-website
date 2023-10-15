import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Eyob Zebene',
  title: "Hi all, I'm Eyob",
  description:
    "I'm passionate Software Engineer having an experience of web and cross platform Mobile applications with Node.js, Flutter, React.js, Next.js and Vue.js",
  resumeLink:
    'https://drive.google.com/file/d/11b8nUoQZ_5fvocDSzZN5v7Q0rjDT6dA2/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'Eyob14',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/eyob-zebene-b8359b21a/',
  github: 'https://github.com/Eyob14',
  instagram: 'https://www.instagram.com/eyoba_29/',
  facebook: 'https://www.facebook.com/eyoba29/',
  twitter: 'https://twitter.com/ZebeneEyob',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji(
          '⚡ Building responsive cross platform Mobile Applications using Flutter'
        ),
        emoji('⚡ Building RESTful APIs in Node Js & Express'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Flutter',
          iconifyTag: 'logos:flutter',
        },
        {
          skillName: 'Nodejs',
          iconifyTag: 'logos:nodejs-icon',
        },
        {
          skillName: 'Express',
          iconifyTag: 'logos:express',
        },
        {
          skillName: 'Vue',
          iconifyTag: 'logos:vue',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend',
    progressPercentage: '90',
  },
  {
    Stack: 'Mobile Development',
    progressPercentage: '80',
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Addis Ababa University',
    subHeader: 'Bachelor of Science in Software Engineering',
    duration: 'October 2019 - October 2024',
    desc: 'The 6th biggest University in Africa',
    grade: '3.7/4.0',
    descBullets: [
      'Learnt the basics of software engineering',
      'Understand how to design and architect software',
      'Understanding of how to write clean code',
      'Worked on real world projects using different programming languages',
      'Understand how to write documents for software',
    ],
  },
  {
    schoolName: 'African Leadership (ALX)',
    subHeader: 'Software Engineering',
    duration: 'November 2021 - November 2022',
    desc: 'A 12 month (70hrs/week) immersive programme that prepares participants for a global career as a Full-Stack Developer',
    grade: 'Grade A',
    descBullets: [
      'Learnt the basics of programming using c',
      'Understand linux and how to use it',
      'Understanding the basics of web development',
      'Worked on real world projects using React.js',
    ],
  },
  {
    schoolName: 'Turing Collage',
    subHeader: 'Web Development',
    duration: 'March 2023 - September 2023',
    desc: 'The very first batch for Turing Collage in Web Development',
    grade: 'Grade A',
    descBullets: [
      'Learnt the basics of web development',
      'Understanding the basics of HTML, CSS, JavaScript, Vue.js, python',
      'Working on a project to build a website using Vue.js framework',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'FullStack Developer',
    company: 'Mereb Technologies',
    companyLogo: '/img/icons/common/mereb.png',
    date: 'Dec 2022 – Jun 2023',
    desc: 'I worked as a full-stack developer, I am responsible for developing and maintaining the front-end and back-end components of web applications.',
  },
  {
    role: 'Mobile App Developer',
    company: 'Africa to Silicon Valley',
    companyLogo: '/img/icons/common/a2sv.png',
    date: 'Aug 2021 – Aug 2023',
    desc: 'I worked as a Mobile Developer I am responsible for developing and maintaining the front-end components of these applications, including the user interface, navigation, and other features.',
  },
  {
    role: 'Flutter Application Developer',
    company: 'Dowell Research Center',
    companyLogo: '/img/icons/common/dowell.png',
    date: 'May 2023 - Aug 2023',
    desc: 'Worked as a Mobile application designer using FlutterFlow, which is used to build cross platform mobile applications using Flutter.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Upwork',
    companyLogo: '/img/icons/common/upwork.png',
    date: 'Jan 2023',
    desc: 'A freelance platform where businesses and independent professionals connect and collaborate remotely. I worked as both Mobile and Full stack developer on different projects on the platform.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Rateat',
    desc: 'A platform that allows users to give and receive item-specific ratings while also displaying business progress points.',
    github: 'https://github.com/RealEskalate/Micro-Yelp',
    link: 'https://drive.google.com/file/d/13znmhjVUdfKQjGTFrrezX08vm4BhNJWf/view',
  },
  {
    name: 'Atrons',
    desc: 'A platform where students can create free accounts to access and share relevant resources.',
    link: 'https://atrons.app/',
  },
  {
    name: 'Typing Speed Test',
    desc: 'A Typing speed test app that allows users to test their typing speed and accuracy.',
    github: 'https://github.com/Eyob14/speed_testing_app.git',
  },
  {
    name: 'Employee Management System',
    desc: 'A platform that allows users to manage employees and their information.',
    github: 'https://github.com/Eyob14/Employee_Managment_System.git',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Eyob Zebene',
  description: 'A passionate Software Engineer.',
  author: 'Eyob Zebene',
  image:
    'https://drive.google.com/file/d/1jg7Hbj1cyv-2yDuFHsnLxRgoVioXp3GT/view?usp=sharing',
  url: '',
  keywords: ['Eyob', 'Eyob Zebene'],
};
