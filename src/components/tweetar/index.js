import React, { Component } from 'react'
import { TweetContainer } from './style';
import api from '../../services';
import {connect} from 'react-redux';
class NewTweet extends Component {
  state = {
    newTwitter: ''
  }
  

  handleInputChange = e => {
    this.setState({
      newTwitter: e.target.value
    });
  }
  handleNewTwitter =  e => {
    if (e.keyCode !== 13) return;
    this.creatNewTweet();

  }
  creatNewTweet = async () =>{
    const content = this.state.newTwitter;
    const author =  this.props.user;

    await api.post('tweets', { content, author })

    this.setState({
      newTwitter: ''
    })
  }

  render() {
    const { newTwitter } = this.state;
    const userName = this.props.user;
    console.log('Username:=-',userName);
    return (
      <TweetContainer>
        <textarea placeholder="What's happening?"
          onChange={this.handleInputChange}
          onKeyDown={this.handleNewTwitter}
          value={newTwitter} />

        <button disabled={!newTwitter} onClick={this.creatNewTweet}>Tweetar</button>
      </TweetContainer>
    )
  }
}
export default connect(state => ({ user: state.userName }))(NewTweet);