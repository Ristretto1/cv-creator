import React, {FC} from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion: FC<AccordionPropsType> = ({title, collapsed}) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title}) => {
    return (
        <div>{title}</div>
    );
};

type AccordionBodyPropsType = {}

const AccordionBody: FC<AccordionBodyPropsType> = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};


