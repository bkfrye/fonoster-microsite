import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { MenuContext } from './Provider'
import MainMenu from './mainMenu'
import Button from './button'
import Logo from '@svg/logo-white.svg'
import CloseIcon from '@svg/close.svg'
import MenuIcon from '@svg/icon-menu.svg'

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
    <MenuContext.Consumer>
      { context =>
        <SiteHeader>
          <div className="wrapper">
            {context.isMobile}
            <div css={logoWrapper}>
              <Logo />
            </div>
            { (context.isMobile) &&
              <button
                css={menuButton}
                onClick={ e => context.setActiveMenu(true) }
              >
                <MenuIcon />
              </button>
            }
            <div
              css={menuWrapper}
              className={ context.isVisible ? `isVisible` : `` }
            >
              <button
                css={closeIcon}
                onClick={ e => context.setActiveMenu(false) }
              >
                <CloseIcon />
              </button>
              <div className="menu">
                <MainMenu
                  menu={data.contentJson.mainMenu}
                  isActive={context.isVisible}
                />
              </div>
              <div css={buttonWrapper}>
                <Button />
              </div>
            </div>
          </div>
        </SiteHeader>
      }
    </MenuContext.Consumer>
  )
}

const SiteHeader = styled.header`
  background-color: #4746D4;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  & .wrapper {
    align-items: center;
    height: 70px;
    display: flex;
  }
`

const logoWrapper = css`
  display: inline-block;
  margin-right: 5em;
  position: relative;
  z-index: 1000;

  & svg {
    height: auto;
    width: 111px;

    & path {
      fill: #fff;
    }
  }
`

const menuWrapper = css`
  background-color: #4746D4;
  left: 0;
  padding-top: 4em;
  text-align: center;
  top: 0;
  right: 0;
  width: 100%;
  display: none;

  &.isVisible {
    bottom: 0;
    display: block;
    position: fixed;
    z-index: 500;

    & .menu {
      display: block;
    }
  }

  @media (min-width:1056px) {
    align-items: center;
    display: flex;
    padding: 0;
    position: relative;
    text-align: left;
    width: 100%;
  }

  & .menu {
    flex: 2;
    width: 100%;
    display none;

    @media (min-width:1056px) {
      display: inline-block;
    }
  }
`

const menuButton = css`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 41px;
  position: fixed;
  right: 1em;
  top: 1em;
  width: 41px;
  z-index: 500;

  & > * {
    margin: auto;
  }

  & svg {
    height: auto;
    width: 18px;
  }
`

const closeIcon = css`
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 1em;
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1000;

  @media (min-width:1056px) {
    display: none;
  }

  & svg {
    height: 12px;
    width: 12px;
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
