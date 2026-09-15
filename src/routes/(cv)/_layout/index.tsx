import { createFileRoute } from '@tanstack/react-router'
import { IconMail, IconWorld, IconWorldMap } from '@tabler/icons-react'

import { RESUME_DATA } from '@/data/resume'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/(cv)/_layout/')({
  component: ResumePage,
})

function ResumePage() {
  const resumeData = RESUME_DATA

  return (
    <main
      className={cn(
        'text-muted-foreground flex flex-col gap-4 text-xs text-pretty md:gap-8',
        '[&_section]:flex [&_section]:flex-col [&_section]:gap-2',
        '[&_h1]:text-foreground [&_h1]:text-xl [&_h1]:font-bold sm:[&_h1]:text-2xl',
        '[&_h2]:text-foreground [&_h2]:font-bold sm:[&_h2]:text-lg',
      )}
    >
      {/* about */}
      <section>
        <h1>{resumeData.name}</h1>

        <p className="text-sm">{resumeData.description}</p>

        <div className="grid gap-2 text-sm sm:grid-cols-2">
          <div className="flex items-center gap-1">
            <IconWorldMap className="size-3.5" />
            <p>{resumeData.location}</p>
          </div>

          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center gap-1 underline-offset-4 hover:underline"
          >
            <IconMail className="size-3.5" />
            <span>{resumeData.email}</span>
          </a>

          <a
            href={resumeData.website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline-offset-4 hover:underline"
          >
            <IconWorld className="size-3.5" />
            <span>{resumeData.website.name}</span>
          </a>
        </div>
      </section>

      {/* skills */}
      <section>
        <h2>Skills</h2>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className={cn(
                'text-foreground bg-secondary rounded-md px-2 py-1 text-xs',
                "print:px-0 print:py-0 print:lowercase print:after:content-[','] print:first:capitalize print:last:before:content-['and_'] print:last:after:content-['.']",
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* work experience */}
      <section>
        <h2>Work Experience</h2>

        <ul className="flex flex-col gap-3">
          {resumeData.experiences.map((experience) => {
            const responsibilities = experience.roles.flatMap((role) =>
              role.responsibilities ? role.responsibilities : [],
            )
            return (
              <li key={experience.company} className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-4">
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-foreground text-base font-semibold underline-offset-4 hover:underline">
                        {experience.company}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-foreground text-base font-semibold">
                      {experience.company}
                    </h3>
                  )}

                  <span className="flex-1 border-t border-dashed" />

                  <span className="text-foreground text-xs">
                    {experience.roles.at(-1)?.startDate} –{' '}
                    <span
                      className={cn(
                        experience.roles[0].endDate == 'Now' &&
                          'shimmer print:shimmer-none',
                      )}
                    >
                      {experience.roles[0].endDate}
                    </span>
                  </span>
                </div>

                <ul className="space-y-0.5">
                  {experience.roles.map((role) => (
                    <li key={role.position} className="flex items-center gap-4">
                      <span>
                        <span className="text-foreground text-sm font-medium">
                          {role.position}
                        </span>{' '}
                        {experience.roles.length > 1 && (
                          <span className="text-xs italic">
                            {role.startDate} – {role.endDate}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <p>{experience.description}</p>

                <ul className="space-y-0.5">
                  {responsibilities?.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="before:text-foreground flex before:mr-1 before:content-['↪'] print:before:content-['•']"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </section>

      {/* education */}
      <section>
        <h2>Education</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-foreground text-base font-semibold">
                  {edu.university}
                </h3>
              </div>

              <p>{edu.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* projects */}
      <section>
        <h2>Projects</h2>

        <div className="grid grid-cols-2 gap-2 print:grid-cols-1">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                'ring-foreground/10 flex flex-col justify-between gap-2 rounded-md p-3 ring-1',
                'print:gap-0 print:p-0 print:ring-0',
              )}
            >
              <div className="flex flex-col gap-1">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-foreground text-sm font-semibold underline-offset-4 hover:underline">
                      {project.name}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-foreground text-sm font-semibold">
                    {project.name}
                  </h3>
                )}

                <p className="text-xs">{project.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.tags.length > 0 && (
                  <span className="hidden print:inline">Stack: </span>
                )}

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'text-foreground bg-secondary h-fit rounded-md px-2 py-1 text-xs',
                      "print:px-0 print:py-0 print:text-sm print:lowercase print:after:content-[','] print:first:capitalize print:last:before:content-['and_'] print:last:after:content-['.']",
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
