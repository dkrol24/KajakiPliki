import React from 'react'
import WSPGallery from './WSPGallery';
import AppWrap from '../../wrappers/AppWrap';
import images from '../../constants/images';
import {motion} from 'framer-motion';
import './Styles.scss'
const Gallery = () => {
    const galleryImages = [
        {
          img: images.home1
        },
        {
            img: images.home2
        },
        {
            img: images.slider7
        },
        {
            img: images.home3
        },
        {
            img: images.kajakisprzet4
        },
        {
            img: images.kajakisprzet5
        },
        {
            img: images.kajakisprzet6
        },
        {
            img: images.kajakisprzet7
        },
        
        {
            img: images.ssssss
        },
      ]




  return (
    <motion.div whileInView={{ opacity: [0, 1]}}
    transition={{ duration: 1}}  className="app__gallery">
    <WSPGallery
      galleryImages={galleryImages}
    />
  </motion.div>
  )
}

export default AppWrap(Gallery,'galeria')