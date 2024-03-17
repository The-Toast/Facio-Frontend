import styled from '@emotion/styled'

export const VideoWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 0;
`

export const VideoCover = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;
  background: rgb(0, 0, 0, 0.6);
`