import React, {FC} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    isActive: boolean
}

export const OnOff: FC<OnOffPropsType> = ({isActive}) => {
    return (
        <div className={s.wrapper}>
            <span className={s.button} style={{background: isActive ? 'green' : ''}}>On</span>
            <span className={s.button} style={{background: isActive ? '' : 'red'}}>Off</span>
            <span className={s.light} style={{background: isActive ? 'green' : 'red'}}></span>
        </div>
    );
};
