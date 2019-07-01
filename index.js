import Counter1 from './app/components/Counter1.js';
import Counter2 from './app/components/Counter2.js';
import CounterSum from './app/components/CounterSum.js';

function run() {
    const c1 = new Counter1({
        element: document.querySelector('#counter1')
    });

    const c2 = new Counter2({
        element: document.querySelector('#counter2')
    });

    const cSum = new CounterSum({
        element: document.querySelector('#counter3')
    });

    c1.render();
    c2.render();
    cSum.render();
}

document.addEventListener('DOMContentLoaded', evt => {
    run();
});