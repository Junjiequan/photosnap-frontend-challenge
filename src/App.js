import React, { useEffect }from 'react'
import Header from './components/Header/'
import Hero from './components/Hero/'
import Main from './components/Main/'
import GlobalStyle  from './GlobalStyle'
import WebFont from 'webfontloader';
import { MainObjOne,MainObjTwo } from './components/Main/MainData';

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
      <Main {...MainObjOne}/>
      <Main {...MainObjTwo}/>
    </>
  )
}

export default App
