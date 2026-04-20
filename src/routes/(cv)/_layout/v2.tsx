import { createFileRoute } from '@tanstack/react-router'

import { getResumeV2 } from '@/server/resume-rsc'

export const Route = createFileRoute('/(cv)/_layout/v2')({
  loader: async () => ({
    Resume: await getResumeV2(),
  }),
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
  const { Resume } = Route.useLoaderData()
  return <>{Resume}</>
}
