import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = ({message, likeCount}) => {
    return (
        <div className={s.item}>
            <img src="https://download-cs.org/uploads/posts/2020-06/1593141171_3428.jpg" alt="avatar"/>
            {message}
            <div>
                <span>like: {likeCount}</span>
            </div>
        </div>
    );
};

