'use client'

import * as S from './style'

import Video from './Video'

export default function PromotionVideo() {
  return (
    <S.VideoWrapper>
      <Video />
      <S.VideoCover />
    </S.VideoWrapper>
  )
}