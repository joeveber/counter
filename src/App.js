import './App.css';
import Counterunit from './components/Counterunit';
import { useState } from "react";

const App = () => {
  /*
    La ligne suivante va permettre 3 choses :
    créer un état : counter
    créer une fonction qui va permettre de modifier l'état : setCounter
    définir l'état par défaut : 0
  */
  const [counter, setCounter] = useState(0);
  const [tab, setTab] = useState([]);
  const newTab = [...tab];

  return (
    <div className='cont-1'>
        
        <div className='firstSection'>
          <button 
          className='actionbutton'
          onClick= {() => { 
            newTab.push(
                <Counterunit
                  counter = {counter}
                  setCounter = {setCounter}
                />
                );
            
            console.log(newTab)

          }}
          >Add counter</button>


        <div>{newTab.map((item) => {
          return item;
        })}
        </div>


        </div>
        
        <Counterunit
        counter = {counter}
        setCounter = {setCounter}
        />
      </div>
  );
};
export default App;