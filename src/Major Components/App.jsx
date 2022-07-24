import React from 'react'
import Header from '../Minor Components/Header/Header'
import Tiedye from '../Minor Components/Landingpage Tie-dye/Tiedye'
import Navbar from '../Minor Components/Navbar/Navbar'
import images from '../Minor Components/Shirt Carousel/carousel'
import Shirtcarousel from '../Minor Components/Shirt Carousel/Shirtcarousel'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Tiedye/>
        <Shirtcarousel images={images}/>
    </>
  )
}

export default App