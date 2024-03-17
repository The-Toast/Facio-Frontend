'use client'

import styled from '@emotion/styled'

export default function Video() {
  return (
    <Wrapper
      autoPlay
      loop
      muted
    >
      <source src='/Video/Facio.mp4' type='video/mp4'/>
    </Wrapper>
  )
}

const Wrapper = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`