/** @jsxImportSource @emotion/react */

'use client'

import * as S from './style'

import {css} from '@emotion/react'

import FacioAdmin from '@admin/assets/FacioAdmin'

import LoginBtn from '@components/LoginBtn'

export default function SignInPage() {
  return (
    <>
      <FacioAdmin />
      <LoginBtn />
      <div
        css={css`
          display: flex;
          margin-top: 10px;
          gap: 10px;
          flex-direction: row;
        `}
      >
        <S.Text>Facio 계정이 있으신가요?</S.Text>
        <S.Login href='/'>로그인 하기</S.Login>
      </div>
    </>
  )
}