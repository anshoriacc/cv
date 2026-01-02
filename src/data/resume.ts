export const RESUME_DATA = {
  name: "Achmad Anshori",
  description:
    "a Software Engineer focused on frontend side with 3 years of hands on experience. I craft delightful user experiences with React and modern JavaScript.",
  title: "Software Engineer, Frontend.",
  location: "Jakarta, Indonesia",
  email: "anshoriacc@gmail.com",
  website: { url: "https://anshori.com", name: "anshori.com" },
  social: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/achmad-anshori",
    },
    {
      name: "Github",
      link: "https://github.com/anshoriacc",
    },
  ],
  skills: [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "React-Native",
    "Node.js",
  ],
  experiences: [
    {
      title: "Software Engineer",
      type: "Fulltime",
      company: "Travelio",
      link: "https://www.linkedin.com/company/travelio-com",
      date: "Dec 2025 – Present",
      descriptions: [
        "Developed features for Travelio, online home rental operator web app.",
      ],
    },
    {
      title: "Software Engineer",
      type: "Fulltime",
      company: "Bithealth",
      link: "https://www.linkedin.com/company/bithealth",
      date: "Mar 2024 – Nov 2025",
      descriptions: [
        "Developed features for Hospita, hospital management web app using react and node.",
        "Integrated BPJS Kesehatan's E-Klaim service into the app.",
        "Optimized performance both on client & server side: migrated data fetching pattern to tanstack/query, optimized query performance.",
        "Debugged & fixed production issues.",
      ],
    },
    {
      title: "Frontend Engineer",
      type: "Freelance",
      company: "Sentra Raya Solusi",
      link: "#",
      date: "Jul 2024 – Jul 2025",
      descriptions: [
        "Developed audit trail record dashboard for Tugu Insurance and BSI for compliance monitoring.",
        "Deployed and debugged apps.",
      ],
    },
    {
      title: "Software Engineer",
      type: "Fulltime",
      company: "Vorta Siber Indonesia",
      link: "https://www.linkedin.com/company/vorta-siber-indonesia",
      date: "Jun 2022 – Mar 2024",
      descriptions: [
        "Developed several web and mobile apps using react and react-native.",
        "Utilized face-recognition using 3rd party service into the apps.",
        "Deployed and debugged apps.",
        "Contributed to several projects using reactjs and php/laravel.",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor degree in Computer Science",
      university: "Brawijaya University",
      date: "2016 – 2023",
    },
  ],
  projects: [
    {
      name: "Audit Trail Dashboard for Tugu Insurance & BSI",
      link: "",
      description:
        "Dashboard to monitor user activity for compliance purposes.",
      tags: ["React", "Typescript"],
      year: "2024",
    },
    {
      name: "Diaspora Muda Sumenep",
      link: "https://diasporamudasumenep.com/",
      description:
        "Home for Diaspora Muda Sumenep, a community for young people from Sumenep.",
      tags: ["React", "Next.js", "Typescript", "Laravel"],
      year: "2024",
    },
    {
      name: "anshori.com",
      link: "https://anshori.com",
      description: "My personal and portfolio website.",
      tags: ["React", "Next.js", "Typescript"],
      year: "2023",
    },
    {
      name: "G19 Tour & Travel",
      link: "",
      description: "Reservation web application for G19 Tour & Travel. Built for final thesis project.",
      tags: ["React", "Next.js", "Typescript", "Node.js"],
      year: "2023",
    },
    {
      name: "Madura Tourism Centre",
      link: "",
      description: "Information page of Madura tourism, history and culture.",
      year: "2022",
      tags: ["React", "Javascript"],
    },
  ],
} as const;
