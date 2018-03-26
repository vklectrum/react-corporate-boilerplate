// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IntlProvider, FormattedMessage } from 'react-intl';

import { updateLocale } from './core/actions/locale';

class Main extends Component {
    changeLocaleUk = () => {
        this.props.updateLocale('uk');
    }

    changeLocaleRu = () => {
        this.props.updateLocale('ru');
    }

    changeLocaleFr = () => {
        this.props.updateLocale('fr');
    }

    render () {
        const { locale } = this.props;
        console.log(this.props.locale);

        return (
            <IntlProvider
                locale = { locale }
                messages = { this.props.messages }>
                <section>
                    <nav>
                        <button
                            onClick = { this.changeLocaleUk }>
                            UK
                        </button>
                        <button
                            onClick = { this.changeLocaleRu }>
                            RU
                        </button>
                        <button
                            onClick = { this.changeLocaleFr }>
                            FR
                        </button>
                    </nav>
                    <FormattedMessage
                        defaultMessage = 'Привет, {name}!'
                        description = 'Приветствие пользователя'
                        id = 'message'
                        values = { {
                            name:   'Гость',
                            ukName: 'Андрій',
                            ruName: 'Андрей'
                        } }
                    />
                </section>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({ i18n }) => ({
    locale:   i18n.locale,
    messages: i18n.messages,
});

const mapDispatchToProps = (dispatch) => ({
    updateLocale: bindActionCreators(updateLocale, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
