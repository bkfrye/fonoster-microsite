import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Logo from '@svg/logo-white.svg'
import CloseIcon from '@svg/close.svg'

import MainMenu from './mainMenu'
import Button from './button'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        mainMenu {
          name
          url
          type
        }
      }
    }`
  )
  return (
    <SiteHeader>
      <div className="wrapper">
        <div css={logoWrapper}>
          <Logo />
        </div>
        <div css={menuWrapper}>
          <div css={closeIcon}>
            <CloseIcon />
          </div>
          <div css={menu}>
            <MainMenu menu={data.contentJson.mainMenu} />
          </div>
          <div css={buttonWrapper}>
            <Button />
          </div>
        </div>
      </div>
    </SiteHeader>
  )
}

const SiteHeader = styled.header`
  background-color: #4746D4;

  & .wrapper {
    align-items: center;
    height: 70px;
    display: flex;
  }
`

const logoWrapper = css`
  display: inline-block;
  margin-right: 5em;
  & svg {
    height: auto;
    width: 111px;

    & path {
      fill: #fff;
    }
  }
`

const menuWrapper = css`
  display: none;

  background-color: #4746D4;
  bottom: 0;
  left: 0;
  padding-top: 4em;
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
  width: 100%;

  @media (min-width:1056px) {
    align-items: center;
    display: flex;
    padding: 0;
    position: relative;
    text-align: left;
    width: 100%;
  }
`

const closeIcon = css`
  cursor: pointer;
  padding: 1em;
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 100;

  @media (min-width:1056px) {
    display: none;
  }

  & svg {
    height: 12px;
    width: 12px;
  }
`

const menu = css`
  flex: 2;
  width: 100%;

  @media (min-width:1056px) {
    display: inline-block;
  }
`

const buttonWrapper = css`
  margin-top: 2em;

  @media (min-width:1056px) {
    margin: 0;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
