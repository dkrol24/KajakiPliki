import React from 'react'
import './Styles.scss'

import {motion} from 'framer-motion'
import AppWrap from '../../wrappers/AppWrap'
import data from './data';
import {BiInfoCircle} from 'react-icons/bi';
const Paths = () => {
  return (
    <div className='app__paths'>
      <h1 className='head-text'>Nie czekaj i już teraz sprawdź naszą ofertę!</h1>
      <div className='app__paths-container'>
      {data.paths.map((prop,index)=>(
        <motion.div whileInView={{opacity: [0, 1]}}
        transition={{ duration: 0.7}} className='app__paths-offert' key={index}>
          <p className='big-text'>{prop.path}</p>
          <div>
          <p>{prop.description}</p>
        </div>
          <p className='p-text'><span style={{color:'black',fontWeight:'600'}}>Szacowany czas spływu:</span> {prop.time}</p>
          <p className='p-text'><span style={{color:'black',fontWeight:'600'}}>Długość trasy:</span> {prop.distance}</p>
          <p className='p-text'><span style={{color:'black',fontWeight:'600'}}>Cena za kajak 1/os:</span> {prop.price1}</p>
          <p className='p-text'><span style={{color:'black',fontWeight:'600'}}>Cena za kajak 2/os:</span> {prop.price2}</p>
          <p className='p-text'><span style={{color:'black',fontWeight:'600'}}>Proponowana godzina zbiórki:</span> {prop.hours}</p>
          </motion.div>
      ))}
       <motion.div  whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.7}} className="app__paths-container-info">
            <div >
          
            <p className='p-text'><BiInfoCircle/> Wszystkich uczestników uprzejmie prosimy o przybycie 15 min wcześniej w 
            celu dopełnienia wszelkich formalności związanych z wypożyczeniem sprzętu.</p>

            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Paths,'oferta')