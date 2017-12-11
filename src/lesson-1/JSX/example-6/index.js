import React from 'react';

const element = (
    <section className = 'newsFeed'>
        <h1
            style = { {
                color: 'dimGray',
            } }>
            News Feed
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            faucibus ex ac nunc efficitur vulputate. In hac habitasse platea
            dictumst.
        </p>

        <input defaultChecked id = 'subscribe' name = 'subscription' type = 'radio' />
        <label htmlFor = 'subscribe'>Subscribe to newsletter</label>

        <br />

        <input
            defaultChecked = { false }
            id = 'unsubscribe'
            name = 'subscription'
            type = 'radio'
        />
        <label htmlFor = 'unsubscribe' value = 'hello'>
            Unsubscribe from newsletter
        </label>

        <br />

        <input type = 'submit' value = 'Submit' />
    </section>
);

export default element;
