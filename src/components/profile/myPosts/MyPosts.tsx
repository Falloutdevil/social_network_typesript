import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 3},
        {id: 2, message: 'It\'s my first post', likeCount: 11},
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likeCount = {postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount = {postData[1].likeCount}/>
            </div>

        </div>
    );
};

