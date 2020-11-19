import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'ui-components';
import { formatDate } from 'common-utils';

function App() {
  const [count,setCount] = useState(0)
const handleClick = ()=>{
    setCount(count+1)
}
  return (
    <div className="App">
      <div>
        <p>Sample product</p>
       
        <Button label={`A button from Ui Component ${count}`} handleClick={handleClick}/>
        <p>
          Today is: {formatDate(new Date())}
        </p>
      </div>
    </div>
  );
}

export default App;
