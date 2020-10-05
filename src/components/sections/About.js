import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useWindowWidth } from '@react-hook/window-size'
import Link from '../link'

import Shape from '@svg/bg-section2.svg'
import Phone from '@svg/graphic-section2.svg'
import CheckmarkIcon from '@svg/icon-checkmark.svg'


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
    <Section id="about">
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
            { about.content.list.items.map( (item, i) =>
              <li key={i}>
                <span>
                  <CheckmarkIcon />
                </span>
                {item}
              </li>
            )}
          </ul>
          <Link
            color="#46B96D"
            hoverColor="#26B060"
            details={about.cta}
          />
        </div>
      </div>

      { (useWindowWidth() >= 1056) &&
        (
          <div id="about-bg">
            <Shape />
          </div>
        )
      }
    </Section>
  )
}

const Section = styled.section`
  background-color: #F3F3F5;
  margin: 1em 0;
  overflow: hidden;
  padding: 2em 1em;
  position: relative;

  @media (min-width:1056px) {
    background-color: transparent;
    margin: 0;
    padding: 7em 1em;
  }

  & #about-bg {
    left: 35vw;
    max-width: 1000px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 80vw;
    z-index: -1;

    & svg {
      height: auto;
      width: 100%;
    }
  }
`

const aboutWrapper = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1222px;
  width: 100%;

  @media (min-width:1056px) {
    justify-content: space-between;
  }
`

const aboutContent = css`
  flex-basis: 100%;
  @media (min-width:1056px) {
    flex-basis: 34%;
  }

  @media (min-width:1254px) {
    flex-basis: 31%;
  }

`

const phone = css`
  margin: 0 auto;
  max-width: 280px;
  width: 100%;

  @media (min-width:840px) {
    flex-basis: 40%;
    margin: 0 5% 0 0;
  }

  @media (min-width:1056px) {
    margin: -5% 0 0 0;
  }
`

const aboutList = css`
  margin: 0 auto;

  @media (min-width:840px) {
    flex-basis: 40%;
    margin: 0;
  }

  @media (min-width:1056px) {
    flex-basis: 34%;
  }

  ul {
    padding: 0;
  }

  li {
    color: #858B9B;
    font-size: 16px;
    line-height: 22px;
    list-style-type: none;
    padding-bottom: 1em;

    & span {
      margin-right: 12px;
    }

    & svg {
      height: auto;
      width: 12px;
    }
  }
`

const ListTitle = styled.p`
  color: #333741;
  font-size: 24px;
  line-height: 32px;
`

export default About
