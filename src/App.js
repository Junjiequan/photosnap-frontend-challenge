import React, { useEffect }from 'react'
import Header from './components/Header/'
import Hero from './components/Hero/'
import GlobalStyle  from './GlobalStyle'
import WebFont from 'webfontloader';

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
    </>
  )
}

export default App
