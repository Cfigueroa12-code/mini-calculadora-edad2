function calcularEdad() {
  const fechaNacimiento = document.getElementById("birthdate").value;
  const resultado = document.getElementById("resultado");

  if (!fechaNacimiento) {
    resultado.innerText = " Ingresa una fecha válida.";
    return;
  }

  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  resultado.innerText = `Tienes ${edad} años`;
}
