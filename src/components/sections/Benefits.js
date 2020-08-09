import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'


import Shape from '@svg/bg-section3.svg'
import Graphic from '@svg/graphic-section3.svg'


const Benefits = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        benefits {
          name
          title
          content {
            lists {
              title
              items
            }
          }
        }
      }
    }`
  )

  let benefits = data.contentJson.benefits

  return (
    <Section id="benefits">
      <div css={benefitsWrapper}>
        <div css={benefitsContent}>
          <h2>{benefits.name}</h2>
          <h3>{benefits.title}</h3>
          <p>{benefits.content.main}</p>
          <div css={benefitsList}>
            { benefits.content.lists.map( (list, i) =>
              <div key={i}>
                <ListTitle>{list.title}</ListTitle>
                <ul>
                  { list.items.map( (item, i) =>
                    <li key={i}>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="woman">
          <Graphic />
        </div>
      </div>

      <div id="benefits-bg">
        <Shape />
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 1em 0;
  padding: 2em 1em;
  position: relative;

  @media (min-width:640px) {
    margin: 1em 0 8em;
  }

  @media (min-width:1056px) {
    margin: 0;
    padding: 7em 1em;
  }

  & .woman {
    @media (min-width:1056px) {
      order: 1;
      margin-left: -4%;
      padding-top: 8em;
      width: 41%;
    }
    & svg {
      height: 100%;
      width: 100%;
    }
  }

  & #benefits-bg {
    left: 0;
    position: absolute;
    top: 68.5%;
    width: 90%;
    z-index: -1;

    @media (min-width:640px) {
      top: 56%;
    }

    @media (min-width:1056px) {
      left: 0;
      top: 40%;
      transform: translateY(-50%);
      width: 41%;
    }
  }

`

const benefitsWrapper = css`
  margin: 0 auto;
  max-width: 1222px;
  width: 100%;

  @media (min-width:1056px) {
    display: flex;
    justify-content: space-between;
  }
`

const benefitsContent = css`
  @media (min-width:1056px) {
    width: 56.8%;
    order: 2;
  }
`

const benefitsList = css`
  & ul {
    margin-bottom: 4em;
    max-width: 400px;
    padding: 0 0 0 1em;

    & li {
      color: #858B9B;
      margin-bottom: 0.5em;
    }
  }
`

const ListTitle = styled.p`
  color: #333741;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 0.5em;
`

export default Benefits
