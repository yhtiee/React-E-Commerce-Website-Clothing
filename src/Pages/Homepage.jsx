import React from 'react'
import Header from '../Components/Header/Header'
import Tiedye from '../Components/Landingpage Tie-dye/Tiedye'
import images from '../Components/Shirt Carousel/carousel'
import Shirtcarousel from '../Components/Shirt Carousel/Shirtcarousel'
import tiedye_images from '../Components/Landingpage Tie-dye/tiedyeshirts'
import Totebag from '../Components/Landingpage Totebag/Totebag'
import combo from '../Components/Landingpage Totebag/popularcombos'
import Hoddies from '../Components/Landingpage Hoddies/Hoddies'
import hoodies__carousel from '../Components/Landingpage Hoddies/hoodiescarousel'
import Others from '../Components/Landingpage others/Others'
import Learn from '../Components/Landingpage Learn/Learn'
import Testimonials from '../Components/Testimonials/Testimonials'
// import { AuthProvider } from '../Context/AuthContext'


const HomePage = () => {
  return (
    <>
        
      <Header/>
      <Tiedye tiedye_images={tiedye_images}/>
      <Shirtcarousel images={images}/>
      <Totebag combo = {combo}/>
      <Hoddies hoodies__carousel={hoodies__carousel}/>
      <Others/>
      <Learn/>
      <Testimonials/>
        
       
    </>
  )
}

export default HomePage