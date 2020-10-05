import React from 'react'
import { css } from '@emotion/core'
import { MenuContext } from './Provider'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const MainMenu = ({ menu, isActive }) => (
  <MenuContext.Consumer>
    { context =>
      <ul css={list}>
        { menu.map( (item, i) =>
          <li
            key={i}
            className="list-item"
            onClick={ e =>
              context.setActiveMenu(false)
            }
          >
            { (item.type === `external`) ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"

              >{item.name}</a>
            ) : (
              <AnchorLink
                to={item.url}
                stripHash
              >{item.name}</AnchorLink>
            )}
          </li>
        ) }
      </ul>
    }
  </MenuContext.Consumer>
)

const list = css`
  text-align: center;
  padding: 0;
  width: 100%;

  @media (min-width:1056px) {
    display: flex;
  }

  .list-item {

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
  }
`

export default MainMenu
