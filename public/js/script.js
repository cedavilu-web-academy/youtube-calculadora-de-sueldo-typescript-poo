// Capturamos elementos del DOM
const formulario = document.getElementById("formulario-sueldo");
const entradaNombre = document.getElementById("nombre");
const entradaSueldo = document.getElementById("sueldo");
const entradaPorcentaje = document.getElementById("porcentaje");
const resultado = document.getElementById("resultado");

// Función para calcular el aumento de sueldo
function calcularAumento(empleado, porcentaje) {
    return empleado.sueldo + (empleado.sueldo * porcentaje / 100);
}

// Escuchamos el evento "submit"
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Creamos el objeto Empleado con tipado estricto
    const empleado = {
        nombre: entradaNombre.value,
        sueldo: parseFloat(entradaSueldo.value)
    };
    const porcentajeAumento = parseFloat(entradaPorcentaje.value);

    // Validación básica
    if  (empleado.nombre == "" || isNaN(empleado.sueldo) || isNaN(porcentajeAumento)) {
        resultado.innerHTML = "Por favor ingrese valores válidos.";
        return;
    }
    // Calculamos el nuevo sueldo
    const nuevoSueldo = calcularAumento(empleado, porcentajeAumento);
    // Mostramos el resultado
    resultado.innerHTML = `${empleado.nombre}, tu nuevo sueldo es: ${nuevoSueldo.toFixed(2)} Soles`;
});
