import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => (
    <div className="app-wrapper">
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
            </div>
        </BrowserRouter>
    </div>
);

export default App;
