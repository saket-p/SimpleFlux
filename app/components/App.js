import Component from './Component.js';

export default class App extends Component {
    constructor(params) {
        super(params);
        this.element = params.element;
        
        setTimeout(() => this.changeName(), 5000);
    }

    changeName() {
        this.state.greeting = {
            'message': 'Hello',
            'name': 'There'
        }
    }

    render() {
        this.element.innerHTML = this.renderTemplate(this.state.greeting);
    }

    renderTemplate(t) {
        return `<h2>
            <span>${t.message} ${t.name}</span>
        </h2>`
    }
}