import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialohItem/DialogItem';
import {Message} from './message/Message';
import {DialogPageType} from '../../redux/state';


export const Dialogs:React.FC<DialogPageType> = ({dialogs, messages}) => {
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


