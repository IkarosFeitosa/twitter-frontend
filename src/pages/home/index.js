import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { App, AppBody, GlobalStyles } from './styles';
import Header from '../../components/header/header';
import Nav from '../../components/NavLeft/navLeft';
import Tweets from '../../components/tweets';
import NewTweet from '../../components/tweetar';

export default class Home extends Component {
    state = {
        username: '',
        tweets: []
    }
    componentDidMount() {
        this.loginIsValid();
    }
    loginIsValid = () => {
        const username = localStorage.getItem('@GoTwitter:username');
        if (!username) {
            this.props.history.push('/invalid');
            
        };
        this.setState({ username });
        
    }

   

    render() {
        return (
            <App>
                <Provider store={store}>
                    <Header className="row header no-gutters">

                    </Header>
                    <AppBody className="row">
                        <Nav className="col-auto" />

                        <div className="col-lg-6 containerTweets">
                            <NewTweet />
                            <Tweets />

                        </div>
                    </AppBody>
                    <GlobalStyles />
                </Provider>
            </App>
        );
    }
}
