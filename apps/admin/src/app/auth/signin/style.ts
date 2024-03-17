import styled from '@emotion/styled'
import Link from 'next/link'

export const Text  = styled.p`
  font-size: 14px;
`

export const Login = styled(Link)`
  color: ${({theme}) => theme.color.sub.blue};
  font-size: 14px;
`