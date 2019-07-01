import Component from './Component.js';

export default class CounterSum extends Component{
    constructor(params) {
        super(params);
        
        this.subscribeTo('counter1');
        this.subscribeTo('counter2');

        this.addDelegatedEventListener('click', this.resetCounter.bind(this), 'reset');
    }

    resetCounter() {
        this.state.counter1 = {...this.state.counter1, ...{value: 0}};
        this.state.counter2 = {...this.state.counter2, ...{value: 0}};
    }


    render () {
        this.element.innerHTML = CounterSum.markup({value: this.state.counter1.value + this.state.counter2.value});
    }

    static markup(m) {
        return `
        <div class="counterVal">
        <span class="val">${m.value}</span>
        </div>
        <div class="controls">
            <button class="reset">
                Reset
            </button>
        </div>
        `;
    }
}