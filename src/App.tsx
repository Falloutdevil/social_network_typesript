import React from 'react';
import './App.css';

const App = () => (
    <div className="app-wrapper">
        <header className="header"><img src="https://cdn-icons-png.flaticon.com/512/36/36447.png" alt="logo"/>
        </header>
        <nav className="nav">
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Message</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img className="coverImg"
                     src="https://s13.stc.all.kpcdn.net/russia/wp-content/uploads/2019/11/Altajskie-gory-oblozhka-1300x415.jpg"
                     alt=""/>
            </div>
            <div> ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
);

export default App;
