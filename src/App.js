import React, { useEffect }from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Footer from './components/Footer/'
import GlobalStyle  from './GlobalStyle'
import WebFont from 'webfontloader'


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
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/stories">
          <Stories />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App
