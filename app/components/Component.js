import store from '../store/index.js';
import { Subscriber } from '../utils/pubsub/index.js'
import bindEventListenerToClass from '../utils/bindEventListenerToClass.js';

/**
 * Defines base class for UI Component, wishing to subscribe to changes in state
 * Sets up render() method of subclasses, to be notified (delegated via getNotifiedWith()) for state changes
 * Therefore, subclasses of 'Component'  should implement render(), to get notified of state changes (e.g. App.js)
 */

export default class Component extends Subscriber {
    constructor(params) {
        super(store);
        this.state = store.state;
        this.element = params.element;
    }

    getNotifiedWith(...stateChanges) {
        this.render(stateChanges);
    }

    addDelegatedEventListener(eventType, eventHandler, targetClassName) {
        this.element.addEventListener(eventType, bindEventListenerToClass(eventHandler, targetClassName));
    }
}