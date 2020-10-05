import React from 'react'
import { css } from '@emotion/core'

const Button = ( {link, text} ) => (
  <div css={button}>
    <a href={link}>{text}</a>
  </div>
)


const button = css`
  display: inline-block;
  max-height: 40px;
  & a {
    background-color: #FDBF55;
    border: 1px solid #FDBF55;
    border-radius: 20px;
    color: #333741;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    padding: 10px 22px;
    text-decoration: none;
    transition: all 220ms ease-in-out;
    width: 100%;

    &:hover {
      background-color: #FDAF2A;
      border: 1px solid #FDAF2A;
    }
  }
`

export default Button
