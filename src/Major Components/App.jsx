import React from 'react'
import Header from '../Minor Components/Header/Header'
import Tiedye from '../Minor Components/Landingpage Tie-dye/Tiedye'
import Navbar from '../Minor Components/Navbar/Navbar'
import images from '../Minor Components/Shirt Carousel/carousel'
import Shirtcarousel from '../Minor Components/Shirt Carousel/Shirtcarousel'
import tiedye_images from '../Minor Components/Landingpage Tie-dye/tiedyeshirts'
import Totebag from '../Minor Components/Landingpage Totebag/Totebag'
import combo from '../Minor Components/Landingpage Totebag/popularcombos'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Tiedye tiedye_images={tiedye_images}/>
        <Shirtcarousel images={images}/>
        <Totebag combo = {combo}/>
    </>
  )
}

export default App