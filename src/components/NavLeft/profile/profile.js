import React, { Component } from 'react'
import {ImageProfile} from './style';
import image from '../../../assets/perfilTeste.jpg';
export default class Profile extends Component {
  render() {
    return (
      <ImageProfile src={image}>
      </ImageProfile>
    )
  }
}
