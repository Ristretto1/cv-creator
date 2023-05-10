import React, {FC, useState} from 'react';

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion: FC<AccordionPropsType> = ({title}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

const AccordionTitle: FC<AccordionTitlePropsType> = ({title, setCollapsed, collapsed}) => {
    return (
        <div onClick={()=>setCollapsed(!collapsed)}>{title}</div>
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


