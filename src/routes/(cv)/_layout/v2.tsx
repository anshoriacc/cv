import { createFileRoute } from '@tanstack/react-router'

import { ResumeV2 } from '@/components/resume/resume-v2'

export const Route = createFileRoute('/(cv)/_layout/v2')({
  component: ResumeV2Page,
  head: () => ({
    meta: [
      {
        title: 'Achmad Anshori - Software Engineer.',
      },
      {
        name: 'description',
        content: "Achmad Anshori's minimal resume page (v2). Ctrl+P to print.",
      },
    ],
  }),
})

function ResumeV2Page() {
  return <ResumeV2 />
}
