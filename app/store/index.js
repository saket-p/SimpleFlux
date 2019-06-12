import Store from './Store.js';
import initialState from './getState.js';

const store = new Store({
    state: initialState
});

export default store;