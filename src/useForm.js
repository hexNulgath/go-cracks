import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    companyName: '',
    email: '',
    serviceDate: '',
    startTime: '',
    horas: '',
    wages: '',
    employees: '',
    rut: '',
    phone: '',
    adress: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function saveForm(form) {
    let f = JSON.stringify(form);
    window.localStorage.removeItem('form');
    window.localStorage.setItem('form', f);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    saveForm(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
