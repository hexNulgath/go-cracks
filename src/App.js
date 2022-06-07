import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import FormSuccess from './FormSuccess';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="App">
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}
export default App;
