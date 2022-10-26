import React from 'react'
import { ReactComponent as LogoSvg } from '../../logo.svg';

export const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <LogoSvg className='Logo' />
    </nav>
  )
}