import React, { Component } from 'react';

export default class Post extends Component {
    render () {
        const { heading, time, paragraph } = this.props;

        return (
            <section className = 'post'>
                <article className = 'article'>
                    <header className = 'header'>
                        <h3 className = 'heading'>
                            Posted by: {heading}
                        </h3>
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
