import React, { Component } from 'react';

export default class Example extends Component {
    state = {
        notes: ['A', 'B', 'C', 'D', 'E', 'F'],
    };

    componentDidMount () {
        setTimeout(
            () =>
                this.setState((prevState) => ({
                    notes: [...prevState.notes, 'G'],
                })),
            2000
        );
    }

    render () {
        const { notes } = this.state;

        const notesList = notes.map((note, index) => (
            <li key = { index }>{note}</li>
        ));

        return <ul>{notesList}</ul>;
    }
}
