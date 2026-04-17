import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(cv)/_layout')({
  component: CvLayout,
})

function CvLayout() {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  )
}
