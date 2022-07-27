import React from 'react'
import './Styles.scss'

import {motion} from 'framer-motion'
import AppWrap from '../../wrappers/AppWrap'

const Guide = () => {
  return (
    <div className='app__guide'>
      <div className='app__guide-wrapper'>
      <motion.div whileInView={{ y: [-200,0], opacity: [0, 1]}}
    transition={{ duration: 0.7}} className='app__guide-info1'>
      <h1 className='big-text' style={{width:'100%'}}>Co zabrać na spływ?</h1>
      <div>
        
      <ul>
          <li className='bold-text'>1. Krem z filtrem UV i preparat przeciw ukąszeniom owadów.</li>
          <li className='bold-text'>2. Czapka z daszkiem, chusta, kapelusz - okrycie głowy, które ochroni przed słońcem.</li>
          <li className='bold-text'>3. Okulary z filtrem UV.</li>
          <li className='bold-text'>4. Telefon komórkowy w sprawdzonym wodoszczelnym opakowaniu.</li>
          <li className='bold-text'>5. Worki nieprzemakalne, które ochronią bagaż przed zalaniem. Polecamy grube worki na śmieci.</li>
          <li className='bold-text'>6. Ubranie - odpowiednie do warunków atmosferycznych.</li>
          <li className='bold-text'>7. Ręcznik, strój kąpielowy.</li>
          <li className='bold-text'>8. Pieniądze - wybierając się na spływ nie znajdziemy miejsca, w którym możemy dokonać płatności bezgotówkowej.</li>
          <li className='bold-text'>9. Worki na śmieci. Po spływie można zostawić je przy plaży w miejscu do tego wyznaczonym.</li>
          <li className='bold-text'>10. Woda, napoje, przekąski, grill jednorazowy i kiełbaski - wspaniały pomysł podczas odpoczynku na plaży.</li>
        </ul>
      </div>
      </motion.div>
      <motion.div whileInView={{ y: [200,0], opacity: [0, 1]}}
    transition={{ duration: 0.7}} className='app__guide-info2'> 
      <h1 className='big-text'>Abc kajakarza</h1>
      <div>

        <ul>
        <li className='bold-text'>1. Zawsze zakładaj kamizelkę asekuracyjną i dopilnuj, aby reszta Twojej grupy również była w nią ubrana i zapięta.</li>
        <li className='bold-text'>2. Rzeczy włożone w kajak zabezpiecz przed zmoczeniem i zgubieniem.</li>
        <li className='bold-text'>3. W przypadku wywrotki pamiętaj, aby najpierw ratować człowieka. Rzeczami zajmiecie się później. Nigdy nie spuszczaj dzieci z oczu!</li>
        <li className='bold-text'>4. Zwracaj uwagę na innych uczestników - w razie potrzeby pomóż im.</li>
        <li className='bold-text'>5. Po wywrotce na głębokiej wodzie holuj kajak do brzegu nie odwracając go.</li>
        <li className='bold-text'>6. Podczas spływu kontroluj powierzchnię wody przed dziobem kajaka. Zwracaj uwagę na wszelkie fale i wiry,
           które sygnalizują o różnych podwodnych przeszkodach - musisz je ominać!</li>
           <li className='bold-text'>7. Nigdy nie wchodź do wody i nie wsiadaj do kajaka po spożyciu alkoholu. Pamiętaj o swoim bezpieczeństwie!</li>
           <li className='bold-text'>8. Nie śmieć. Spakuj wszystkie śmieci w foliowy worek i zabierz ze sobą. Po zakończeniu spływu zostaw w miejscu do tego przeznaczonym.</li>
        </ul>
      </div>
      </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Guide,'poradnik')