import React, { Fragment, Component } from 'react';

const Book = () => <h3>A Book</h3>;

const Bookshelf = () => (
    <Fragment>
        <h2>A Bookshelf</h2>
        <Book />
    </Fragment>
);

class Library extends Component {
    render () {
        return (
            <Fragment>
                <h1>A Library</h1>
                <Bookshelf />
            </Fragment>
        );
    }
}

export default <Library />;
