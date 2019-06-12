import { Observable } from '../utils/observation/index.js';

export default class Store extends Observable {
    constructor({ state }) {
        super();   
        this.state = this.trap(state || {});
    }

    trap = (subject) => new Proxy(subject, this.getTraps());

    getTraps = () => ({
        set: (state, key, value) => {
            console.group("State Changed");
            console.log(`Changes to state: ${key}: ${JSON.stringify(value)}`);
            state[key] = value;
            console.log(`Current State: ${JSON.stringify(state)}`);
            console.groupEnd();

            this.notifyObservers(state);
            
            return true;
        }
    });
}