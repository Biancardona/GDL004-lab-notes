import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoteList from './components/NoteList';
import LoginRegister from './components/Login-Register';


class App extends Component {
 
  render () {
    return (
       <>
      <div>
        <h1 className='s-center'> LOGO </h1>
        <Router>
         
          <Switch>
            <Route exact path='/' component={LoginRegister}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/signIn' component={NoteList}/>
            {/* <Route component={PageNotFound}/> */}
          </Switch>
        </Router>
      </div>
      </>
    );
  }
}
  
export default App;
