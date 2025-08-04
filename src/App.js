import { useState } from 'react';
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) =>
      prevCounter + 2
    );
    setCounter((prevCounter) =>
      prevCounter + 2
    );
    setCounter((prevCounter) =>
      prevCounter + 2
    );
    setCounter((prevCounter) =>
      prevCounter + 2
    );
  }


  const subtractValue = () => {
    setCounter(counter - 2);
  }
  const resetValue = () => {
    setCounter(0);
  }
  return (

    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold'>Hello World</h1>
      <h2 className='text-xl'>Counter Value: {counter}</h2>
      <div className="flex items-center justify-center">
        <button onClick={addValue} className='m-2 bg-blue-500 p-3 rounded-3xl'>
          Increment
        </button>
        <button onClick={subtractValue} className='m-2 bg-red-500 p-3 rounded-3xl'>Decrement</button>
        <button onClick={resetValue} className='m-2 bg-gray-500 p-3 rounded-3xl'>Reset</button>
      </div></div >
  );
}

export default App;
