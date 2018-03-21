import React, { Component } from 'react';
import moment from 'moment';

export default class Main extends Component {
    state = {
        locale: 'en',
    }

    changeLocaleEn = () => {
        this.setState({
            locale: 'en',
        });
    }

    changeLocaleUk = () => {
        this.setState({
            locale: 'uk',
        });
    }

    changeLocaleRu = () => {
        this.setState({
            locale: 'ru',
        });
    }

    render () {
        const { locale } = this.state;

        return (
            <section>
                <button
                    onClick = { this.changeLocaleEn }>
                    EN
                </button>
                <button
                    onClick = { this.changeLocaleUk }>
                    UK
                </button>
                <button
                    onClick = { this.changeLocaleRu }>
                    RU
                </button>
                <p>{ moment().locale(locale).format('LLLL') }</p>
            </section>
        );
    }
}
