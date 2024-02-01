import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
}

export const MyPosts:React.FC<MyPostsType> = (props) => {
    const {posts} = props;
    let postElements = posts.map(p => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
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

