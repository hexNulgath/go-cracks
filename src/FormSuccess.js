import axios from 'axios';
import { data } from './App.js';

const FormSuccess = () => {
  const values = JSON.parse(data);
  const total = values.wages * values.employees * 300 * parseInt(values.horas);
  console.log(data);
  console.log(values);
  console.log(total);
  function sendUserData() {
    const options = {
      method: 'get',
      url: 'http://localhost:8000/data',
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
    <div>
      <h1>please wait</h1>
    </div>
  );
};

export default FormSuccess;
