// Instruments
import { navigator, history } from './navigator';
import { log } from 'helpers';

const unlisten = history.listen((location, action) => {
    log(`Navigation action → ${action}`, '34eefe');
    log(`The current URL   → ${location.pathname}${location.search}${location.hash}`, '98afed');
    log(`Navigation state  →`, '1fda91', location.state);
});

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
const button5 = document.createElement('button');

button1.innerText = '←';
button2.innerText = 'Push a address';
button3.innerText = 'Stop to listen location change';
button4.innerText = 'Replace current address';
button5.innerText = '→';

document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
document.body.appendChild(button5);

button1.addEventListener('click', () => history.go(-1)); // or history.goBack()
button2.addEventListener('click', () => navigator.next());
button3.addEventListener('click', () => unlisten());
button4.addEventListener('click', () =>
    history.replace({
        pathname: '/home',
        search:   '?the=query',
        state:    { meta: 'some meta infola', method: 'replace' },
    }),
);
button5.addEventListener('click', () => history.goForward());

// const unblock = history.block('Are you sure you want to leave this page?');
// unblock();
