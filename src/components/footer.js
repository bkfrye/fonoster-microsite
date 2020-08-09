import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        footerMenu {
          list {
            name
            items {
              name
              url
              type
            }
          }
        }
      }
    }`
  )

  let footer = data.contentJson.footerMenu
  console.log(footer)
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-menu">
          <h4>{footer.list.name}</h4>
          <ul>
            {footer.list.items.map( (item, idx) => {
              if ( item.type === 'external' ) {
                return <li><a href={item.url} target="_blank">{item.name}</a></li>
              } else {
                return <li><a href={item.url}>{item.name}</a></li>
              }
            })}
          </ul>
        </div>
      </div>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
