import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main'
import Gallery from './components/Gallery'
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route path='/photos'>
            <Gallery />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
          
        </Switch>
        
      </Router>
   
    </div>
  );
}

export default App;
