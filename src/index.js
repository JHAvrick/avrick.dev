import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


window.transition = function(){
    let root = document.documentElement;

    console.log(root);

    root.style.setProperty('--main-bg-color', "#262626");
    root.style.setProperty('--bc-primary', "rgb(255,255,255,.6)");
    root.style.setProperty('--fc-primary',  "rgb(255,255,255,.75)");
    root.style.setProperty('--fc-emphasized', "rgb(255,255,255,.9)");
    root.style.setProperty('--font-weight', "100");
    root.style.setProperty('--baltimore-svg-label-bg', "white");
    root.style.setProperty('--baltimore-svg-label-fc', "black");
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
