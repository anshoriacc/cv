import { createFileRoute } from '@tanstack/react-router'

import { ResumeV1 } from '@/components/resume/resume-v1'

export const Route = createFileRoute('/(cv)/_layout/')({
  component: ResumePage,
  head: () => ({
    meta: [
      {
        title: 'Achmad Anshori - Software Engineer, Frontend.',
      },
      {
        name: 'description',
        content: "Achmad Anshori's minimal resume page. Ctrl+P to print.",
      },
    ],
  }),
})

function ResumePage() {
  return <ResumeV1 />
}
