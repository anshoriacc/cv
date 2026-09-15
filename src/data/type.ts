export type ResumeSocial = {
  name: string
  link: string
}

export type ResumeExperience = {
  company: string
  companyUrl: string
  description: string
  roles: Array<{
    position: string
    type: string
    startDate: string
    endDate: string | 'Now'
    responsibilities?: Array<string>
    technologies?: Array<string>
  }>
}

export type ResumeEducation = {
  title: string
  university: string
  year?: string
}

export type ResumeProject = {
  name: string
  url: string
  description: string
  tags: Array<string>
  year: string
}

export type ResumeData = {
  name: string
  description: string
  title: string
  location: string
  email: string
  website: { url: string; name: string }
  social: Array<ResumeSocial>
  skills: Array<string>
  experiences: Array<ResumeExperience>
  education: Array<ResumeEducation>
  projects: Array<ResumeProject>
}
