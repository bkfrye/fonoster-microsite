import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Link from '../link'
import Graphic from '@svg/graphic-section4.svg'
import Sprite from '@svg/sprite-marketplace.svg'


const Marketplace = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        marketplace {
          name
          title
          content {
            main
            lists {
              title
              content
              icon
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

  let marketplace = data.contentJson.marketplace

  return (
    <Section id="marketplace">
      <Sprite />
      <div css={marketplaceWrapper}>
        <div css={marketplaceContent}>
          <h2>{marketplace.name}</h2>
          <h3>{marketplace.title}</h3>
          <p>{marketplace.content.main}</p>
            <div className="browser">
              <Graphic />
            </div>
          <ul css={marketplaceList}>
            { marketplace.content.lists.map( (list, i) =>
              <li key={i}>
                <div className="list-icon">
                  <svg>
                    <use href={list.icon} />
                  </svg>
                </div>
                <div>
                  <ListTitle>{list.title}</ListTitle>
                  <p>{list.content}</p>
                </div>
              </li>
            )}
          </ul>
          <Link
            color="#46B96D"
            hoverColor="#26B060"
            details={marketplace.cta}
          />
        </div>
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
    padding: 1em 1em;
  }

  & .browser {
    position: relative;
    right: -4em;
    top: 0;


    @media (min-width:1056px) {
      max-width: 1000px;
      position: absolute;
      right: -2em;
      width: 40%;
    }

    & svg {
      height: 100%;
      width: 100%;
    }
  }
`

const marketplaceWrapper = css`
  margin: 0 auto;
  max-width: 1222px;
  width: 100%;

  @media (min-width:1056px) {
    display: flex;
    justify-content: space-between;
  }
`

const marketplaceContent = css`
  @media (min-width: 1056px) {
    width: 55.8%;
  }

  h3 {
    max-width: 301px;
  }

  p {
    max-width: 452px;
  }
`

const marketplaceList = css`
  margin: 4em 0;
  max-width: 683px;
  padding: 0;
  width: 100%;

  & li {
    color: #858B9B;
    display: flex;
    list-style-type: none;
    margin-bottom: 2em;
  }

  & .list-icon {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    height: 109px;
    margin-right: 5%;
    width: 109px;

    & svg {
      height: 109px;
      width: 109px;
    }
  }
`

const ListTitle = styled.p`
  color: #333741;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 0.5em;
`

export default Marketplace
