import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {subscribe} from './redux/state';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree)