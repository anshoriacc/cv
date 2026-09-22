import React from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => {
    return {
      meta: [
        { charSet: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Achmad Anshori' },
        {
          title: "Achmad Anshori's Resume",
        },
        {
          name: 'description',
          content:
            "Achmad Anshori's minimal resume page. Built with TanStack Start. Ctrl+P to print.",
        },
        {
          name: 'keywords',
          content:
            'Achmad Anshori, anshori, Software Engineer, Web Developer, React, TypeScript, Jakarta, Indonesia',
        },
      ],
      links: [
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', href: '/white192.png' },
        {
          rel: 'stylesheet',
          href: appCss,
        },
      ],
      scripts: [
        {
          src: 'https://oa-c.anshori.com/oa.js',
          'data-key': 'oa_pk_LYgrMKQiSqCrS5QCz0RWMWS5h96DJ_u5',
          'data-collector': 'https://oa-c.anshori.com',
          async: true,
        },
      ],
    }
  },
  shellComponent: RootDocument,
  notFoundComponent: () => <p>Not Found</p>,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="text-foreground mx-auto flex min-h-screen max-w-2xl p-3 md:p-6">
        {children}

        <Scripts />
      </body>
    </html>
  )
}
