import React, { Component } from 'react';

export default class Notes extends Component {
    state = {
        notes: ['A', 'B', 'C', 'D', 'E', 'F'],
        scale: 'none',
    };

    componentDidMount () {
        setTimeout(
            () =>
                this.setState((prevState, props) => ({
                    notes: [...prevState.notes, 'G'],
                    scale: props.scale,
                })),
            2000
        );
    }

    render () {
        const { notes, scale } = this.state;

        const notesList = notes.map((note, index) => (
            <li key = { index }>{note}</li>
        ));

        return (
            <ul>
                <li>Scale: {scale}</li>
                {notesList}
            </ul>
        );
    }
}
