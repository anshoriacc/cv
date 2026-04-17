import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Earth } from "lucide-react";

import { RESUME_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/(cv)/_layout/")({
  component: ResumePage,
  head: () => ({
    meta: [
      {
        title: "Achmad Anshori - Software Engineer, Frontend.",
      },
      {
        name: "description",
        content: "Achmad Anshori's minimal resume page. Ctrl+P to print.",
      },
    ],
  }),
});

function ResumePage() {
  const resumeData = RESUME_DATA;

  return (
    <main
      className={cn(
        "text-sm text-muted-foreground flex flex-col gap-4 md:gap-8",
        "[&_section]:flex [&_section]:flex-col [&_section]:gap-2",
        "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-foreground",
        "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground",
      )}
    >
      {/* about */}
      <section>
        <h1 className="font-heading">{resumeData.name}</h1>

        <p>{resumeData.description}</p>

        <div className="grid sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-1">
            <Earth className="size-3.5" />
            <p>{resumeData.location}</p>
          </div>

          <a
            href={`mailto:${resumeData.email}`}
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            <Mail className="size-3.5" />
            <span>{resumeData.email}</span>
          </a>

          <a
            href={resumeData.website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            <Globe className="size-3.5" />
            <span>{resumeData.website.name}</span>
          </a>
        </div>
      </section>

      {/* skills */}
      <section>
        <h2 className="font-heading">Skills</h2>

        <div className="flex gap-2 flex-wrap">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className={cn(
                "text-foreground bg-secondary px-2 py-1 rounded-md text-xs",
                "print:px-0 print:py-0 print:after:content-[','] print:last:after:content-['.'] print:last:before:content-['and_'] print:lowercase print:first:capitalize",
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* work experience */}
      <section>
        <h2 className="font-heading">Work Experience</h2>

        <ul className="flex flex-col gap-2">
          {resumeData.experiences.map((experience, index) => (
            <li key={index} className="flex flex-col gap-1">
              <div className="flex justify-between gap-4 items-center">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-semibold text-foreground text-base hover:underline underline-offset-4">
                    {experience.company}
                  </h3>
                </a>

                <span className="text-xs whitespace-nowrap">
                  {experience.date}
                </span>
              </div>

              <p className="text-foreground">
                {experience.title}{" "}
                {experience.type && (
                  <span>
                    -{" "}
                    <span className="text-muted-foreground">
                      {experience.type}
                    </span>
                  </span>
                )}
              </p>

              {experience.descriptions && (
                <ul className="space-y-0.5">
                  {experience.descriptions.map((description, index) => (
                    <li
                      key={index}
                      className="before:content-['▪️'] before:mr-1 before:text-foreground"
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              )}
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
              <div className="flex justify-between gap-4 items-center">
                <h3 className="font-semibold text-foreground text-base">
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
                "rounded-md border border-border p-3 flex flex-col gap-2 justify-between",
                "print:p-0 print:border-0 print:gap-0",
              )}
            >
              <div className="flex flex-col gap-1">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-semibold text-foreground text-base hover:underline underline-offset-4">
                      {project.name}
                    </h3>
                  </a>
                ) : (
                  <h3 className="font-semibold text-foreground text-base">
                    {project.name}
                  </h3>
                )}

                <p>{project.description}</p>
              </div>

              <div className="flex gap-2 flex-wrap items-center">
                {project.tags.length > 0 && (
                  <span className="hidden print:inline">Stack: </span>
                )}

                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={cn(
                      "text-foreground bg-secondary px-2 py-1 rounded-md text-xs h-fit",
                      "print:px-0 print:py-0 print:after:content-[','] print:text-sm print:last:after:content-['.'] print:last:before:content-['and_'] print:lowercase print:first:capitalize",
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
  );
}
