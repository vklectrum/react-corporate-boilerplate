import React, { Component } from 'react';

export default class Post extends Component {
    render () {
        const { heading, time, paragraph } = this.props;

        return (
            <section>
                <article>
                    <header>
                        <h3>Posted by: {heading}</h3>
                        <p>
                            <time>{time}</time>
                        </p>
                    </header>
                    <p>{paragraph}</p>
                </article>
            </section>
        );
    }
}
