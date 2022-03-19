import React, {useState} from 'react';

type OnOffPropsType = {
    switchOn: boolean
    setSwitchOn: (on: boolean) => void
}

const OnOff: React.FC<OnOffPropsType> = (props) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.switchOn ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.switchOn ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.switchOn ? 'green' : 'red'
    }

    const onClickedHandler = () => {
        props.setSwitchOn(true)
    }
    const offClickedHandler = () => {
        props.setSwitchOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickedHandler}>On
            </div>
            <div style={offStyle} onClick={offClickedHandler}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;