import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Nick'},
        {id: 3, name: 'Nina'},
        {id: 4, name: 'Denis'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you Ok?'},
        {id: 3, message: 'Nice!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(el => {
                        return (
                            <DialogItem key={el.id} name={el.name} id={el.id}/>
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(el => {
                        return (
                            <Message message={el.message} key={el.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>

        </div>
    );
};

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div>
            <div className={s.message}>{message}</div>
        </div>
    );
};


