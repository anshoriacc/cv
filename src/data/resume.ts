import type { ResumeData } from '@/data/type'

export const RESUME_DATA: ResumeData = {
  name: 'Achmad Anshori',
  description:
    "I'm a software engineer with 4+ years of experience in software engineering. I craft delightful user experiences with React and modern JavaScript.",
  title: 'Software Engineer, Frontend.',
  location: 'Jakarta, Indonesia',
  email: 'anshoriacc@gmail.com',
  website: { url: 'https://anshori.com', name: 'anshori.com' },
  social: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/achmad-anshori',
    },
    {
      name: 'Github',
      link: 'https://github.com/anshoriacc',
    },
  ],
  skills: [
    'React.js',
    'TanStack',
    'Next.js',
    'Javascript',
    'Typescript',
    'React-Native',
    'Node.js',
  ],
  experiences: [
    {
      company: 'Sentra Raya Solusi',
      companyUrl: '',
      description:
        'Working on several projects including Integra Brimob, compliance audit-trail dashboards, and Satu SDM',
      roles: [
        {
          position: 'Full Stack Developer',
          type: 'Full-time',
          startDate: 'May 2026',
          endDate: 'Now',
          responsibilities: [
            'Architecting the frontend foundation for Integra Brimob, establishing project structure, reusable UI components, and conventions for scalable feature development.',
          ],
          technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Nest.js',
          ],
        },
        {
          position: 'Frontend Engineer',
          type: 'Part-time',
          startDate: 'Jul 2024',
          endDate: 'Apr 2026',
          responsibilities: [
            'Built compliance-focused audit-trail dashboards for Tugu Insurance and BSI.',
            'Delivered core features for Satu SDM.',
            'Deployed applications and resolved production issues.',
          ],
          technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Nest.js',
          ],
        },
      ],
    },
    {
      company: 'Travelio',
      companyUrl: 'https://www.linkedin.com/company/travelio-com',
      description:
        "Contributed to Travelio's online property rental and management platform.",
      roles: [
        {
          position: 'Software Engineer',
          type: 'Full-time',
          startDate: 'Dec 2025',
          endDate: 'Mar 2026',
          responsibilities: [
            'Delivered features for Travelio Property Management.',
          ],
          technologies: ['Node.js', 'Express', 'React'],
        },
      ],
    },
    {
      company: 'Bithealth',
      companyUrl: 'https://www.linkedin.com/company/bithealth',
      description: 'Contributed to Hospita, a hospital management platform.',
      roles: [
        {
          position: 'Software Engineer',
          type: 'Full-time',
          startDate: 'Mar 2024',
          endDate: 'Nov 2025',
          responsibilities: [
            "Integrated BPJS Kesehatan's E-Klaim service into Hospita.",
            'Improved client and server performance by adopting TanStack Query and optimizing server-side queries.',
            'Investigated and resolved production issues.',
          ],
          technologies: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'Nest.js',
          ],
        },
      ],
    },
    {
      company: 'Vorta Siber Indonesia',
      companyUrl: 'https://www.linkedin.com/company/vorta-siber-indonesia',
      description:
        'Delivered web and mobile applications for multiple clients.',
      roles: [
        {
          position: 'Software Engineer',
          type: 'Full-time',
          startDate: 'Jun 2022',
          endDate: 'Mar 2024',
          responsibilities: [
            'Built client web and mobile applications with React and React Native.',
            'Integrated third-party face-recognition services into client applications.',
            'Deployed applications and resolved production issues.',
          ],
          technologies: [
            'React',
            'React Native',
            'TypeScript',
            'PHP',
            'Laravel',
          ],
        },
      ],
    },
  ],
  education: [
    {
      title: 'Bachelor degree in Computer Science',
      university: 'Brawijaya University',
      year: '2016 - 2023',
    },
  ],
  projects: [
    {
      name: 'Audit Trail Dashboard for Tugu Insurance & BSI',
      url: '',
      description:
        'Dashboard to monitor user activity for compliance purposes.',
      tags: ['React', 'Typescript'],
      year: '2024',
    },
    {
      name: 'Diaspora Muda Sumenep',
      url: 'https://diasporamudasumenep.com/',
      description:
        'Home for Diaspora Muda Sumenep, a community for young people from Sumenep.',
      tags: ['React', 'Next.js', 'Typescript'],
      year: '2024',
    },
    {
      name: 'anshori.com',
      url: 'https://anshori.com',
      description: 'My personal and portfolio website.',
      tags: ['React', 'TanStack', 'Typescript'],
      year: '2023',
    },
    {
      name: 'G19 Tour & Travel',
      url: '',
      description:
        'Reservation web application for G19 Tour & Travel. Built for final thesis project.',
      tags: ['React', 'Next.js', 'Typescript', 'Node.js'],
      year: '2023',
    },
    {
      name: 'Madura Tourism Centre',
      url: '',
      description: 'Information page of Madura tourism, history and culture.',
      year: '2022',
      tags: ['React', 'Javascript'],
    },
  ],
}
