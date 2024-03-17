import styled from '@emotion/styled'

export const Content = styled.button`
  display: flex;
  width: 300px;
  height: 56px;
  gap: 10px;
  border: 1px solid ${({theme}) => theme.color.gray['400']};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.color.white};
`

export const Text = styled.p`
  font-size: 15px;
`