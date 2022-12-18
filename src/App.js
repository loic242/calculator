import { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState("");
  const ops = ['/','*','+','-','.'];

  const updateCalculate = value =>{
    //prevent to enter 2 sign next to each other
    if(
      ops.includes(value) && calculate ===''||
      ops.includes(value) && ops.includes(calculate.slice(-1))
    ){
      return;
    }
     //prevent to enter 2 sign next to each other
    setCalculate(calculate + value);

  
  }

  const creatDigits = () =>{
    const digits =[]
    for(let i=1; i<10; i++){
      digits.push(
        <button 
        onClick={() => updateCalculate (i.toString())}
        key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }
  const acoss = () =>{
    setCalculate(eval(calculate).toString())
  } 
  //DELETE function
  const deleteLast =() =>{
    if (calculate == ''){
      return;
    }
    const value = calculate.slice(0,-1);
    setCalculate(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
           {calculate || '0'}
        </div>
     
      <div className="operator">
         <button onClick={() => updateCalculate('/')}>/</button>
         <button onClick={() => updateCalculate('*')} >*</button>
         <button onClick={() => updateCalculate('+')} >+</button>
         <button onClick={() => updateCalculate('-')} >-</button>
         <button onClick={deleteLast}>Del</button>
     </div>
     <div className="digitals">
       {creatDigits()}
       <button onClick={() => updateCalculate('0')} >0</button>
       <button onClick={() => updateCalculate('.')} >.</button>
       <button onClick={acoss}>=</button>
     </div>
    </div>
  </div>
  );
}

export default App;
