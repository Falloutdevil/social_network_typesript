import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    message: string
    posts: PostType[]
    addPost: (postMessage: string) => void
    changeNewTextCallBack: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, addPost, message, changeNewTextCallBack}) => {
    let postElements = posts.map(p => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        addPost(message);
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewTextCallBack(e.currentTarget.value)
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={message}/>
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

