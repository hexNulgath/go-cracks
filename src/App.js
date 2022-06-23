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
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Go Cracks
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-lin" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Nuestro objetivo
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#" aria-expanded="false">
                  Cracks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">Empresas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="App">
        {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </div>
  );
}
export default App;
export { data, setData };
