'use client'

import * as S from './style'

import {Google} from '@admin/assets/svg'

export default function LoginBtn() {
  return (
    <S.Content>
      <Google />
      <S.Text>이메일로 로그인하기</S.Text>
    </S.Content>
  )
}