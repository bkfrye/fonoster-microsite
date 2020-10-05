import React from 'react'
import { css } from '@emotion/core'
import Arrow from '@svg/arrow.svg'

const Link = ({ details, color, hoverColor, download }) => {
  const LinkStyle = css`
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
    <div css={LinkStyle}>
      { (download === 'true') ? (
        <a href={details.url} download>
          {details.text}
          <span><Arrow /></span>
        </a>
      ) : (
        <a href={details.url}>
          {details.text}
          <span><Arrow /></span>
        </a>
      ) }

    </div>
  )
}




export default Link
