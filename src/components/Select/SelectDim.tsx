import React from 'react';

type ItemsType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemsType>
}

export const SelectDim = (props: SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

