import {SelectDim} from './SelectDim';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';

export default {
    title: 'Select Dim',
    component: SelectDim
}

const state = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Surgut'},
    {value: '3', title: 'Moscow'}
]

export const WithValueExample = () => {
    const [value, setValue] = useState('2')
    return (
        <SelectDim
            onChange={setValue}
            value={value}
            items={state}/>
    )
}

export const WithoutValueExample = () => {
    const [value, setValue] = useState('')

    return (
        <SelectDim
            onChange={setValue}
            value={value}
            items={state}
        />
    )
}