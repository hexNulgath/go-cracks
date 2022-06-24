import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right" id="Form">
      <h2>
        Solo <span>un paso</span> más...
      </h2>
      <p>
        Envíanos tus datos y la fecha para la cual necesitas contratar un Crack
        y nuestro equipo de soporte se encargará de la selección y de enviarte
        todos los detalles pertinentes.{' '}
      </p>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                Nombre*
              </label>
              <br />
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Nombre"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
          </div>
          <div className="col">
            {' '}
            <div className="form-inputs">
              <label htmlFor="companyName" className="form-label">
                Empresa*
              </label>
              <br />
              <input
                id="companyName"
                type="text"
                name="companyName"
                className="form-input"
                placeholder="Empresa"
                value={values.companyName}
                onChange={handleChange}
              />
              {errors.companyName && <p>{errors.companyName}</p>}
            </div>
          </div>
          <div className="col">
            {' '}
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-inputs">
              <label htmlFor="serviceDate" className="form-label">
                Fecha del servicio*
              </label>
              <br />
              <input
                id="serviceDate"
                type="date"
                name="serviceDate"
                className="form-input"
                placeholder="Fecha del servicio"
                value={values.serviceDate}
                onChange={handleChange}
              />
              {errors.serviceDate && <p>{errors.serviceDate}</p>}
            </div>
          </div>
          <div className="col">
            <div className="form-inputs">
              <label htmlFor="startTime" className="form-label">
                Hora de inicio del servicio*
              </label>
              <br />
              <input
                id="startTime"
                type="time"
                name="startTime"
                className="form-input"
                placeholder="Hora de inicio del servicio"
                value={values.startTime}
                onChange={handleChange}
              />
              {errors.startTime && <p>{errors.startTime}</p>}
            </div>
          </div>
          <div className="col">
            {' '}
            <div className="form-inputs">
              <label> Cantidad de horas* </label>
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
          <div className="col">
            <div className="form-inputs">
              <label htmlFor="wages" className="form-label">
                Cantidad de jornales deseados*
              </label>
              <br />
              <input
                id="wages"
                type="number"
                name="wages"
                className="form-input"
                placeholder="Cantidad de jornales deseados"
                value={values.wages}
                onChange={handleChange}
              />
              {errors.wages && <p>{errors.wages}</p>}
            </div>
          </div>
          <div className="col">
            {' '}
            <div className="form-inputs">
              <label htmlFor="employees" className="form-label">
                Cantidad de Cracks a contratar*
              </label>
              <br />
              <input
                id="employees"
                type="number"
                name="employees"
                className="form-input"
                placeholder="Cantidad de Cracks a contratar"
                value={values.employees}
                onChange={handleChange}
              />
              {errors.employees && <p>{errors.employees}</p>}
            </div>
          </div>
          <div className="col">
            <div className="form-inputs">
              <label htmlFor="rut" className="form-label">
                RUT
              </label>
              <br />
              <input
                id="rut"
                type="text"
                name="rut"
                className="form-input"
                placeholder="RUT"
                value={values.rut}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <div className="form-inputs">
                  <label htmlFor="phone" className="form-label">
                    Celular de contacto*
                  </label>
                  <br />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Celular de contacto"
                    value={values.phone}
                    onChange={handleChange}
                  />{' '}
                  {errors.phone && <p>{errors.phone}</p>}
                </div>
              </div>
              <div className="col">
                <div className="form-inputs">
                  <label htmlFor="adress" className="form-label">
                    Direccion del servicio*
                  </label>{' '}
                  <br />
                  <input
                    id="adress"
                    type="text"
                    name="adress"
                    className="form-input"
                    placeholder="Direccion del servicio"
                    value={values.adress}
                    onChange={handleChange}
                  />{' '}
                  {errors.adress && <p>{errors.adress}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-inputs">
                <label htmlFor="message" className="form-label">
                  Comentarios
                </label>
                <br />
                <input
                  id="message"
                  type="text"
                  name="message"
                  maxLength="450"
                  className="form-input"
                  placeholder="Comentarios"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row-4">
              <button className="form-input-btn" type="submit">
                Solicitar Crack
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    </div>
  );
};

export default Form;
