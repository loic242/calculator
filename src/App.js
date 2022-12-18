

function App() {
  const creatDigits =()=>{
    const digits =[]
    for(let i=1; i<10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
     
      <div className="operator">
         <button>/</button>
         <button>*</button>
         <button>+</button>
         <button>-</button>
         <button>Del</button>
     </div>
     <div className="digitals">
       {creatDigits()}
       <button>0</button>
       <button>.</button>
       <button>=</button>
     </div>
    </div>
  </div>
  );
}

export default App;
