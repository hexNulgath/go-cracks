import { useState, useEffect } from 'react';
import { setData } from './App.js';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    nombre: '',
    empresa: '',
    email: '',
    fechaDelServicio: '',
    inicio: '',
    horas: '',
    jornales: '',
    cracks: '',
    rut: '',
    tel: '',
    direccion: '',
    tyc: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(values.tyc);
    setValues({
      ...values,
      [name]: value,
    });
  };

  function saveForm(form) {
    let f = JSON.stringify(form);
    setData(f);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    saveForm(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
