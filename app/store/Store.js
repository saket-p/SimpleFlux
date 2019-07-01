import { Publisher } from '../utils/pubsub/index.js';

export default class Store extends Publisher {
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

            this.notifySubscribers(key, value);
            
            return true;
        }
    });
}