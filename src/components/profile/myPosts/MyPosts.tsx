import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 3},
        {id: 2, message: 'It\'s my first post', likeCount: 10},
    ]

    let postElements = posts.map(p => {
        return (
            <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
        )
    })

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
                {
                    postElements
                }
            </div>

        </div>
    );
};

