import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import FormSuccess from './FormSuccess';
var data;
function setData(value) {
  data = value;
}
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    console.log(data);
  }

  return (
    <div className="App">
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}
export default App;
export { data, setData };
