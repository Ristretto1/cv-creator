import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff";
import {Rating, RatingValueType} from './components/Rating';
import {Accordion} from './components/Accordion';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div>
            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion
                title={'Кря'}
                accordionCollapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />
        </div>
    )
}

export default App;
