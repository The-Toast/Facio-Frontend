'use client'

import styled from '@emotion/styled'

import {FacioLogo} from './svg'

export default function FacioAdmin() {
  return (
    <LogoContent>
      <FacioLogo />
      <LogoTitle>Admin</LogoTitle>
    </LogoContent>
  )
}

export const LogoContent = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`

export const LogoTitle = styled.p`
  color: ${({theme}) => theme.color.black};
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`