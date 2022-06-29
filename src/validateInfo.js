export default function validateInfo(values) {
  let errors = {};

  var datep = new Date(values.serviceDate).getTime();
  const now = Date.now() - 10833181;
  var hours = values.startTime.toString();
  var minutes = hours.split(':');
  var milliseconds = (+minutes[0] * 60 * 60 + +minutes[1] * 60) * 1000;
  var timep = datep + milliseconds;
  var timeReqDays = datep - now;
  var timeReqStart = timep - now;

  if (!values.username.trim()) {
    errors.username = 'Por favor ingrese su nombre';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.companyName) {
    errors.companyName = 'Por favor ingrese el nombre de la empresa';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.email) {
    errors.email = 'Por favor ingrese su email';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'La dirección de mail es invalida';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.serviceDate) {
    errors.serviceDate = 'Por favor ingrese el día a contratar el servicio';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  } else if (timeReqDays < -8.64e7) {
    errors.serviceDate = 'Por favor ingrese un día que no esté en el pasado';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.startTime) {
    errors.startTime = 'Por favor ingrese la hora de ingreso';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  } else if (timeReqStart < 21600000) {
    errors.startTime = 'La hora de ingreso no puede ser en menos de 6 horas';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.horas) {
    errors.horas = 'Por favor ingrese la cantidad de horas deseada';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.wages) {
    errors.wages = 'Por favor ingrese la cantidad de jornales';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  } else if (values.wages < 1) {
    errors.wages = 'ingrese la cantidad de jornales deseada';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.employees) {
    errors.employees = 'Por favor ingrese la cantidad de Cracks';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  } else if (values.employees < 1) {
    errors.employees = 'ingrese la cantidad de Cracks a contratar';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.phone) {
    errors.phone = 'Por favor ingrese su número de teléfono';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.adress) {
    errors.adress = 'Por favor ingrese la dirección del local';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor reviselos antes de avanzar';
  }

  if (!values.tyc) {
    errors.tyc = 'por favor acepte los terminos y condiciones';
  }

  sessionStorage.setItem(values.employees, values.wages);

  return errors;
}
