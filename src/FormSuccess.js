import axios from 'axios';

const FormSuccess = () => {
  function getForm() {
    let f = window.localStorage.getItem('form');
    if (f) return JSON.parse(f);
  }
  const cached = getForm();
  const total = cached.wages * cached.employees * 300 * parseInt(cached.horas);

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
      params: { total: total, body: cached },
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
