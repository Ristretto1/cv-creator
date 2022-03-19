import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff";
import {Rating} from "./components/Rating";
import {Accordion} from './components/Accordion';


function App() {
    const [ratingValue, setRatingValue] = useState('4')
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <Rating/>
            <Accordion title={'Кря'}/>
        </div>
    )
}

export default App;
