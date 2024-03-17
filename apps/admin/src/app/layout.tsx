import React from 'react'

import {GlobalStyle} from 'common'

import Providers from './providers'

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: '파키오 Admin',
  description: '세상 모든 것을 내 손으로.',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <html lang='ko'>
      <body>
        <Providers>
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  )
}