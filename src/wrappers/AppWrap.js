import React from 'react'
import {NavigationDots,SocialMedia} from '../components'

const AppWrap = (Component,idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component/>
        <div className='copyright'>
          <p className='p-text'>Numer Telefonu: 504 807 800</p>
          <p className='p-text'>E-mail: rezerwacje@kajakowawarka.pl</p>
          <p className='p-text'>Adres: Nowy Zjazd 4a, 05-660 Warka</p>
        </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap