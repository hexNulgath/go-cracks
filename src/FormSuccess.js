import React from 'react';
import axios from 'axios';

const FormSuccess = () => {
  const cached = getForm();

  function getForm() {
    let f = window.localStorage.getItem('form');
    if (f) return JSON.parse(f);
  }
  const total = cached.wages * cached.employees * 300 * parseInt(cached.horas);
  function sendUserData() {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/data',
      params: { total: total, body: cached },
    };

    axios
      .request(options)
      .then((response) => {
        sendUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  sendUserData();
  return (
    <div className="checkout-btn">
      <p>'el coste total es {total}'</p>
    </div>
  );
};

export default FormSuccess;
