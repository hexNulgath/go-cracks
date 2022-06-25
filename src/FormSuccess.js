import axios from 'axios';
import React from 'react';

import { data } from './App.js';
import './FormSuccess.css';

const FormSuccess = () => {
  const values = JSON.parse(data);
  const total = values.wages * values.employees * 300 * parseInt(values.horas);
  console.log(data);
  console.log(values);
  console.log(total);
  function sendUserData() {
    const options = {
      method: 'get',
      url: 'https://go-cracks.herokuapp.com/data',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Credentials': 'true',
      },
      params: { total: total, body: values },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        window.location.replace(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  sendUserData();
  return (
    <div id="formSuccess">
      <h2>Por favor espere...</h2>
      <div className="form-content-right" id="Form">
        <p id="text">
          Envíanos tus datos y la fecha para la cual necesitas contratar un
          Crack y nuestro equipo de soporte se encargará de la selección y de
          enviarte todos los detalles pertinentes.{' '}
        </p>
      </div>
    </div>
  );
};

export default FormSuccess;
