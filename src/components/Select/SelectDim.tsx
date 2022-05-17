import React, {useState} from 'react';
import s from './SelectDim.module.css'

type ItemsType = {
    title: any
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export const SelectDim = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)
    const [active, setActive] = useState(false)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    return (
        <div className={s.select}>
            <span
                onClick={toggleItems}
                className={s.main}
            >
                {selectedItem && selectedItem.title}
            </span>

            {active &&
            <div className={s.items}>
                {props.items.map(i => (
                    <div
                        key={i.value}
                        className={s.item + ' ' + (selectedItem === i ? s.selected : '')}
                        onClick={
                            () => onItemClick(i.value)}
                    >{i.title}</div>
                ))}
            </div>
            }
        </div>
    );
};

