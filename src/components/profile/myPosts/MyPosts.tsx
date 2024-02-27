import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, addPost}) => {
    let postElements = posts.map(p => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value)
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
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

