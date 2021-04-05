import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './containers/Login'
import Register from './containers/Register'
import Welcome from './containers/Welcome'
import Home from './containers/Home'
// import history from './containers/History'
import OtpGenerate from './containers/OtpGenerate';



function App() {

  return (
    <BrowserRouter>
    {/* <Router history={history}> */}
      <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/otpGenerate" component={OtpGenerate} />
      </Switch>
  {/* </Router> */}
  </BrowserRouter>
  );
}

export default App;
