import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default class Authentication extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'signInScreen'
    };
  }
  
  goBackToMain() {
    this.props.navigation.goBack();
  }
  
  goToSignIn() {
    this.setState({ currentScreen: 'signInScreen' });
  }

  goToSignUp() {
    this.setState({ currentScreen: '' });
  }
  
  render() {
    return (
      this.state.currentScreen === 'signInScreen' ? 
      <SignIn 
        goToSignUpProp={() => this.goToSignUp()} 
        goBackToMainProp={() => this.goBackToMain()} 
      /> 
      : <SignUp 
          goToSignInProp={() => this.goToSignIn()} 
          goBackToMainProp={() => this.goBackToMain()} 
      />
    );
  }
}

