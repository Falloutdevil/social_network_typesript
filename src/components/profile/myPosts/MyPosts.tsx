import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post />
            </div>

        </div>
    );
};

