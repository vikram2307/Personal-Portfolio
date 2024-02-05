// data.js

const skillsData = [
  
  { skill: 'SQL', percentage: 96 },
  { skill: 'Java', percentage: 95 },
  { skill: 'Python', percentage: 92 },
  { skill: '.NET', percentage: 91 },
  { skill: 'React', percentage: 90 },
  { skill: 'PHP', percentage: 87 },
  { skill: 'C', percentage: 85  },
  { skill: 'C++', percentage: 80 },
  { skill: 'Springboot', percentage: 75 },
  { skill: 'Hibernate', percentage: 70},
  { skill: 'MongoDB', percentage: 65 },
  { skill: 'Cloud', percentage: 60 },
  // Add more skills as needed
];

const certificationsData = [
  { title: 'Java Basic - Hackerrank - 27 Sep, 2023', link: 'https://www.hackerrank.com/certificates/04a47db7c89d'},
  // Add more certifications as needed
  { title: 'Python Basic - Hackerrank - 27 Sep, 2023', link: 'https://www.hackerrank.com/certificates/5a7822d01e34' },

  { title: 'c# Basic - Hackerrank. - 26 Sep, 2023', link: 'https://www.hackerrank.com/certificates/a30119d4acd3'},

  { title: 'Reactjs Basic - Hackerrank. - 26 Sep, 2023', link: 'https://www.hackerrank.com/certificates/a6ad7bfaf32e'},

  { title: 'JavaScript Basic - Hackerrank. - 27 Sep, 2023', link: 'https://www.hackerrank.com/certificates/e5c0b53d938c'},

  { title: 'SQl Basic - Hackerrank. - 28 Sep, 2023', link: 'https://www.hackerrank.com/certificates/a8d6d5408f91' },
  
  { title: 'Edge Java - Fortune Cloud Technologies. -  April, 2023', link: '' },
  
  { title: 'AWS Academy Graduate - AWS Academy Cloud Foundations. - 04 October, 2022', link: 'https://www.credly.com/badges/05271be5-1167-4018-9393-ae183e49b938/print' },

  { title: 'Java Training - Spoken Tutorial Project, IIT Bombay.  - 26 March, 2022', link: '' },
  
  { title: 'Advance Cpp Training - Spoken Tutorial Project, IIT Bombay.  - 26 March, 2022', link: '' },

  { title: 'Python and Advance Python - Nilesh Technology. -  2020', link: '' },
  
  { title: 'MongoDB  Basics - MongoDB University. - 28 Sep, 2021', link: '' },

  { title: 'Advance Excel - Cognitive Technologies.  - 15 March, 2019', link: '' },
  



];

const experiencesData = [
  { title: 'Jr. Software Engineer Intern - Cravita Technology PVT LTD.', date: 'February 2023 - Jully 2023' },
  // Add more experiences as needed
];

const educationData = [
  { title: 'MSC In CSE- Modern College of ARTS, COMMERCE & SCIENCE, Pune, Maharashtra.  -2023' },

  { title: 'BSC In CSE- DR. D.Y. Patil ARTS, COMMERCE & SCIENCE , Pune, Maharashtra.  -2021' },
  
  { title: 'HSC - Bharat Bharti Secondary High School, Parbhani, Maharashtra.  -2018' },
  
  { title: 'SSC - Nutan Vidyalaya Selu, Parbhani, Maharashtra.  -2016' },
  // Add more education details as needed
];

