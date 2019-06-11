import store from '../store/getStore.js';
import Observer from '../store/Observer.js'

/**
 * Defines base class for UI Component, wishing to subscribe to changes in state
 * Sets up render() method of subclasses, to be notified (delegated via update()) for state changes
 */

export default class Component extends Observer {
    constructor(params) {
        super(store);
        this.state = store.state;
        this.element = params.element;
    }

    update(...args) {
        return () => this.render(args);
    }
}