// Capturamos elementos del DOM
const formulario = document.getElementById("formulario-sueldo") as HTMLFormElement;
const entradaNombre = document.getElementById("nombre") as HTMLFormElement;
const entradaSueldo = document.getElementById("sueldo") as HTMLFormElement;
const entradaPorcentaje = document.getElementById("porcentaje") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;

// Crear mi propio tipo de datos
type Empleado ={
    nombre: string;
    sueldo : number;
}

// Función para calcular el aumento de sueldo
function calcularAumento(empleado:Empleado, porcentaje:number) {
    return empleado.sueldo + (empleado.sueldo * porcentaje / 100);
}

// Escuchamos el evento "submit"
formulario.addEventListener("submit", (evento: Event) => {
    evento.preventDefault();
    // Creamos el objeto Empleado con tipado estricto
    const empleado = {
        nombre: entradaNombre.value,
        sueldo: parseFloat(entradaSueldo.value)
    };
    const porcentajeAumento:number = parseFloat(entradaPorcentaje.value);

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