const ProjectData = [
  {
    id: 1,
    ProjectName: 'Etutor-JAVA',
    ProjectTitle:'Devloped to Help Certain Education Buisness',
    ProjectDecr: 'Transforming traditional learning paradigms, ETutor is a dynamic project that connects students to a world of interactive and engaging lessons.',
    Technology: 'Java, Springboot, Hibernate, Sql, JavaScript, Html, Css, Bootstrap',
    Date: 'Dec 2023',
    ImageSrc: [
      '../images/Projects/Etutor/HomePage 1.png',
      '../images/Projects/Etutor/HomePage 2.png',
      '../images/Projects/Etutor/HomePage 3.png',
      '../images/Projects/Etutor/HomePage 4.png',
      '../images/Projects/Etutor/HomePage 5.png',
      '../images/Projects/Etutor/HomePage 6.png',
      '../images/Projects/Etutor/AboutUs 1.png',
      '../images/Projects/Etutor/AboutUs 2.png',
      '../images/Projects/Etutor/Active Demos 1.png',
      '../images/Projects/Etutor/All Purchased courses 1.png',
      '../images/Projects/Etutor/Completed Courses 1.png',
      '../images/Projects/Etutor/DemoCourses 1.png',
      '../images/Projects/Etutor/DemoCourses 2.png',
      '../images/Projects/Etutor/Failed Courses 1.png',
      '../images/Projects/Etutor/LoginRegister 1.png',
      '../images/Projects/Etutor/LoginRegister 2.png',
      '../images/Projects/Etutor/Passed Courses 1.png',
      '../images/Projects/Etutor/StudentDashboard 1.png',
      '../images/Projects/Etutor/Update Password 1.png',
      '../images/Projects/Etutor/Update Profile 1.png',
      '../images/Projects/Etutor/Chatbot 1.png',
    
      
    ], // Add an array of image sources
    ThumbnailSrc: 
    '../images/Projects/Etutor/HomePage 1.png',
    
  },
  {
    id: 2,
    ProjectName: 'LMS-C#',
    ProjectTitle:'Devloped to Help Librarian for Library Management',
    ProjectDecr: 'Commanding education with simplicity – Explore the, LMS Console -application, where managing your learning environment is just a few keystrokes away.',
    Technology: 'C#, .net, Sql Server Manager, Sql',
    Date: 'Dec 2023',
    ImageSrc: [
      '../images/Projects/LMS/Welcome page 1.png',
      '../images/Projects/LMS/Front desk menu 1.png',
      
      '../images/Projects/LMS/Librarian menu 1.png',
      '../images/Projects/LMS/Library add book.png',
      '../images/Projects/LMS/Library delete book.png',
      '../images/Projects/LMS/Library add student.png',
      '../images/Projects/LMS/Library delete student.png',
      '../images/Projects/LMS/Library Issued books.png',
      
      '../images/Projects/LMS/Library view all books.png',
      '../images/Projects/LMS/Student menu 1.png',
      '../images/Projects/LMS/Student search by auther name.png',
      '../images/Projects/LMS/Student search by book name.png',
      
    ], // Add an array of image sources
    ThumbnailSrc: '../images/Projects/LMS/Welcome page 1.png',
  },
  {
    id: 3,
    ProjectName: 'FMS-JAVA',
    ProjectTitle:'Devloped to Help Certain Forensics Department',
    ProjectDecr: 'Command, control, and conquer forensic challenges with the "Forensic Management System" – where efficiency meets excellence in investigative processes.',
    Technology: 'Java, Springboot, Hibernate, Sql',
    Date: 'Dec 2023',
    ImageSrc: [
      '../images/Projects/FMS/Picture1.png',
      
      '../images/Projects/FMS/Picture2.png',
      '../images/Projects/FMS/Picture3.png',
      '../images/Projects/FMS/Picture4.png',
      '../images/Projects/FMS/Picture5.png',
      '../images/Projects/FMS/Picture6.png',
      '../images/Projects/FMS/Picture7.png',
      '../images/Projects/FMS/Picture8.png',
      '../images/Projects/FMS/Picture9.png',
      '../images/Projects/FMS/Picture10.png',
      '../images/Projects/FMS/Picture11.png',
      '../images/Projects/FMS/Picture12.png',
      '../images/Projects/FMS/Picture13.png',
      '../images/Projects/FMS/Picture14.png',
    ], // Add an array of image sources
    ThumbnailSrc:  '../images/Projects/FMS/Picture1.png',
  },
  {
  id: 4,
  ProjectName: 'Car Rental-PHP',
  ProjectTitle:'Devloped to Help for Car Rental Buisness',
  ProjectDecr: 'Revolutionize your car rental business with the "Car Rental Management System" – your all-in-one solution for seamless operations and customer satisfaction.',
  Technology: 'PHP,HTML, CSS, JavaScript, Sql',
  Date: 'Dec 2021',
  ImageSrc: [
    '../images/Projects/Car/Picture1.png',
    '../images/Projects/Car/Picture2.png',
    '../images/Projects/Car/Picture3.png',
    '../images/Projects/Car/Picture4.png',
    '../images/Projects/Car/Picture5.png',
    '../images/Projects/Car/6.png',
    '../images/Projects/Car/Picture7.png',
  ], // Add an array of image sources
  ThumbnailSrc:'../images/Projects/Car/Picture1.png',
},
];

export {
  skillsData,
  certificationsData,
  educationData,
  experiencesData,
  ProjectData,

};
