import React from 'react'
import { css } from '@emotion/core'
import Arrow from '@svg/arrow.svg'

const DownloadLink = ({ details, color, hoverColor }) => {
  const downloadLink = css`
    display: inline-block;
    max-height: 40px;
    & a {
      color: ${color};
      border-bottom: 1px solid ${color};
      font-family: 'Circular Std';
      font-size: 14px;
      line-height: 18px;
      text-decoration: none;
      transition: all 220ms ease-in-out;

      &:hover {
        border-bottom: 0;
        color: ${hoverColor};

        & polygon {
          fill: ${hoverColor};
        }
      }

      & span {
        margin-left: 1em;
      }
    }

    & svg {
      height: auto;
      transition: all 520ms ease-in-out;
      width: 12px;
    }

    & polygon {
      fill: ${color}
    }
  `
  return (
    <div css={downloadLink}>
      <a href={details.url} target="_blank" rel="noreferrer">
        {details.text}
        <span><Arrow /></span>
      </a>
    </div>
  )
}




export default DownloadLink
