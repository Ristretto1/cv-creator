import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff";
import {Rating} from "./components/Rating";
import {Accordion} from './components/Accordion';


function App() {
    return (
        <div>
            <OnOff/>
            <Rating/>
            <Accordion title={'Кря'}/>
        </div>
    )
}

export default App;
