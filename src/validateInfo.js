export default function validateInfo(values) {
  let errors = {};

  var datep = new Date(values.fechaDelServicio).getTime();
  const now = Date.now() - 10833181;
  var hours = values.inicio.toString();
  var minutes = hours.split(':');
  var milliseconds = (+minutes[0] * 60 * 60 + +minutes[1] * 60) * 1000;
  var timep = datep + milliseconds;
  var timeReqDays = datep - now;
  var timeReqStart = timep - now;

  if (!values.nombre.trim()) {
    errors.nombre = 'Por favor ingrese su nombre';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.empresa) {
    errors.empresa = 'Por favor ingrese el nombre de la empresa';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.email) {
    errors.email = 'Por favor ingrese su email';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'La dirección de mail es invalida';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.fechaDelServicio) {
    errors.fechaDelServicio =
      'Por favor ingrese el día a contratar el servicio';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  } else if (timeReqDays < -8.64e7) {
    errors.fechaDelServicio =
      'Por favor ingrese un día que no esté en el pasado';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.inicio) {
    errors.inicio = 'Por favor ingrese la hora de ingreso';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  } else if (timeReqStart < 21600000) {
    errors.inicio = 'La hora de ingreso no puede ser en menos de 6 horas';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.horas) {
    errors.horas = 'Por favor ingrese la cantidad de horas deseada';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.jornales) {
    errors.jornales = 'Por favor ingrese la cantidad de jornales';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  } else if (values.jornales < 1) {
    errors.jornales = 'ingrese la cantidad de jornales deseada';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.cracks) {
    errors.cracks = 'Por favor ingrese la cantidad de Cracks';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  } else if (values.cracks < 1) {
    errors.cracks = 'ingrese la cantidad de Cracks a contratar';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.tel) {
    errors.tel = 'Por favor ingrese su número de teléfono';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.direccion) {
    errors.direccion = 'Por favor ingrese la dirección del local';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  if (!values.tyc) {
    errors.tyc = 'por favor acepte los términos y condiciones';
    errors.error =
      'falta ingresar campos obligatorios o alguno de los datos ingresados es incorrecto, por favor revíselos antes de avanzar';
  }

  sessionStorage.setItem(values.cracks, values.jornales);

  return errors;
}
