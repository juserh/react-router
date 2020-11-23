import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Membership from './Membership'
import Login from './login';
import BlogInput from './BlogInput';
import Navbar from './Navbar';
import Home from './Home';

const App=()=>{
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/membership" component={Membership}/>
        <Route path="/login" component={Login}/>
        <Route path="/blog" component={BlogInput}/>
      </Switch>
    </div>
  )
};

export default App;
