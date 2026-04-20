import { Globe, Mail, Earth } from 'lucide-react'

import { RESUME_V2 } from '@/data/resume-v2'
import { cn } from '@/lib/utils'

export function ResumeV2() {
  const resumeData = RESUME_V2

  return (
    <main
      className={cn(
        'text-muted-foreground flex flex-col gap-4 text-sm md:gap-8',
        '[&_section]:flex [&_section]:flex-col [&_section]:gap-2',
        '[&_h1]:text-foreground [&_h1]:text-2xl [&_h1]:font-bold',
        '[&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-bold',
      )}
    >
      {/* about */}
      <section>
        <h1 className="font-heading">{resumeData.name}</h1>

        <p>{resumeData.description}</p>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="flex items-center gap-1">
            <Earth className="size-3.5" />
            <p>{resumeData.location}</p>
          </div>

          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center gap-1 underline-offset-4 hover:underline"
          >
            <Mail className="size-3.5" />
            <span>{resumeData.email}</span>
          </a>

          <a
            href={resumeData.website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline-offset-4 hover:underline"
          >
            <Globe className="size-3.5" />
            <span>{resumeData.website.name}</span>
          </a>
        </div>
      </section>

      {/* skills */}
      <section>
        <h2 className="font-heading">Skills</h2>

        <ul className="space-y-0.5">
          {resumeData.skills.map((skill, index) => (
            <li
              key={index}
              className="before:text-foreground before:mr-1 before:content-['▪️']"
            >
              <span className="text-foreground font-semibold">
                {skill.field}:{' '}
              </span>
              <span>{skill.content}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* work experience */}
      <section>
        <h2 className="font-heading">Work Experience</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.experiences.map((experience, index) => (
            <li key={index} className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-foreground text-base font-semibold underline-offset-4 hover:underline">
                    {experience.company}
                  </h3>
                </a>

                <span className="text-xs whitespace-nowrap">
                  {experience.date}
                </span>
              </div>

              <p className="text-foreground">
                {experience.title}{' '}
                <span>
                  -{' '}
                  <span className="text-muted-foreground">
                    {experience.type}
                  </span>
                </span>
              </p>

              <ul className="space-y-0.5">
                {experience.descriptions.map((desc, descIndex) => (
                  <li
                    key={descIndex}
                    className="before:text-foreground before:mr-1 before:content-['▪️']"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* education */}
      <section>
        <h2 className="font-heading">Education</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-foreground text-base font-semibold">
                  {edu.university}
                </h3>

                <p className="text-xs whitespace-nowrap">{edu.date}</p>
              </div>

              <p>{edu.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* projects */}
      <section>
        <h2 className="font-heading">Projects</h2>

        <div className="grid gap-2">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                'border-border flex flex-col justify-between gap-2 rounded-md border p-3',
                'print:gap-0 print:border-0 print:p-0',
              )}
            >
              <div className="flex flex-col gap-1">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-foreground text-base font-semibold underline-offset-4 hover:underline">
                      {project.name}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-foreground text-base font-semibold">
                    {project.name}
                  </h3>
                )}

                <p>{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.length > 0 && (
                  <span className="hidden print:inline">Stack: </span>
                )}

                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={cn(
                      'text-foreground bg-secondary rounded-md px-2 py-1 text-xs',
                      "print:px-0 print:py-0 print:lowercase print:after:content-[','] print:first:capitalize print:last:before:content-['and_'] print:last:after:content-['.']",
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
