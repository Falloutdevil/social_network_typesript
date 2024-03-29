export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    newPostText: string
    posts: PostType[]
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let rerenderEntireTree = () => {
    console.log('state is changed')
}


export let state: RootStateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Nick'},
            {id: 3, name: 'Nina'},
            {id: 4, name: 'Denis'},
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is you Ok?'},
            {id: 3, message: 'Nice!'},
        ]
    },
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state