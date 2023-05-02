import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className="App">
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Menu'} collapsed={false}/>*/}
            <OnOff isActive={true}/>
            <OnOff isActive={false}/>
        </div>
    );
}

export default App;
