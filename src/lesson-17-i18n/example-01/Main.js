/*eslint-disable camelcase*/
import React, { Component } from 'react';
import { I18n } from 'react-i18nify';
import { Translate } from 'react-i18nify';

I18n.setTranslations({
    en: {
        application: {
            title: 'Awesome app with i18n!',
            hello: 'Hello, %{name}!',
        },
        export:   'Export %{count} items',
        export_0: 'Nothing to export',
        export_1: 'Export %{count} item',
    },
    ru: {
        application: {
            title: 'Невероятное приложение с i18n!',
            hello: 'Привет, %{name}!',
        },
        export:   'Экспортируются %{count} единиц',
        export_0: 'Ничего не экспортируется',
        export_1: 'Экспортируется %{count} единица',
        export_2: 'Экспортируется %{count} единицы',
        export_3: 'Экспортируется %{count} единицы',
        export_4: 'Экспортируется %{count} единицы',
    },
});

export default class Main extends Component {
    constructor () {
        super();
        I18n.setLocale('ru');
    }

    state = {
        count: 0,
    }

    changeLocaleRu = () => {
        I18n.setLocale('ru');
    }

    changeLocaleEn = () => {
        I18n.setLocale('en');
    }

    increaseExport = () => {
        this.setState(({ count: oldCount }) => ({
            count: oldCount + 1,
        }));
    }

    decreaseExport = () => {
        this.setState(({ count: oldCount }) => ({
            count: oldCount - 1,
        }));
    }

    render () {
        const { count } = this.state;

        return (
            <section>
                <Translate tag = 'h1' value = 'application.title' />
                <div>
                    <button onClick = { this.increaseExport }>
                        +
                    </button>
                    <button onClick = { this.decreaseExport }>
                        -
                    </button>
                </div>
                <button onClick = { this.changeLocaleRu }>
                    RU
                </button>
                <button onClick = { this.changeLocaleEn }>
                    EN
                </button>
                <Translate count = { count } value = 'export' />
            </section>
        );
    }
}
