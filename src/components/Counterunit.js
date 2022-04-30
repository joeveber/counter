const Counterunit = ({counter, setCounter}) => {

return (
    <div className="container">
        <div className="firstSection">
          <button 
          className='plusminus' 
            onClick= {() => {
              setCounter(counter - 1)
            }}
          disabled= {counter === 0 && true}
          >
          -</button>
              <div className='counter'>{counter}</div>
          
          <button 
          className='plusminus' 
            onClick= {() => {setCounter(counter + 1);
            }}
          disabled= {counter === 10 && true}
          >
          +</button>
        </div>

        <div className="secondSection">
            <button className='actionbutton' 
              onClick= {() => {setCounter(0);
              }}
            >
            Reset</button>
        </div>
    </div>
);
}

export default Counterunit;