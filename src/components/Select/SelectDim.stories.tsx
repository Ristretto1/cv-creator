import {SelectDim} from './SelectDim';
import {action} from '@storybook/addon-actions';
import React from 'react';

export default {
    title: 'Select Dim',
    component: SelectDim
}

const state = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Surgut'},
    {value: '1', title: 'Moscow'}
]

export const WithValueExample = () => (
    <SelectDim
        onChange={action('value changed')}
        value={'2'}
        items={state}/>
)

export const WithoutValueExample = () => (
    <SelectDim
        onChange={action('value changed')}
        items={state}/>
)