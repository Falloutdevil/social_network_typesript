import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialohItem/DialogItem';
import {Message} from './message/Message';


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Nick'},
        {id: 3, name: 'Nina'},
        {id: 4, name: 'Denis'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you Ok?'},
        {id: 3, message: 'Nice!'},
    ]

    let dialogsElements = dialogs.map(d => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id}/>
        )
    })

    let messagesElements = messages.map(m => {
        return (
            <Message message={m.message} key={m.id}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};


