'use client'

import React from 'react'

import styled from '@emotion/styled'

import PromotionVideo from '@components/PromotionVideo'

export default function AuthLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <>
      <Wrapper>
        <Container>
          {children}
        </Container>
      </Wrapper>
      <PromotionVideo />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  position: absolute;
  height: 100vh;
  padding: 0 3.75rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background: ${({theme}) => theme.color.background};
  backdrop-filter: blur(20px);
  @media ${({theme}) => theme.breakPoint['1024']} {
    width: 100vw
  }
`