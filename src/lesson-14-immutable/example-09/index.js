// Core
import { fromJS } from 'immutable';
import { random } from 'faker';

// Instruments
import { measure } from 'helpers';

const toggleTodoNative = (todos, id) =>
    Object.assign({}, todos, {
        [id]: Object.assign({}, todos[id], {
            completed: !todos[id].completed,
        }),
    });

const toggleTodoImmutable = (todos, id) =>
    todos.update(id, (todo) => todo.update('completed', (completed) => !completed));

const mutableTodos = {};

for (let i = 0; i < 500000; i++) {
    mutableTodos[i] = {
        todo:      `Task ${i}`,
        completed: false,
    };
}

measure(() => toggleTodoNative(mutableTodos, '250000'), 'native JavaScript');

const immutableTodos = fromJS(mutableTodos);

measure(() => toggleTodoImmutable(immutableTodos, '250000'), 'Immutable.js');
