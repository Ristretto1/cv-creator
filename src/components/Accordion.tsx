import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (collapsed:boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {

    const OnClickCollapsedHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }
    return (
        <div>
            <h3 onClick={OnClickCollapsedHandler}>{props.title}</h3>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    );
};


const AccordionBody = () => {
    return(
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    )
}