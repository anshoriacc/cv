export const RESUME_DATA = {
  name: "Achmad Anshori",
  description:
    "a Software Engineer focused on frontend side with 2 years of hands on experience across several projects.",
  title: "Software Engineer, Frontend.",
  location: "Jakarta, Indonesia",
  email: "anshoriacc@gmail.com",
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
    "React",
    "Next.js",
    "React-Native",
    "Node.js",
  ],
  experiences: [
    {
      title: "Software Engineer",
      company: "Bithealth",
      link: "https://www.linkedin.com/company/bithealth",
      date: "2024",
      descriptions: [
        "Developed features for Hospita, hospital management web app using react and node.",
        "Integrated BPJS Kesehatan's E-Klaim service into the app.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Vorta Siber Indonesia",
      link: "https://www.linkedin.com/company/vorta-siber-indonesia",
      date: "2022 – 2024",
      descriptions: [
        "Developed several web and mobile apps using react and react-native.",
        "Utilized face-recognition using 3rd party service into the apps.",
        "Deployed and debugged apps.",
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
      name: "Diaspora Muda Sumenep",
      link: "https://diasporamudasumenep.com/",
      description:
        "Home for Diaspora Muda Sumenep, a community for young people from Sumenep.",
      tags: ["React", "Next.js", "Typescript", "Laravel"],
      year: "2024",
    },
    {
      name: "anshori.co",
      link: "https://anshori.co",
      description: "My personal and portfolio website.",
      tags: ["React", "Next.js", "Typescript"],
      year: "2023",
    },
    {
      name: "G19 Tour & Travel",
      link: "https://g19tourtravel.vercel.app",
      description: "Reservation web application for G19 Tour & Travel.",
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
