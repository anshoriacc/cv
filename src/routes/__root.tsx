import React from 'react'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

import { useDeferredScript } from '@/hooks/use-deferred-script'
import appCss from '../styles.css?url'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => {
      return {
        meta: [
          { charSet: 'UTF-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'author', content: 'Achmad Anshori' },
          {
            title: 'Achmad Anshori - Software Engineer, Frontend.',
          },
          {
            name: 'description',
            content:
              "Achmad Anshori's minimal resume page. Built with TanStack Start. Ctrl+P to print.",
          },
          {
            name: 'keywords',
            content:
              'Achmad Anshori, Software Engineer, Web Developer, React, TypeScript, Jakarta, Indonesia',
          },
        ],
        links: [
          { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
          { rel: 'apple-touch-icon', href: '/white192.png' },
          { rel: 'preconnect', href: 'https://umami.anshori.com' },
          { rel: 'dns-prefetch', href: 'https://umami.anshori.com' },
          {
            rel: 'stylesheet',
            href: appCss,
          },
        ],
        scripts: [
          {
            type: 'application/ld+json',
            children: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Achmad Anshori',
              url: 'https://resume.anshori.com',
              jobTitle: 'Software Engineer',
              description: 'Software Engineer based in Jakarta, Indonesia.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'Indonesia',
              },
              sameAs: [
                'https://github.com/anshoriacc',
                'https://linkedin.com/in/achmad-anshori',
              ],
            }),
          },
        ],
      }
    },
    shellComponent: RootDocument,
  },
)

function RootDocument({ children }: { children: React.ReactNode }) {
  useDeferredScript({
    src: 'https://umami.anshori.com/script.js',
    defer: true,
    'data-website-id': 'db69b964-16b0-47b7-afea-c93be6e6a9cc',
  })

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="text-foreground mx-auto flex min-h-screen max-w-2xl p-4 font-sans md:p-8">
        {children}

        <Scripts />
      </body>
    </html>
  )
}
