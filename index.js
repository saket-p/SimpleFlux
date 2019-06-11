import App from './app/components/App.js';

function run() {
    const element = document.querySelector('#App');
    const app = new App({ element });
    app.render();
}

document.addEventListener('DOMContentLoaded', evt => {
    run();
});