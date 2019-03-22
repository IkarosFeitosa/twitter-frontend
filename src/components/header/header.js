import React, { Component } from 'react'
import { ImageCover, HeaderList } from './styles';
import image from '../../assets/f2.jpg';
export default class Header extends Component {
    render() {
        return (
            <div>
                <ImageCover src={image} >
                    <HeaderList>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <h5>Tweets</h5>
                                <span className="text-monospace">13121</span>
                            </li>
                            <li className="list-group-item">
                                <h5>Following</h5>
                                <span className="text-monospace">5</span>
                            </li>
                            <li className="list-group-item">
                                <h5>Lists</h5>
                                <span className="text-monospace">0</span>
                            </li>
                            <li className="list-group-item">
                                <h5>Moments</h5>
                                <span className="text-monospace">0</span>
                            </li>
                        </ul>
                    </HeaderList>
                </ImageCover>
            </div>

        )
    }
}
