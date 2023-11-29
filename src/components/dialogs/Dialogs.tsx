import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import * as timers from 'timers';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Pasha'} id={1}/>
                <DialogItem name={'Nick'} id={2}/>
                <DialogItem name={'Nina'} id={3}/>
                <DialogItem name={'Denis'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is you Ok?'}/>
                <Message message={'Nice!'}/>
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


