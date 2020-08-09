import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'


import Shape from '@svg/bg-section5.svg'
import Graphic from '@svg/graphic-section5.svg'


const GettingStarted = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        gettingStarted {
          name
          title
          content {
            main
            lists {
              intro
              content
            }
          }
        }
      }
    }`
  )

  let gettingStarted = data.contentJson.gettingStarted

  return (
    <Section id="getting-started">
      <div css={gettingStartedWrapper}>
        <div css={gettingStartedContent}>
          <h2>{gettingStarted.name}</h2>
          <h3>{gettingStarted.title}</h3>
          <p>{gettingStarted.content.main}</p>
          <ul css={gettingStartedList}>
            { gettingStarted.content.lists.map( (list, i) =>
              <li key={i}>
                <ListTitle>{list.intro}</ListTitle>
                <p>{list.content}</p>
              </li>
            )}
          </ul>
        </div>

        <div className="man">
          <Graphic />
        </div>
      </div>

      <div id="gettingStarted-bg">
        <Shape />
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 1em 0;
  padding: 2em 1em;
  position: relative;

  @media (min-width:1056px) {
    margin: 0;
    padding: 7em 1em;
  }

  & .man {
    margin-left: -20%;
    width: 90%;

    @media (min-width:1056px) {
      margin-left: -12%;
      width: 52%;
    }

    @media (min-width: 1280px) {
      margin-left: -18%;
    }

    & svg {
      height: 100%;
      width: 100%;
    }
  }

  & #gettingStarted-bg {
    left: 0;
    position: absolute;
    top: 60%;
    width: 90%;
    z-index: -1;

    @media (min-width:640px) {
      top: 44%;
    }

    @media (min-width:1056px) {
      top: 20%;
      width: 35%;
    }
  }

`

const gettingStartedWrapper = css`
  margin: 0 auto;
  max-width: 1222px;
  width: 100%;

  @media (min-width:1056px) {
    display: flex;
    justify-content: space-between;
  }
`

const gettingStartedContent = css`
  @media (min-width:1056px) {
    width: 56.8%;
    order: 2;
  }
`

const gettingStartedList = css`
  margin: 2em auto 4em;
  padding: 0;
  width: 100%;

  @media (min-width: 840px) {
    max-width: 540px;
  }

  @media (min-width: 1056px) {
    margin: 2em 0 4em;
  }

  & li {
    color: #858B9B;
    list-style-type: none;
    margin-bottom: 0.5em;
  }
`

const ListTitle = styled.p`
  color: #333741;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 0.5em;
`

export default GettingStarted
