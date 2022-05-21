import React from 'react';

const FormSuccess = () => {
  var price = sessionStorage.getItem([0]);

  return (
    <div className="form-content-right">
      <p>'hola' {price}</p>
      <h1>proceder</h1>
      <form action=" http://localhost:3001/checkout">
        <input type="hidden" />
        <input type="submit" value="comprar ahora" />
      </form>
    </div>
  );
};

export default FormSuccess;
