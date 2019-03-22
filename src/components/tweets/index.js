import React, { Component } from 'react'
import socket from 'socket.io-client';
import Tweet from './tweet';
import api from '../../services';
export default class Tweets extends Component {
    state = {
        tweets: []
    }
    async componentDidMount() {
        this.subscribleToEvents();

        const response = await api.get('tweets');
        this.setState({ tweets: response.data });

    }
    subscribleToEvents = () => {
        const io = socket('http://localhost:3000');
        io.on('tweet', data => {
            this.setState({ tweets: [data, ...this.state.tweets] })
        })
        io.on('like', data => {
            this.setState({
                tweets: this.state.tweets.map(tweet =>
                    tweet._id === data._id ? data : tweet
                )
            });
        })
        io.on('userName', data => {
            this.setState({
                tweets: this.state.tweets.map(tweet =>
                    tweet.author === data.author ? data : tweet
                )
            });
        })
    }
    render() {
        const { tweets } = this.state;
        return (
            <div>
                {
                    tweets.map(tweet => (
                        <Tweet
                            tweet={tweet}
                            key={tweet._id}
                            />
                    ))
                }

            </div>
        )
    }
}
