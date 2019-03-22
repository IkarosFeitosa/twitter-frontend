import React, { Component } from 'react';
import api from '../../services';
import {TweetContainer, ImageProfile} from './styles';
import Image from '../../assets/user-solid.svg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default class Tweet extends Component {
  handleLike =async () =>{
    const {_id} = this.props.tweet;

    await api.post('likes/'+_id);
  }
  render() {
    const {author,content,likes} = this.props.tweet;
    return (
        <TweetContainer>
            <header><ImageProfile src={Image} /><strong>{author}</strong></header>
            <p>
                {content}
            </p >
            <div className="btns">
                <FaRegHeart size={18}
                onClick={this.handleLike}
                cursor="pointer"/> {likes}
            </div>
        </TweetContainer>
    );
  }
}
