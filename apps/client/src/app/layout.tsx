import React from 'react'

import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: '파키오 Facio',
  description: '세상 모든 것을 내 손으로.'
}

export default function RootLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <html lang='ko'>
      <body>
        {children}
      </body>
    </html>
  )
}