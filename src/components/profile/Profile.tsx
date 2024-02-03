import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './myPosts/profileInfo/ProfileInfo';
import {PostType} from '../../redux/state';

type ProfileType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfileType> = ({posts, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};



