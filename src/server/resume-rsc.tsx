import { createServerFn } from '@tanstack/react-start'
import { renderServerComponent } from '@tanstack/react-start/rsc'

import { ResumeV1 } from '@/components/resume/resume-v1'
import { ResumeV2 } from '@/components/resume/resume-v2'

export const getResumeV1 = createServerFn().handler(async () => {
  return renderServerComponent(<ResumeV1 />)
})

export const getResumeV2 = createServerFn().handler(async () => {
  return renderServerComponent(<ResumeV2 />)
})
