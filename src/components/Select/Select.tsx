import React, {FC, useState} from 'react';


export const Select = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<string>('00000')

    const state = [
        '111111',
        '22222',
        '3333',
    ]

    return (
        <div>
            <SelectTitle title={value} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <SelectBody state={state} setValue={setValue} setCollapsed={setCollapsed}/>}
        </div>
    );
};


//--------------------------------------------------//
type SelectTitlePropsType = {
    title: string
    setCollapsed: (collapse: boolean) => void
    collapsed: boolean
}

export const SelectTitle: FC<SelectTitlePropsType> = ({title, setCollapsed, collapsed}) => {
    return (
        <span onClick={() => setCollapsed(!collapsed)}>{title}</span>
    )
}


//--------------------------------------------------//
type SelectBodyPropsType = {
    state: Array<string>
    setValue: (value: string) => void
    setCollapsed: (collapse: boolean) => void
}

export const SelectBody: FC<SelectBodyPropsType> = ({state,setValue, setCollapsed}) => {
    return (
        <ul style={{listStyle: 'none'}}>
            {state.map(s => {

                const onClickHandler = () => {
                    setValue(s)
                    setCollapsed(true)
                }

                return (
                    <li onClick={onClickHandler}>{s}</li>
                )
            })}
        </ul>
    )
}

