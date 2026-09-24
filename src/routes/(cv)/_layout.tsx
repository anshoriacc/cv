import { Outlet, createFileRoute } from '@tanstack/react-router'
import { IconPrinter } from '@tabler/icons-react'

export const Route = createFileRoute('/(cv)/_layout')({
  component: CvLayout,
})

function CvLayout() {
  return (
    <>
      <div className="w-full pb-20 print:pb-0">
        <Outlet />
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4 print:hidden">
        <button
          type="button"
          aria-label="Print resume"
          data-umami-event="print-resume"
          onClick={() => window.print()}
          className="pointer-events-auto flex h-10 cursor-pointer touch-manipulation items-center gap-2 rounded-xl bg-neutral-950 py-2 pr-4 pl-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_1px_2px_-1px_oklch(0_0_0/0.16),0_8px_24px_-8px_oklch(0_0_0/0.35)] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] select-none hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.12),0_2px_4px_-1px_oklch(0_0_0/0.18),0_12px_28px_-8px_oklch(0_0_0/0.4)] focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.96] motion-reduce:transform-none motion-reduce:transition-none"
        >
          <IconPrinter aria-hidden="true" className="size-4" />
          <span>Print</span>
        </button>
      </div>
    </>
  )
}
