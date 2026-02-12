export const RESUME_V2 = {
  name: "Achmad Anshori",
  description:
    "Software Engineer with 4 years of experience delivering reliable technology solutions in various fields such as healthcare, government, and corporate environments. Experienced in collaborating with cross-functional teams to define and implement innovative solutions.",
  title: "Software Engineer.",
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
    {
      field: "IT Service & Operations",
      content:
        "Incident resolution, user access administration, onboarding/offboarding, monitoring & maintenance.",
    },
    {
      field: "ITSM & Tools",
      content: "Jira Service Management, GitHub, CI/CD, ticket handling.",
    },
    {
      field: "Compliance & Security",
      content:
        "User access control, audit trail dashboards, integration with government health compliance systems.",
    },
    {
      field: "Technical",
      content:
        "JavaScript, TypeScript, React.js, Next.js, Node.js, React Native.",
    },
    {
      field: "Collaboration",
      content:
        "Stakeholder communication, documentation & reporting.",
    },
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
        "Developed features for Hospita, a hospital management web app, ensuring stable and compliant IT service delivery.",
        "Integrated BPJS Kesehatan's E-Klaim service into Hospita.",
        "Maintained application environments, optimizing performance and reliability.",
        "Created and maintained service documentation for integrations and processes.",
      ],
    },
    {
      title: "Frontend Engineer",
      type: "Freelance",
      company: "Sentra Raya Solusi",
      link: "#",
      date: "Jul 2024 – Jul 2025",
      descriptions: [
        "Built audit trail record dashboards for insurance clients (Tugu Insurance, BSI) to strengthen compliance and monitoring.",
        "Developed Satu SDM POLRI, a comprehensive HR management system for SDM POLRI.",
        "Supported IT operations teams with dashboards for data visibility and incident tracking.",
        "Collaborated with client stakeholders to align technical delivery with business governance standards.",
      ],
    },
    {
      title: "Software Engineer",
      type: "Fulltime",
      company: "Vorta Siber Indonesia",
      link: "https://www.linkedin.com/company/vorta-siber-indonesia",
      date: "Jun 2022 – Mar 2024",
      descriptions: [
        "Developed and maintained web/mobile apps, including face-recognition login features.",
        "Assisted in system deployments, debugging, and IT operations support.",
        "Documented deployment/configuration processes to support service continuity.",
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
      name: "anshori.com",
      link: "https://anshori.com",
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
