import React from 'react';
import ReactDOM from 'react-dom';
import MainGrid from './components/MainGrid'
import * as serviceWorker from './serviceWorker';
import { observe } from './components/Move';

const root = document.getElementById('root')

//Observe function is a Higher order function that takes in the function to render the app.
observe((storedPosition) => ReactDOM.render(<MainGrid storedPosition={storedPosition} />, root))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
