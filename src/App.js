import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoteList from './pages/NoteList';
import Register from './pages/Register';
import Login from './pages/Login';
//import { auth } from './firebase/initFirebase';


class App extends Component {
 
  render () {
    return (
       <>
      <div>
        <h1 className='s-center'> LOGO </h1>
        <Router>
         
          <Switch>
            <Route exact path='/' component={Register}/>
            <Route exact path='/login' component={Login}/>
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





