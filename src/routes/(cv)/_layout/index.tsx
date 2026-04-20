import { createFileRoute } from '@tanstack/react-router'

import { getResumeV1 } from '@/server/resume-rsc'

export const Route = createFileRoute('/(cv)/_layout/')({
  loader: async () => ({
    Resume: await getResumeV1(),
  }),
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
  const { Resume } = Route.useLoaderData()

  return <>{Resume}</>
}
