import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Nick
                </div>
                <div className={s.dialog}>
                    Nina
                </div>
                <div className={s.dialog}>
                    Denis
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you Ok?</div>
                <div className={s.message}>Nice!</div>
            </div>
        </div>
    );
};

