import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

class App extends Component {
  render(){
    const responseGoogle = response => {
      console.log(response);
    }

    return (
     <div className= "App">
       <GoogleLogin
          clientID="375537975084-497dalo3j1djjaq7kdm8m5d674hrjspn.apps.googleusercontent.com"
          buttonText="Login with Google"
          // onSuccess={responseGoogle}
          // onFailure={responseGoogle}
        /> 
     </div>
    );
    // return (
    //   responseGoogle
    // );
  }
}

export default App;
