import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  var time = 0;
  if (parseInt(values.horas) === 8) {
    time = 2240;
  } else if (parseInt(values.horas) === 6) {
    time = 1800;
  }
  return (
    <div className="form-content-right" id="Form">
      <h2>
        Solo <span>un paso</span> más...
      </h2>
      <p>
        Completa los datos solicitados a continuación y nuestro equipo se
        encargará de seleccionar al crack adecuado. Te enviaremos los detalles a
        tus vías de contacto{' '}
      </p>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                <span>*</span>Nombre
              </label>
              <br />
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            {' '}
            <div className="form-inputs">
              <label htmlFor="companyName" className="form-label">
                <span>*</span>Empresa
              </label>
              <br />
              <input
                id="companyName"
                type="text"
                name="companyName"
                className="form-input"
                value={values.companyName}
                onChange={handleChange}
              />
              {errors.companyName && <p>{errors.companyName}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            {' '}
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                <span>*</span>Email
              </label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="serviceDate" className="form-label">
                <span>*</span>Fecha del servicio
              </label>
              <br />
              <input
                id="serviceDate"
                type="date"
                name="serviceDate"
                className="form-input"
                value={values.serviceDate}
                onChange={handleChange}
              />
              {errors.serviceDate && <p>{errors.serviceDate}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="startTime" className="form-label">
                <span>*</span>Hora de inicio del servicio
              </label>
              <br />
              <input
                id="startTime"
                type="time"
                name="startTime"
                className="form-input"
                value={values.startTime}
                onChange={handleChange}
              />
              {errors.startTime && <p>{errors.startTime}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label>
                <span>
                  <span>*</span>
                </span>
                Cantidad de horas{' '}
              </label>
              <br />
              <input
                id="ochoHoras"
                type="radio"
                name="horas"
                className="form-input"
                value="8"
                onChange={handleChange}
              />
              <label htmlFor="ochoHoras" className="form-label" id="ocho">
                8h
              </label>
              <input
                id="seisHoras"
                type="radio"
                name="horas"
                className="form-input"
                value="6"
                onChange={handleChange}
              />
              <label htmlFor="seisHoras" className="form-label" id="seis">
                6h
              </label>
              {errors.horas && <p>{errors.horas}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="wages" className="form-label">
                <span>
                  <span>*</span>
                </span>
                Cantidad de jornales deseados
              </label>
              <br />
              <input
                id="wages"
                type="tel"
                name="wages"
                className="form-input"
                value={values.wages}
                onChange={handleChange}
              />
              {errors.wages && <p>{errors.wages}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            {' '}
            <div className="form-inputs">
              <label htmlFor="employees" className="form-label">
                <span>
                  <span>*</span>
                </span>
                Cantidad de Cracks a contratar
              </label>
              <br />
              <input
                id="employees"
                type="tel"
                name="employees"
                className="form-input"
                value={values.employees}
                onChange={handleChange}
              />
              {errors.employees && <p>{errors.employees}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="rut" className="form-label">
                RUT
              </label>
              <br />
              <input
                id="rut"
                type="number"
                name="rut"
                className="form-input"
                value={values.rut}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <div className="form-inputs">
                  <label htmlFor="phone" className="form-label">
                    <span>
                      <span>*</span>
                    </span>
                    Celular de contacto
                  </label>
                  <br />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={values.phone}
                    onChange={handleChange}
                  />{' '}
                  {errors.phone && <p>{errors.phone}</p>}
                </div>
              </div>
              <div className="col-xs-12 col-lg-6">
                <div className="form-inputs">
                  <label htmlFor="adress" className="form-label">
                    <span>
                      <span>*</span>
                    </span>
                    Dirección del servicio
                  </label>
                  <br />
                  <input
                    id="adress"
                    type="text"
                    name="adress"
                    className="form-input"
                    value={values.adress}
                    onChange={handleChange}
                  />{' '}
                  {errors.adress && <p>{errors.adress}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="form-inputs">
                  <label htmlFor="message" className="form-label">
                    Comentarios
                  </label>
                  <br />
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    maxLength="450"
                    className="form-input"
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-xs-12 col-lg-9">
                  <div className="form-inputs">
                    <label htmlFor="tyc" className="form-label" href>
                      <input
                        id="tyc"
                        type="checkbox"
                        name="tyc"
                        className="form-input"
                        onChange={handleChange}
                      />
                      <span className="tycText">
                        *Al avanzar confirmas que estás de acuerdo con nuestros
                        {'  '}
                      </span>
                      <a
                        className="tycText"
                        href="https://www.gocracks.uy/terminos-y-condiciones"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Términos y condiciones
                      </a>
                    </label>
                    {errors.tyc && <p>{errors.tyc}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-3" id="total">
            <div className="row">
              <h3>
                Total a pagar: ${values.wages * values.employees * time}{' '}
                <span>más IVA</span>
              </h3>
            </div>
            <div className="row">
              {' '}
              <button
                className="form-input-btn"
                type="submit"
                id="solicitarCrack"
              >
                Solicitar Crack
              </button>
              {errors.error && <p id="error">{errors.error}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
