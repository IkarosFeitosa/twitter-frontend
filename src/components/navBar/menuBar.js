import React, { Component } from 'react';
import { FaTwitter, FaFortAwesomeAlt } from 'react-icons/fa';
import {NavBar,Logo,AreaRight,TwettarBtn,NavBrand} from './styles';

export default class MenuBar extends Component {
    render() {
        return (
                <NavBar {...this.props} className="navbar navbar-expand fixed-top navbar-light bg-light">
                    <NavBrand className="navbar-brand" >
                        <FaFortAwesomeAlt size={24} style={{marginRight:10}} />
                        Username
                    </NavBrand>
                    <Logo>
                        <FaTwitter size={24} />
                    </Logo>
                    <AreaRight>
                        <TwettarBtn>Twettar</TwettarBtn>
                    </AreaRight>
                </NavBar>
            
        )
    }
}
