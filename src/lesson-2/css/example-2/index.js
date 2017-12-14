import React, { Component } from 'react';

import './styles';

export default class Example extends Component {
    render () {
        return (
            <section>
                <h2>Comments</h2>
                <article>
                    <header>
                        <h3>Posted by: Apple Lover</h3>
                        <p>
                            <time>
                                ~1 hour ago
                            </time>
                        </p>
                    </header>
                    <p>I love apples, my favourite kind are Granny Smiths</p>
                </article>

                <article>
                    <header>
                        <h3>Posted by: Oranges are king</h3>
                        <p>
                            <time>
                                ~1 hour ago
                            </time>
                        </p>
                    </header>
                    <p>
                        Urgh, apples!? you should write about ORANGES
                        instead!!1!
                    </p>
                </article>
            </section>
        );
    }
}
