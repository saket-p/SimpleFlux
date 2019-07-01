import Component from './Component.js';

export default class Counter2 extends Component{
    constructor(params) {
        super(params);
        
        this.subscribeTo('counter2');

        this.addDelegatedEventListener('click', this.increaseCounter.bind(this), 'increase');
        this.addDelegatedEventListener('click', this.decreaseCounter.bind(this), 'decrease');
    }

    increaseCounter(e) {
        this.state.counter2 = {...this.state.counter2, ...{value: this.state.counter2.value + 1}};
    }

    decreaseCounter(e) {
        let val = this.state.counter2.value;
        val = val < 1 ? 0 : val - 1;
        this.state.counter2 = {...this.state.counter2, ...{value: val}};
    }

    render () {
        this.element.innerHTML = Counter2.markup(this.state.counter2);
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