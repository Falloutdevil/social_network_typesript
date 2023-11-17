import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.coverImg}
                     src="https://s13.stc.all.kpcdn.net/russia/wp-content/uploads/2019/11/Altajskie-gory-oblozhka-1300x415.jpg"
                     alt=""/>
            </div>
            <div> ava + description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className="posts">
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

