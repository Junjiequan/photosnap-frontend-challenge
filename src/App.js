import { useEffect } from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
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
    <GlobalStyle />
    <Router basename="/">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App
