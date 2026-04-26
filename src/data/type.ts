export type ResumeSocial = {
  name: string
  link: string
}

export type ResumeExperience = {
  title: string
  type: string
  company: string
  link: string
  date: string
  descriptions: string[]
}

export type ResumeEducation = {
  title: string
  university: string
  date?: string
}

export type ResumeProject = {
  name: string
  link: string
  description: string
  tags: string[]
  year: string
}

type ResumeBase<TSkill> = {
  name: string
  description: string
  title: string
  location: string
  email: string
  website: { url: string; name: string }
  social: ResumeSocial[]
  skills: TSkill[]
  experiences: ResumeExperience[]
  education: ResumeEducation[]
  projects: ResumeProject[]
}

export type ResumeData = ResumeBase<string>

export type ResumeV2Skill = {
  field: string
  content: string
}

export type ResumeV2Data = ResumeBase<ResumeV2Skill>
