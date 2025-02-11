import React, { useState } from 'react';
import './App.scss';
import { Input } from './components/input/input.tsx';

function App() {
  const [ value, setValue ] = useState<string>('');

  return (
    <div className="App">
      <div className="content">
        <div className="row">
          <div className="col">
            <Input name="input1" inputSize="s" label="Input S" optional placeholder="Placeholder" defaultValue={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="col">
            <Input name="input1" label="Input M Disabled" disabled placeholder="Placeholder" defaultValue={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input name="input1" inputSize="s" label="Input S" defaultValue={value} warning="Warning message" onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="col">
            <Input name="input1" label="Input M" defaultValue={value} warning="Warning message" onChange={(e) => setValue(e.target.value)} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Input name="input1" inputSize="s" label="Input S" defaultValue={value} error="Error message" onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="col">
            <Input name="input1" label="Input M" defaultValue={value} error="Error message" onChange={(e) => setValue(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
