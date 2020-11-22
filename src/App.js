import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/'>
            <Main />
            <Contact path='/contact'/>
          </Route>
          
        </Switch>
        
      </Router>
   
    </div>
  );
}

export default App;
