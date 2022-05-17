import {SelectDim} from './SelectDim';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select Dim',
    component: SelectDim
}

export const BaseExample = () => <SelectDim onChange={action('value changed')} value={'1'} items={[{value: '1', title: 'Minsk'}, {value: '2', title: 'Surgut'}, {value: '1', title: 'Moscow'}]}/>