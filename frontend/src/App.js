import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListPostitComponent from './components/ListPostitiComponent';
import CreatePostitComponent from './components/CreatePostitComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPostitComponent}></Route>
            <Route path="/postits" component={ListPostitComponent}></Route>
            <Route path="/add-postit/:id" component = {CreatePostitComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
