import React from 'react'
import { css } from '@emotion/core'

const MainMenu = ({ menu }) => {
  return (
    <ul css={list}>
      { menu.map( (item, i) =>
        <li key={i} css={listItem}>
          { (item.type === `external`) ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ) : (
            <a href={item.url}>
              {item.name}
            </a>
          )}
        </li>
      ) }
    </ul>
  )
}

const list = css`
  text-align: center;
  padding: 0;
  width: 100%;

  @media (min-width:1056px) {
    display: flex;
  }
`

const listItem = css`
  list-style-type: none;

  @media (min-width:1056px) {
    margin-right: 2em;
  }

  & a {
    color: #fff;
    display: block;
    font-weight: 900;
    padding: 1em 0;
    text-decoration: none;
    transition: color 220ms ease-in-out;

    &:hover {
      color: #918FE6;
    }

    @media (min-width:1056px) {
      display: inline-block;
      padding: 0;
    }
  }

`

export default MainMenu
