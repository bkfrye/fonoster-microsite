import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Button from '../button'
import Link from '../link'


const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        ctaBanner {
          headline
          subheadline
          cta {
            text
            url
            type
          }
        }
      }
    }`
  )

  let banner = data.contentJson.ctaBanner

  return (
    <Section>
      <h3>{banner.headline}</h3>
      <p>{banner.subheadline}</p>

      <div css={ctaWrapper}>
        <Button
          link="//www.google.com"
          text="Get early access"
        />
        <Link
          details={banner.cta[1]}
          color='white'
          download='true'
        />
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: #4746D4;
  margin: 1em 0 0;
  padding: 4em 1em;
  position: relative;

  @media (min-width: 1056px) {
    text-align: center;
  }

  & h3,
  & p {
    color: #ffffff;
  }

  & p {
    font-size: 24px;
    line-height: 35px;
  }
`

const ctaWrapper = css`
  @media (min-width: 1056px) {
    align-items: center;
    display: inline-flex;
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

export default Banner
