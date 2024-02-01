import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/state';

export const DialogItem: React.FC<DialogType> = ({id,name}) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};