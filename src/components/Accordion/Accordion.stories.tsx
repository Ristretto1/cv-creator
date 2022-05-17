import React from "react";
import {Accordion} from './Accordion';

export default {
    title: 'accordion stories',
    component: Accordion
}


type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

export const Accordion1 = <Accordion titleValue={'Haba-haba'} collapsed={true} onClick={()=>{}}/>