import Component from './Component.js';

export default class Counter1 extends Component{
    constructor(params) {
        super(params);
        
        this.subscribeTo('counter1');

        this.addDelegatedEventListener('click', this.increaseCounter.bind(this), 'increase');
        this.addDelegatedEventListener('click', this.decreaseCounter.bind(this), 'decrease');
    }

    increaseCounter(e) {
        this.state.counter1 = {...this.state.counter1, ...{value: this.state.counter1.value + 1}};
    }

    decreaseCounter(e) {
        let val = this.state.counter1.value;
        val = val < 1 ? 0 : val - 1;
        this.state.counter1 = {...this.state.counter1, ...{value: val}};
    }

    render () {
        this.element.innerHTML = Counter1.markup(this.state.counter1);
    }

    static markup(m) {
        return `
        <div class="counterVal">
            <span class="val">${m.value}</span>
        </div>
        <div class="controls">
            <button class="increase">
                <span>+</span>
                Increase
            </button>
            <button class="decrease">
                <span>-</span>
                Decrease
            </button>
        </div>
        `;
    }
}