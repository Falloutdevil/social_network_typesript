import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './myPosts/profileInfo/ProfileInfo';
import {PostType} from '../../redux/state';

type ProfileType = {
    posts: PostType[]
}

export const Profile: React.FC<ProfileType> = ({posts}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};



