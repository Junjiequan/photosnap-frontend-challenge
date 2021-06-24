import React from 'react'
import { useLocation,Route, Switch} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Footer from './components/Footer/'
import GlobalStyle  from './GlobalStyle'
import ScrollToTop from './ScrollToTop'


function App() {
  const location = useLocation();

  const pageVariants = {
    initial:{
      opcity:0,
      y:'-10vh',
    },
    in:{
      opacity:1,
      y:0,
    },
    out:{
      opacity:0,
      y:'-10vh',
    }
  }
  const pageTransition = {
    duration:0.5,
    ease:'linear',
    type:'tween',
  }
  return (
    <>
    <GlobalStyle />
      <Header />
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" >
            <Home initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}/>
          </Route>
          <Route exact path="/stories">
            <Stories initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}/>
          </Route>
          <Route exact path="/features">
            <Features initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}/>
          </Route>
          <Route exact path="/pricing">
            <Pricing initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}/>
          </Route>
        </Switch>
        </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
