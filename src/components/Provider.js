import React, { createContext, useState, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

export const MenuContext = createContext();
MenuContext.displayName = 'MenuContext';

const Provider = props => {
  const winWidth = useWindowWidth()
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isMobile, setIsMobile ] = useState(null)

  useEffect(() => {
    if (winWidth >= 1056) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }

    if ( isVisible === true ) {
      if (winWidth >= 1056) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
  }, [winWidth, isVisible])


  return (
    <MenuContext.Provider value={{
      winWidth,
      isVisible,
      isMobile,
      setActiveMenu: (el) => setIsVisible(el)
    }}>
      { props.children }
    </MenuContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);