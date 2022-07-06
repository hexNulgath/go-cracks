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
              <label htmlFor="nombre" className="form-label">
                <span>*</span>Nombre
              </label>
              <br />
              <input
                id="nombre"
                type="text"
                name="nombre"
                className="form-input"
                value={values.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <p>{errors.nombre}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            {' '}
            <div className="form-inputs">
              <label htmlFor="empresa" className="form-label">
                <span>*</span>Empresa
              </label>
              <br />
              <input
                id="empresa"
                type="text"
                name="empresa"
                className="form-input"
                value={values.empresa}
                onChange={handleChange}
              />
              {errors.empresa && <p>{errors.empresa}</p>}
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
              <label htmlFor="fechaDelServicio" className="form-label">
                <span>*</span>Fecha del servicio
              </label>
              <br />
              <input
                id="fechaDelServicio"
                type="date"
                name="fechaDelServicio"
                className="form-input"
                value={values.fechaDelServicio}
                onChange={handleChange}
              />
              {errors.fechaDelServicio && <p>{errors.fechaDelServicio}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            <div className="form-inputs">
              <label htmlFor="inicio" className="form-label">
                <span>*</span>Hora de inicio del servicio
              </label>
              <br />
              <input
                id="inicio"
                type="time"
                name="inicio"
                className="form-input"
                value={values.inicio}
                onChange={handleChange}
              />
              {errors.inicio && <p>{errors.inicio}</p>}
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
              <label htmlFor="jornales" className="form-label">
                <span>
                  <span>*</span>
                </span>
                Cantidad de jornales deseados
              </label>
              <br />
              <input
                id="jornales"
                type="tel"
                name="jornales"
                className="form-input"
                value={values.jornales}
                onChange={handleChange}
              />
              {errors.jornales && <p>{errors.jornales}</p>}
            </div>
          </div>
          <div className="col-xs-12 col-lg-4">
            {' '}
            <div className="form-inputs">
              <label htmlFor="cracks" className="form-label">
                <span>
                  <span>*</span>
                </span>
                Cantidad de Cracks a contratar
              </label>
              <br />
              <input
                id="cracks"
                type="tel"
                name="cracks"
                className="form-input"
                value={values.cracks}
                onChange={handleChange}
              />
              {errors.cracks && <p>{errors.cracks}</p>}
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
                  <label htmlFor="tel" className="form-label">
                    <span>
                      <span>*</span>
                    </span>
                    Celular de contacto
                  </label>
                  <br />
                  <input
                    id="tel"
                    type="tel"
                    name="tel"
                    className="form-input"
                    value={values.tel}
                    onChange={handleChange}
                  />{' '}
                  {errors.tel && <p>{errors.tel}</p>}
                </div>
              </div>
              <div className="col-xs-12 col-lg-6">
                <div className="form-inputs">
                  <label htmlFor="direccion" className="form-label">
                    <span>
                      <span>*</span>
                    </span>
                    Dirección del servicio
                  </label>
                  <br />
                  <input
                    id="direccion"
                    type="text"
                    name="direccion"
                    className="form-input"
                    value={values.direccion}
                    onChange={handleChange}
                  />{' '}
                  {errors.direccion && <p>{errors.direccion}</p>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="form-inputs">
                  <label htmlFor="mensaje" className="form-label">
                    Comentarios
                  </label>
                  <br />
                  <textarea
                    id="mensaje"
                    type="text"
                    name="mensaje"
                    maxLength="450"
                    className="form-input"
                    value={values.mensaje}
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
                Total a pagar: ${values.jornales * values.cracks * time}{' '}
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
