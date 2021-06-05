import React, { useEffect }from 'react'
import Header from './components/Header/'
import Hero from './components/Hero/'
import Main from './components/Main/'
import Gallery from './components/Gallery/'
import Features from './components/Features/'
import GlobalStyle  from './GlobalStyle'
import WebFont from 'webfontloader'
import { MainObjOne,MainObjTwo } from './components/Main/MainData'
import { galleryCollections } from './components/Gallery/GalleryData'
import { FeaturesData } from './components/Features/FeaturesData'

function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:['DM Sans']
      }
    })
  })
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main {...MainObjOne} />
      <Main {...MainObjTwo} />
      <Gallery data={galleryCollections} />
      <Features data={FeaturesData}/>
    </>
  )
}

export default App
