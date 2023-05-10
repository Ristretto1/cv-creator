import React, {FC, useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
}

export const UncontrolledOnOff: FC<OnOffPropsType> = ({}) => {
    const [isActive, setActive] = useState<boolean>(false)

    return (
        <div className={s.wrapper}>
            <span className={s.button} style={{background: isActive ? 'green' : ''}} onClick={()=>setActive(true)}>On</span>
            <span className={s.button} style={{background: isActive ? '' : 'red'}} onClick={()=>setActive(false)}>Off</span>
            <span className={s.light} style={{background: isActive ? 'green' : 'red'}}></span>
        </div>
    );
};
