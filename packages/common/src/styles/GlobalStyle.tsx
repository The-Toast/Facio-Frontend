'use client'

import {Global, css} from '@emotion/react'

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://unpkg.com/pretendard@1.3.9/dist/web/static/pretendard.css");
        
        body,
        * {
          font-family: Pretendard;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        
        p {
          font-size: 14px;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        input {
          border: none;
          outline: none;
        }
        
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
      `}
    />
  )
}