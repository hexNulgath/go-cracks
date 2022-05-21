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
    errors.username = 'Porfavor ingrese su nombre';
  }

  if (!values.companyName) {
    errors.companyName = 'Porfavor ingrese el nombre de la empresa';
  }

  if (!values.email) {
    errors.email = 'Porfavor ingrese su email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'La direccion de mail es invalida';
  }

  if (!values.serviceDate) {
    errors.serviceDate = 'Porfavor ingrese el dia a contratar el servicio';
  } else if (timeReqDays < -8.64e7) {
    errors.serviceDate = 'Porfavor ingrese un dia que no este en el pasado';
  }

  if (!values.startTime) {
    errors.startTime = 'Porfavor ingrese la hora de ingreso';
  } else if (timeReqStart < 21600000) {
    errors.startTime = 'La hora de ingreso no puede ser en menos de 6 horas';
  }

  if (!values.endTime) {
    errors.endTime = 'Porfavor ingrese la hora de salida';
  }

  if (!values.wages) {
    errors.wages = 'Porfavor ingrese la cantidad de jornales';
  } else if (values.wages < 1) {
    errors.wages = 'ingrese la cantidad de jornales deseada';
  }

  if (!values.employees) {
    errors.employees = 'Porfavor ingrese la cantidad de Cracks';
  } else if (values.employees < 1) {
    errors.employees = 'ingrese la cantidad de Cracks a contratar';
  }

  if (!values.phone) {
    errors.phone = 'Porfavor ingrese su numero de telefono';
  }

  if (!values.adress) {
    errors.adress = 'Porfavor ingrese la direccion del local';
  }

  sessionStorage.setItem(values.employees, values.wages);

  return errors;
}
