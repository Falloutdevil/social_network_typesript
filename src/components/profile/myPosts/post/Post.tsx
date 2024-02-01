import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../../../redux/state';

export const Post: React.FC<PostType> = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src="https://download-cs.org/uploads/posts/2020-06/1593141171_3428.jpg" alt="avatar"/>
            {message}
            <div>
                <span>like: {likesCount}</span>
            </div>
        </div>
    );
};

