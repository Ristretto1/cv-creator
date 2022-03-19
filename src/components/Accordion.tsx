import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const OnClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <h3 onClick={OnClickCollapsedHandler}>{props.title}</h3>
            {!collapsed && <AccordionBody/>}
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