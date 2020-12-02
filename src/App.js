import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Contact from './components/Contact'
import Offer from './components/Offer'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route path='/gallery'>
            <Gallery />
        </Route>
       
        <Route path='/contact'>
            <Contact />
            <Footer />
        </Route>
        <Route path='/offer'>
            <Offer />
        </Route>
        <Route path='/'>
            <Main />
            <Offer />
            <Contact />
            <Footer />
        </Route>
        </Switch>
        
      </Router>
   
    </div>
  );
}

export default App;
