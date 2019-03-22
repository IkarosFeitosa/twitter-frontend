import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../../assets/twitter.svg';

class Login extends Component {
  state={
    userName : '',
    valid: this.props.invalid
  }
  
  handleInputChange = e =>{
    this.setState({
      userName:e.target.value
    });
  }
  l
  

  handleSubmit = e=>{
    e.preventDefault();
    const {userName} = this.state;
    if(!userName.length) return;

    localStorage.setItem('@GoTwitter:username',userName)
    
    this.props.history.push('/timeline');
  }

  render() {
      const {valid,username} = this.state;
    return (
      
    <div className="login-wrapper">
      <img src={twitterLogo} alt='GoTwitter' />

      <form onSubmit={this.handleSubmit}>
        <input
        value={username}
        onChange={this.handleInputChange} 
        placeholder="Nome de usuário"/>
        <div className={"mensage "+ (valid?"mensageTrue":"mensageFalse")}>
            É preciso um nome de usuário para entrar!
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
    
    );
  }
}
export default Login;