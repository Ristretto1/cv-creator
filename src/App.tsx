import React from 'react';
import './App.css';
import {Accordion} from './component/Accordion/Accordion'
import {Rating} from './component/Rating/Rating'

function App() {
  return (
    <div>
      <AppTitle />
      <Rating value={1}/>
      <Accordion />
      <Rating value={4}/>
    </div>
  );
}

const AppTitle = () => {
  return <h1>This is APP component</h1>
}

export default App;
