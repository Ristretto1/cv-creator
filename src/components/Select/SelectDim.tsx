import React, {useState, KeyboardEvent, useEffect} from 'react';
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


    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredItemValue) {
                if (e.key === 'ArrowDown') {
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        break
                    }
                }
                if (e.key === 'ArrowUp') {
                    if (props.items[i - 1]) {
                        props.onChange(props.items[i - 1].value)
                        break
                    }
                }
            }
        }
    }

    return (
        <div className={s.select} tabIndex={0}
             onKeyUp={onKeyUp}>
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
                        onMouseEnter={() => setHoveredItemValue(i.value)}
                        key={i.value}
                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        onClick={
                            () => onItemClick(i.value)}
                    >{i.title}</div>
                ))}
            </div>
            }
        </div>
    );
};

