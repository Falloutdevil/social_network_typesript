import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import state from './redux/state'

function App() {
    let posts = state.profilePage.posts;
    let dialogs = state.dialogsPage.dialogs;
    let messages = state.dialogsPage.messages;

    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;


