import React from 'react'
import Header from '../Minor Components/Header/Header'
import Tiedye from '../Minor Components/Landingpage Tie-dye/Tiedye'
import Navbar from '../Minor Components/Navbar/Navbar'
import images from '../Minor Components/Shirt Carousel/carousel'
import Shirtcarousel from '../Minor Components/Shirt Carousel/Shirtcarousel'
import tiedye_images from '../Minor Components/Landingpage Tie-dye/tiedyeshirts'
import Totebag from '../Minor Components/Landingpage Totebag/Totebag'
import combo from '../Minor Components/Landingpage Totebag/popularcombos'
import Hoddies from '../Minor Components/Landingpage Hoddies/Hoddies'
import hoodies__carousel from '../Minor Components/Landingpage Hoddies/hoodiescarousel'
import Others from '../Minor Components/Landingpage others/Others'
import Learn from '../Minor Components/Landingpage Learn/Learn'
import Footer from '../Minor Components/Footer/Footer'
import Testimonials from '../Minor Components/Testimonials/Testimonials'


const App = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Header/>
        <Tiedye tiedye_images={tiedye_images}/>
        <Shirtcarousel images={images}/>
        <Totebag combo = {combo}/>
        <Hoddies hoodies__carousel={hoodies__carousel}/>
        <Others/>
        <Learn/>
        <Testimonials/>
        {/* <Footer/> */}
       
    </>
  )
}

export default App