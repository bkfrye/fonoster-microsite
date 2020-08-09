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

  return (
    <footer>

    </footer>
  )
}

export default Footer
