import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './myPosts/profileInfo/ProfileInfo';
import {PostType, updateNewPostText} from '../../redux/state';


type ProfileType = {
    message: string
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfileType> = ({posts, addPost, message}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost} message={message} changeNewTextCallBack={updateNewPostText}/>
        </div>
    );
};



