/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "A computer science enthusiast who loves to explore different domains in the field and thrives to work on projects that contribute towards development of society.",
  og: {
    title: "Aditya Manchanda Portfolio",
    type: "website",
    // url: "http://adityamanchanda.com/",
  },
};

//Home Page
const greeting = {
  title: "Aditya Manchanda",
  logo_name: "Aditya",
  // nickname: "...",
  subTitle:
    "A computer science enthusiast who loves to explore different domains in the field and thrives to work on projects that contribute towards development of society.",
  resumeLink:
    "https://drive.google.com/file/d/1vVrYICbSL2AIUVuRA6-a96OnhpQW72Vf/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/Aditya-1500",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-manchanda-1217a617b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:adityamanchanda15@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Aditya_1500",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/aditya1500/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in developing ML Models for different use cases",
        "⚡ Data Analytics and Data Mining using both Python & R",
        "⚡ Developing deep learning models for various applications like Image Classification, Sentence Completion, etc.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos-r-lang",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
            // color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#150458",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "white",
            color: "#F7931E",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front-end using HTML, CSS, Bootstrap, JavaScript",
        "⚡ Creating application backend using Django framework",
        "⚡ Integrating Machine Learning models with the web-application created",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos-django",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Programming",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Problem Solving on platforms like codechef, hackerrank, hackerearth, etc.",
        "⚡ Creating Graphical User Interface (GUI) - based Java applications",
        "⚡ Writing APIs in Java and Golang based on gRPC and Protocol buffers",
        "⚡ Documenting the APIs using Swagger-ui",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
            // color: "#4285F4",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            backgroundColor: "transparent",
            // color: "#4285F4",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            // color: "#FF9900",
          },
        },
        {
          skillName: "GO",
          fontAwesomeClassname: "logos-go",
          style: {
            backgroundColor: "transparent",
            // color: "#0089D6",
          },
        },
        {
          skillName: "Protobuf",
          fontAwesomeClassname: "logos:google-developers",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aditya1500",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/brainhacker15",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/adityamanchanda15/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/brainhacker/profile",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@adityamanchanda15",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/aditya1500",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "nitj_logo.png",
      alt_name: "NIT Jalandhar",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied basic computer science subjects like Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, along with other core subjects such as Machine Learning, Data Analytics, Cloud Computing, Information Security Systems, etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Machine Learning & Data Science, and Web Development using Django.",
        "⚡ I have also been nominated the coordinator of OpenGeest, the official society of CSE Department.",
      ],
      website_link: "https://www.nitj.ac.in/",
    },
    {
      title: "Swami Sant Dass Public School",
      subtitle: "High School (CBSE Board)",
      logo_path: "ssdps_logo.png",
      alt_name: "Swami Sant Dass Public School",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Scored 95.6% in Science Stream (Non-medical) in Grade 12 with a distinction in Mathematics.",
        "⚡ Got CGPA 10 in Grade 10 in CBSE Board Examinations.",
        "⚡ Awarded 'Student of the year' prize for the academic year 2016-17.",
        "⚡ Participated and won various medals in different School, State and National Level Olympiads as well as in TechFests.",
      ],
      website_link: "https://www.swamisantdass.com/",
    },
    {
      title: "UCMAS",
      subtitle: "",
      logo_path: "ucmas_logo.png",
      alt_name: "UCMAS",
      duration: "2010 - 2012",
      descriptions: [
        "⚡ Completed all the 8 levels of UCMAS Program.",
        "⚡ Participated and won runner up prize in UCMAS State Level Competitions for three consecutive years.",
        "⚡ Graduated after completion of the program in 2012.",
      ],
      website_link: "https://www.ucmas.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming with Python",
      subtitle: "- Internshala Trainings",
      logo_path: "Internshala_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-_i1OiTHgkoHJ3UVns_q8aQK5aBLpXsX/view?usp=sharing",
      alt_name: "Programming with Python - Internshala",
      color_code: "#aee3fa",
    },
    {
      title: "Introduction to Algorithms and Data Structures",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-QKhWYwIM_F7Umj6jgtmRNj8wpXqqDDT/view?usp=sharing",
      alt_name: "Intro to DSA - Udemy",
      color_code: "#f2f7ff",
    },
    {
      title: "Python and Django Full Stack Web Developer Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1NXNAufBmb607xQriaGPVXb-PAkc4woO3/view?usp=sharing",
      alt_name: "Python and Django Bootcamp - Udemy",
      color_code: "#f2f7ff",
    },
    {
      title: "AWS Machine Learning Foundations COurse",
      subtitle: "- Udacity x AWS",
      logo_path: "udacity_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zFkRhZPTU5BHPRQZdOQQhkOjgPgMrsgx/view?usp=sharing",
      alt_name: "Machine Learning Foundations - Udacity x AWS",
      color_code: "#AEE3FA5F",
    },
    {
      title: "30 Days of Google Cloud",
      subtitle: "- Google Developers India",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1B1AN4qNQAM22O7_ooGBW7gGWbppwMmMC/view?usp=sharing",
      alt_name: "Google Cloud",
      color_code: "#4285F440",
    },
    {
      title: "30 Days of Kotlin",
      subtitle: "- Google Developers India",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1YrgsNy_fPWr4ZMy0JE9oqayoyltpbyyy/view?usp=sharing",
      alt_name: "Kotlin",
      color_code: "#0C9D5840",
    },
    {
      title: "Python",
      subtitle: "- Kaggle Courses",
      logo_path: "kaggle_logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/aditya1500/python",
      alt_name: "Kaggle Courses - Python",
      color_code: "#AEE3FA5F",
    },
    {
      title: "Intro to Machine Learning",
      subtitle: "- Kaggle Courses",
      logo_path: "kaggle_logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/aditya1500/intro-to-machine-learning",
      alt_name: "Kaggle Courses - Intro to Machine Learning",
      color_code: "#AEE3FA5F",
    },
    {
      title: "Intermediate Machine Learning",
      subtitle: "- Kaggle Courses",
      logo_path: "kaggle_logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/aditya1500/intermediate-machine-learning",
      alt_name: "Kaggle Courses - Intermediate Machine Learning",
      color_code: "#AEE3FA5F",
    },
    {
      title: "Fundamentals of Deep Learning",
      subtitle: "- NVIDIA Deep Learning Institute",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://courses.nvidia.com/certificates/b25892e2ea284b39bc10a61fffd813e1",
      alt_name: "NVIDIA Deep Learning Institute",
      color_code: "#77B90133",
    },
    {
      title: "Postman Student Expert",
      subtitle: "- Postman Student Community",
      logo_path: "postman_student_expert_logo.png",
      certificate_link:
        "https://api.badgr.io/public/assertions/-Y0oL8FsR4SWjYwKe7lLnw?identity__email=adityamanchanda15%40gmail.com",
      alt_name: "Postman Student Expert Badge",
      color_code: "#F0784A20",
    },
    {
      title:
        "Building Transformer-Based Natural Language Processing Applications",
      subtitle: "- NVIDIA Deep Learning Institute",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://courses.nvidia.com/certificates/05a8a6696bf148e29c7109a577ba4e5e",
      alt_name: "NVIDIA Deep Learning Institute",
      color_code: "#77B90133",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have done my internship at Standard Chartered Bank as a Summer Intern 2021. Being very passionate about Computer Science, I love to share my knowledge with others and hence, I have also been a part of many developer communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Development Analyst (Intern)",
          company: "Standard Chartered GBS Pvt Ltd",
          company_url: "https://www.sc.com/in/",
          logo_path: "scb_logo.png",
          duration: "May 2021 - July 2021",
          location: "Virtual Internship",
          description:
            "Here, I worked on development of an Data Marketplace. The task to develop an easy to use User Interface consisting of APIs to access data and a backend to make required API Calls. The APIs used both REST and gRPC Services. I worked on the backend and using Go language, prepared the code to generate Swagger-UI for corresponding proto files for the gRPC Services. The client created using Golang could fetch the data from server in real-time and provide response to API Call. At the end of this internship, the swagger-ui was integrated with the main user interface created using ReactJs and the application was dockerized and deployed using OpenShift. ",
          color: "#0074EB",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Data Science Code Camp - R and Python",
          company_url: "https://dscc-nitj.github.io/",
          logo_path: "nitj_logo.png",
          duration: "August 2021 - September 2021",
          description:
            "Data Science Code Camp was an intensive 4-week course organized by Department of Computer Science and Engineering with motive to provide the basic knowledge of the primary tools of the data science domain and provide hands-on experience to the students at the very initial. This Code camp provided students with a platform for data science by providing a project-based curriculum. As a teaching assistant, I was responsible to prepare and check assignments for students to practice, besides solving doubts encountered by students while carrying out the lab session. This course was specially designed according to the requirements of students as well as industry experts.",
          color: "#4285F4",
        },
        {
          title: "GoogleCloudReady Facilitator",
          company: "Google Cloud",
          company_url:
            "https://events.withgoogle.com/googlecloudready-facilitator-program/",
          logo_path: "gcp_logo.png",
          duration: "March 2021 - June 2021",
          description:
            "The GoogleCloudReady Facilitator program provides students an opportunity to kickstart their career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube. Along the way, they will learn & practice concepts like computing, application development, big data & machine learning using cloud & there are 'Facilitators' who are specially trained on Google Cloud to help.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft",
          company_url: "https://studentambassadors.microsoft.com/",
          logo_path: "mlsa_logo.png",
          duration: "Jan 2021 - Present",
          description:
            "The Microsoft Learn Student Ambassadors is a program to sponsor students majoring in disciplines related to technology. The MSP program enhances students' employability by offering training in skills not usually taught in academia, including knowledge of Microsoft technologies. Under this program, I have organised hands on workshop to guide students about version control using Git and GitHub.",
          color: "#D83B01",
        },
        {
          title: "Head & Student Coordinator",
          company: "OpenGeest",
          company_url:
            "https://www.linkedin.com/company/opengeest-society-nit-jalandhar/",
          logo_path: "og_logo.png",
          duration: "Jun 2020 - Present",
          description:
            "OpenGeest is the official society of Computer Science and Engineering Department, NIT Jalandhar. I was nominated as head of the society in the starting of my Pre-Final year. As a part of OpenGeest society, I have organised various events, and workshops.",
          color: "#000000",
        },
        {
          title: "Core Team Member",
          company: "Developer Student Club NITJ",
          company_url: "https://www.linkedin.com/company/dscnitj/",
          logo_path: "dsc_logo.png",
          duration: "Nov 2019 - May 2020",
          description:
            "Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. As a core member of DSC NITJ, I organized different workshops like Explore ML and mentored the students in HackMoL hackathon.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I believe in learning by doing. Hence, whenever I learn a concept, I try to create a project to clarify the concepts even more. My best experience has been in creating projects based on Machine Learning, Deep Learning, and",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Connect with Me",
    profile_image_path: "AM.jpg",
    description:
      "You can connect with me on LinkedIn or contact me via mail. I'd love to have discussions over emerging technologies in CS Field, especially Machine Learning and Artificial Intelligence.",
  },
  blogSection: {
    title: "Hobbies",
    subtitle:
      "Besides coding, I love to play badminton as a hobby and a leisure activity. I also listen to different types of music as well as watch web-series, movies, and anime in my free time.",
    // link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jalandhar, Punjab - 144008",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/XAmWFRkmhQXpRaeY6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9780685084",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
