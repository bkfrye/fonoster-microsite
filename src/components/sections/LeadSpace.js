import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Button from '../button'
import DownloadLink from '../downloadLink'

import Background from '@svg/bg-section1.svg'
import Graphic from '@svg/graphic-section1.svg'


const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        leadspace {
          title
          content
          cta {
            text
            url
            type
          }
        }
      }
    }`
  )

  let leadspace = data.contentJson.leadspace

  return (
    <Section>
      <Background css={css`
          display: none;
          @media (min-width: 1056px) {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: auto;
            width: 100%;
            z-index: -1;
          }
        `}
      />
      <div className="wrapper">
        <h1>{leadspace.title}</h1>
        <p>{leadspace.content}</p>
        <div css={ctaWrapper}>
          <Button />
          <DownloadLink
            details={leadspace.cta}
            color='white'
          />
        </div>
        <div css={graphicWrapper}>
          <Graphic />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: #4746D4;
  color: #ffffff;
  padding-top: 6em;
  position: relative;

  @media (min-width: 1056px) {
    background-color: transparent;
    padding-bottom: 30%;
    padding-top: 8em;
  }

  & h1 {
    font-size: 30px;
    line-height: 35px;
    @media (min-width: 1056px) {
      font-size: 60px;
      line-height: 65px;
      width: 55.8%;
    }
  }

  & p {
    color: #ffffff;
    font-size: 20px;
    line-height: 25px;
    @media (min-width: 1056px) {
      font-size: 24px;
      line-height: 32px;
      width: 44.1%;
    }
  }
`

const ctaWrapper = css`
  margin-top: 3em;
  margin-bottom: 3em;

  @media (min-width: 1056px) {
    align-items: center;
    display: flex;
    margin-bottom: 0;
    margin-top: 0;
  }

  & div:first-of-type {
    display: block;
    text-align: center;

    @media (min-width: 1056px) {
      margin-right: 1.5em;
    }
  }

  & div:nth-of-type(2) {
    display: block;
    margin-top: 1em;
    text-align: center;

    @media (min-width: 1056px) {
      margin-top: 0;
      text-align: left;
    }
  }
`

const graphicWrapper = css`
  height: auto;
  position: relative;
  text-align: center;

  @media (min-width: 1056px) {
    position: absolute;
    right: 0;
    top: 5em;
    width: 58vw;
  }

  &:after {
    background-color: #fff;
    bottom: 0;
    content: '';
    left: -10%;
    height: 100px;
    position: absolute;
    right: -10%;
    width: 120%;
    z-index: 0;

    @media (min-width: 1056px) {
      position: relative;
    }
  }

  svg {
    position: relative;
    width: 80%;
    z-index: 1;
  }
`

export default Intro
