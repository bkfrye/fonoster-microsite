import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
// import Button from '../button'
import DownloadLink from '../downloadLink'

import Shape from '../../images/svg/bg-section2.svg'
import Phone from '../../images/svg/graphic-section2.svg'


const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        about {
          name
          title
          content {
            main
            list {
              title
              items
            }
          }
          cta {
            text
            url
          }
        }
      }
    }`
  )

  let about = data.contentJson.about

  return (
    <Section>
      <div css={aboutWrapper}>
        <div css={aboutContent}>
          <h2>{about.name}</h2>
          <h3>{about.title}</h3>
          <p>{about.content.main}</p>
        </div>
        <div css={phone}>
          <Phone />
        </div>
        <div css={aboutList}>
          <ListTitle>{about.content.list.title}</ListTitle>
          <ul>
            { about.content.list.items.map( (item) =>
              <li>{item}</li>
            )}
          </ul>

          <DownloadLink
            color="#46B96D"
            details={about.cta}
          />
        </div>
      </div>
      <Shape />
    </Section>
  )
}

const Section = styled.section`
  margin-top: 8em;
  padding: 3em 0;
  position: relative;
  & #about-bg {
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 65vw;
    z-index: -1;
  }
`

const aboutWrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1222px;
  width: 100%;
`

const aboutContent = css`
  @media (min-width:1056px) {
    width: 34%;
  }

  @media (min-width:1254px) {
    width: 31%;
  }

`

const phone = css`
  max-width: 280px;
  width: 100%;
`

const aboutList = css`
  @media (min-width:1056px) {
    width: 34%;
  }

  li {
    color: #858B9B;
    font-size: 16px;
    line-height: 22px;
    list-style-type: none;
    padding-bottom: 1em;

  }
`


const ListTitle = styled.p`
  color: #333741;
  font-size: 24px;
  line-height: 32px;
`

export default About
