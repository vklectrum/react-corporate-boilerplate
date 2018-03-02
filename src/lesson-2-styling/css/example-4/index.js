import React, { Component, Fragment } from 'react';

import Post from './Post';
import './styles';

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <Post
                    heading = 'Fruity loop'
                    paragraph = 'I love friuts, and loops'
                    time = '~1 hour ago'
                />
                <Post
                    heading = 'Apple lover'
                    paragraph = 'I love apples, my favourite kind are Granny Smiths'
                    time = '~2 hours ago'
                />
                <Post
                    heading = 'Brush maker'
                    paragraph = 'Creating brushes is my favorite affair!'
                    time = '~5 hours ago'
                />
            </Fragment>
        );
    }
}
