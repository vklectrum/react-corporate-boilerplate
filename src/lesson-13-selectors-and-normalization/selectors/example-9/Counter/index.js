// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import { log } from 'helpers';
import * as counterActions from '../../../core/actions/counter';

class Counter extends Component {
    _fakeIncrement = () => this.props.actions.fakeIncrement();
    _increment = () => this.props.actions.increment();
    _decrement = () => this.props.actions.decrement();

    render () {
        log('render method is called: Counter', '00ff11');

        return (
            <section>
                <h1>Counter</h1>
                <h3>Count: {this.props.counter}</h3>
                <button onClick = { this._fakeIncrement }>Fake increment</button>
                <button onClick = { this._increment }>Increment</button>
                <button onClick = { this._decrement }>Decrement</button>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    log('MSTP is called: Counter', '00ff11');

    return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
