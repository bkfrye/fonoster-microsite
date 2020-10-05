import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { MenuContext } from './Provider'
import useDocumentScrollThrottled from './useDocumentScrollThrottle'
import MainMenu from './mainMenu'
import Button from './button'
import WhiteLogo from '@svg/logo-white.svg'
import ColorLogo from '@svg/logo-color.svg'
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

  const [shouldChangeHeader, setShouldChangeHeader] = useState(false)


  const MINIMUM_SCROLL = 400
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setShouldChangeHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  });

  const scrolledStyle = shouldChangeHeader ? `white` : ``
  // const isMenuVisible = (context && context.isVisible) ? `isVisible` : ``

  return (
    <MenuContext.Consumer>
      { context =>
        <SiteHeader className={ `${scrolledStyle}` }>
          <div className="wrapper">
            <div css={logoWrapper}>
              { shouldChangeHeader ? <ColorLogo /> : <WhiteLogo /> }
            </div>
            { (context && context.isMobile) &&
              <button
                css={menuButton}
                onClick={ e => context.setActiveMenu(true) }
              >
                <MenuIcon />
              </button>
            }
            <div
              css={menuWrapper}
              className={ `${context.isVisible ? `isVisible` : ``} ${scrolledStyle}` }
            >
              <button
                css={closeIcon}
                onClick={ e => context.setActiveMenu(false) }
              >
                <CloseIcon />
              </button>
              <div className={ `menu ${scrolledStyle}` }>
                <MainMenu
                  menu={data.contentJson.mainMenu}
                  isActive={(context && context.isVisible)}
                />
              </div>
              <div css={buttonWrapper}>
                <Button
                  link="//www.google.com"
                  text="Get early access"
                />
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
  transition: all 220ms ease-in-out;
  z-index: 1000;

  &.white {
    background-color: #ffffff;
  }

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
  transition: all 220ms ease-in-out;
  z-index: 1000;

  &.white {
    & svg path {
      fill: #4746D4;
    }
  }

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
  display: none;
  left: 0;
  padding-top: 4em;
  text-align: center;
  top: 0;
  transition: all 220ms ease-in-out;
  right: 0;
  width: 100%;
  
  &.white {
    background-color: #ffffff;
  }

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

    &.white {
      & .list-item a {
        color: #333741;

        &:hover {
          color: #666E82;
        }
      }
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
