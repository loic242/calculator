
import './App.css';

function App() {
  return (
    <div className="App">
   <div className="calculatore">
    <div className="display">
      <span>(0)</span>0
    </div>
   </div>
   <div className="operator">
    <buttom>/</buttom>
    <buttom>*</buttom>
    <buttom>+</buttom>
    <buttom>-</buttom>
    <button>Del</button>
   </div>
   <div className="digitals">
    <button>0</button>
    <button>.</button>
    <button>=</button>
   </div>
    </div>
  );
}

export default App;
