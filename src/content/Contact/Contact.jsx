import React, {  useState} from 'react';
import emailjs from '@emailjs/browser';
import './Styles.scss';

import {motion} from 'framer-motion'
import {AppWrap,MotionWrap} from '../../wrappers'
import {BiInfoCircle} from 'react-icons/bi';

const Contact = () => {

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
     message: '',
     warning:'',
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
   emailjs.send('service_egcfkts', 'template_dpdogpm', values, 'l2XYLd6SKrB6rrvoZ')
   .then(response => {
     console.log('Wiadomość wysłana!', response)
     setValues({
       fullName: '',
      email: '',
      phone: '',
       message: '',
       warning:'',
     });
     setStatus(true);
     setLoading(true);
   },error=>{
     console.log('Podaj dane i zaakceptuj regulamin.', error)
   })
 };



  return (
    <div className='app__contact'>
      <div className="app__contact-info">
            <div >
            <h1 className='p-text'> <BiInfoCircle/> Dowiedz się więcej na temat spływów i naszej firmy kontaktując się z nami poprzez formularz lub telefonicznie. 
            Rezerwacje indywidualne lub grupowe przyjmujemy codziennie w godzinach 8:00 - 20:00, pod numerem telefonu 504-807-800 lub mailowo</h1>
            </div>
          </div>
       {!status ? (
         <form  onSubmit={handleSubmit} className="app__contact-form">
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
          <div className="app__contact-checkbox">
                <input
                    name="warning" type="checkbox"
                  style={{width:'15px',height:'15px',marginRight:'0.4rem'}}
                  required
                  value={values.warning}
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                />
              <p className='p-text' style={{fontSize:'10px'}}  handleChange={handleChange} >
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy.
               Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania.
                Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania.
                 Administratorem danych osobowych jest Event4Active, ul. Obwodowa 6C, 05-660 Warka.
              </p>
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