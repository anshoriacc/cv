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
          { rel: 'preconnect', href: 'https://analytics.anshori.com' },
          { rel: 'dns-prefetch', href: 'https://analytics.anshori.com' },
          {
            rel: 'stylesheet',
            href: appCss,
          },
        ],
        scripts: [
          {
            async: true,
            src: 'https://oa-c.anshori.com/oa.js',
            'data-key': 'oa_pk_GIDCd93qMSgzPe60W2TlvYfG0zU2qO_H',
            'data-collector': 'https://oa-c.anshori.com',
          },
          {
            children: `
              window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}} ,has:function(t,r){return"q"===r}}) }();
              window.op('init', {
                apiUrl: 'https://analytics.anshori.com/api',
                clientId: '8f169b98-0364-412b-806f-5c1c56d22709',
                trackScreenViews: true,
                trackOutgoingLinks: true,
                trackAttributes: true,
              });
            `,
          },
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
    src: 'https://openpanel.dev/op1.js',
    defer: true,
    async: true,
  })
  useDeferredScript({
    src: 'https://oa-c.anshori.com/oa.js',
    defer: true,
    async: true,
  })

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="text-foreground mx-auto flex min-h-screen max-w-2xl p-4 md:p-8">
        {children}

        <Scripts />
      </body>
    </html>
  )
}
