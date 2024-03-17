'use client'

import React from 'react'

import {ThemeProvider} from '@emotion/react'

import {theme} from 'common'

export default function Providers(
  {children}: {children: React.ReactNode}
) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}