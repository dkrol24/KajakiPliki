import React, {  useState} from 'react';
import emailjs from '@emailjs/browser';
import './Styles.scss';

import {motion} from 'framer-motion'
import {AppWrap,MotionWrap} from '../../wrappers'
import {BiInfoCircle} from 'react-icons/bi';

const Contact = () => {


  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
     message: '',
   });
   const [status, setStatus] = useState(false)
   const [loading, setLoading] = useState(false);
   
 
 const handleChange = (e) => {
   setValues(values => ({
     ...values,
     [e.target.name]: e.target.value
   }))
 };
 const handleSubmit = (e) => {
   e.preventDefault();
   emailjs.send('service_vp66n7q', 'template_awe19s9', values, 'smQiWYotfaIg-1_RE')
   .then(response => {
     console.log('Wiadomość wysłana!', response)
     setValues({
       fullName: '',
      email: '',
      phone: '',
       message: '',
     });
     setStatus(true);
     setLoading(true);
   },error=>{
     console.log('Podaj dane i zaakceptuj regulamin.', error)
   })
 };



  return (
    <div className='app__contact'>
      <motion.div whileInView={{ x: [-300,0], opacity: [0, 1]}}
            transition={{ duration: 1}} className="app__contact-info">
            <div >
            <BiInfoCircle/>

            <h1 className='p-text'>Dowiedz się więcej na temat spływów i naszej firmy kontaktując się z nami poprzez formularz lub telefonicznie. 
            Rezerwacje indywidualne lub grupowe przyjmujemy codziennie w godzinach 8:00 - 20:00, pod numerem telefonu 504-807-800 lub mailowo</h1>

            </div>
          </motion.div>
       {!status ? (
         <form  onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Imię i nazwisko" name="fullName" value={values.fullName} onChange={handleChange} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Adres e-mail" name="email" value={values.email} onChange={handleChange} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="phone" placeholder="Numer telefonu" name="phone" value={values.phone} onChange={handleChange} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Napisz do Nas"
              value={values.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="p-text">Wyślij</button>
        </form>
      ) : (
        <div>
          <h3 className="big-text">
            Dziękujemy za wysłanie wiadomości! Odpowiemy jak najszybciej się da!
          </h3>
        </div>
      )}
    </div>
  )
}
export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'kontakt',
  'app__whitebg',
);