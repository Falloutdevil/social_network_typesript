import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './myPosts/profileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};



