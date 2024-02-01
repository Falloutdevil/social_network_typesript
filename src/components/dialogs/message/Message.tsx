import React from 'react';
import s from '../Dialogs.module.css';

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