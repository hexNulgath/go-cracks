import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import FormSuccess from './FormSuccess';
import { useCallback } from 'react';

var data;
function setData(value) {
  data = value;
}
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  return (
    <div className="container" id="bodyForm">
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" href="https://www.gocracks.uy/">
            <img src="/images/logo.png" alt="" id="logoNavbar" />
          </a>
          <div id="hamburgerMenu">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
          </div>
          <div class="d-flex flex-row-reverse">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="https://www.gocracks.uy/"
                  >
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://www.gocracks.uy/sobre-nosotros"
                  >
                    Nuestro objetivo
                  </a>
                </li>
                <li class="nav-item ">
                  <a
                    class="nav-link"
                    href="https://www.gocracks.uy/ser-un-crack"
                    aria-expanded="false"
                  >
                    Cracks
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="active"
                    href="https://www.contratargocracks.com/"
                  >
                    Empresas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="App">
        {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
      </div>
      <footer class="text-center text-lg-start" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 d-none d-lg-block">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="https://www.gocracks.uy/">Inicio</a>
                </li>
                <li>
                  <a href="https://www.gocracks.uy/sobre-nosotros">
                    Nuestro Objetivo
                  </a>
                </li>
                <li>
                  <a href="https://www.gocracks.uy/ser-un-crack">Cracks</a>
                </li>
                <li>
                  <a
                    href="https://www.contratargocracks.com/"
                    id="footerActive"
                  >
                    Empresas
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-xs-12">
              <ul class="list-unstyled mb-0">
                <br />
                <li>
                  <a href="https://www.facebook.com/gocracks.uy">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gocracks.uy/">Instagram</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-xs-12">
              <ul class="list-unstyled">
                <br />
                <li>
                  <p>097 777 133</p>
                </li>
                <li>
                  <p>comercial@gocracks.uy</p>
                </li>
              </ul>
            </div>
          </div>{' '}
          <div
            class="d-flex justify-content-lg-center justify-content-xs-start"
            id="copyright"
          >
            © 2022 GoCracks. Todos los derechos reservados. Diseñado por Studio
            Morai.
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
export { data, setData };
