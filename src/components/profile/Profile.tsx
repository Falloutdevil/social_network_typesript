import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.coverImg}
                     src="https://s13.stc.all.kpcdn.net/russia/wp-content/uploads/2019/11/Altajskie-gory-oblozhka-1300x415.jpg"
                     alt=""/>
            </div>
            <div> ava + description</div>
           <MyPosts />
        </div>
    );
};

