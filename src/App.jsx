import { useState } from 'react';
import Buttons from './Buttons';
import './index.css';

function App() {
  const [calVal, setCalVal] = useState('');

  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-800">
      <h1 className="text-3xl font-bold text-white mt-5">Calculator</h1>
      <div className="main bg-slate-600 p-4 rounded mt-4">
        <input
          className="p-4 text-xl rounded w-full"
          type="text"
          readOnly
          value={calVal}
        />
        <Buttons calVal={calVal} setCalVal={setCalVal} />
      </div>
    </div>
  );
}

export default App;
