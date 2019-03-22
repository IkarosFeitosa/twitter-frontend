import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile/profile';
import { ContainerNav, NavList,NameUser } from './styles';
import { FaCalendarAlt, FaMapMarkerAlt, FaLink, FaPen, FaCheck } from 'react-icons/fa';

class NavLeft extends Component {
  state={
    userName:'...'
  }

  componentDidMount(){
    const userName = localStorage.getItem('@GoTwitter:username');
    this.setState({userName});
  }
  toggleUserNameEditable = (value) => {
      this.handleUserName();
      return {
        type: 'EDIT_USERNAME',
        userName:this.state.userName,
        configs: {
          navLeft: {
            userNameEditable: value
          }
        },
      }
  }

  handleName = (value)=>{
    this.setState({userName:value.target.value});
  }
  handleUserName = () =>{
    const {userName} = this.state;
    localStorage.setItem('@GoTwitter:username',userName);
  }
  handleNameEnter =  e => {
    
    if (e.keyCode !== 13) return;
    else{
      this.props.dispatch(this.toggleUserNameEditable(false));
    }
    

  }
  render() {
    const { config, dispatch } = this.props;
    const { configs: { navLeft } } = config;
    const lengthUsername = this.state.userName.length;
    return (
      <ContainerNav>
        <Profile />
        <NavList>
          <header>
            <NameUser 
                      spellcheck={false}
                      maxLength={26}
                      length={lengthUsername}
                      readOnly={!navLeft.userNameEditable}
                      value={this.state.userName}
                      onChange={this.handleName}
                      onKeyDown={this.handleNameEnter} />
            
            <div className="btnEdit">
              {!navLeft.userNameEditable && (
                <FaPen size={14}
                  cursor="pointer"
                  onClick={() => dispatch(this.toggleUserNameEditable(true))}
                />
              )}

              {navLeft.userNameEditable && (
                <FaCheck size={14}
                  cursor="pointer"
                  onClick={() => dispatch(this.toggleUserNameEditable(false))}
                />
              )}
            </div>
          </header>

          <li className="description text-break">Aqui fica uma breve descrição...</li>
          <li className="text-monospace text-muted text-break"><FaMapMarkerAlt size={18} />Aracaju - SE</li>
          <li className="text-monospace text-muted text-break"><FaLink size={18} /><a href="#">seusite.com.br</a></li>
          <li className="text-monospace text-muted text-break"><FaCalendarAlt size={18} />Joined March 2019</li>
        </NavList>
      </ContainerNav>
    )
  }

}

export default connect(state => ({ config: state }))(NavLeft);