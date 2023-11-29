import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.coverImg}
                     src="https://s13.stc.all.kpcdn.net/russia/wp-content/uploads/2019/11/Altajskie-gory-oblozhka-1300x415.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptionesdf
            </div>
        </div>
    )
}