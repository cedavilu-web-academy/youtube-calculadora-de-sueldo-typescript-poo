"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// Definir una clase Empleado - con su respectivo constructor
class Empleado {
    nombre;
    sueldo;
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}
// Definir la clase principal que hace uso de la clase Empleado
class calculadoraAumento {
    formulario = document.getElementById("formulario-sueldo");
    entradaNombre = document.getElementById("nombre");
    entradaSueldo = document.getElementById("sueldo");
    entradaPorcentaje = document.getElementById("porcentaje");
    resultado = document.getElementById("resultado");
    constructor() {
        this.formulario = document.getElementById("formulario-sueldo");
        this.entradaNombre = document.getElementById("nombre");
        this.entradaSueldo = document.getElementById("sueldo");
        this.entradaPorcentaje = document.getElementById("porcentaje");
        this.resultado = document.getElementById("resultado");
        // Llamar al evento responsable de escuchar el submit
        this.iniciarEscucharEventos();
    }
    iniciarEscucharEventos() {
        this.formulario.addEventListener("submit", (evento) => {
            // Aquí llamar al método que evita que se envíe el formulario
            this.manejadorSubmit(evento);
        });
    }
    manejadorSubmit(evento) {
        evento.preventDefault();
        const nombre = this.entradaNombre.value;
        const sueldo = parseFloat(this.entradaSueldo.value);
        const porcentajeAumento = parseFloat(this.entradaPorcentaje.value);
        // Hacer la instanciación de la clase para crear el objeto empleado
        const empleado = new Empleado(nombre, sueldo);
        this.mostrarResultado(empleado, porcentajeAumento);
    }
    // Función responsable de hacer las validaciones y de mostrar los resultados
    mostrarResultado(empleado, porcentajeAumento) {
        // Validación básica
        if (empleado.nombre == "" || isNaN(empleado.sueldo) || isNaN(porcentajeAumento)) {
            this.resultado.innerHTML = "Por favor ingrese valores válidos.";
            return;
        }
        // Calculamos el nuevo sueldo
        const nuevoSueldo = calculadoraAumento.calcularAumento(empleado, porcentajeAumento);
        // Mostramos el resultado
        this.resultado.innerHTML = `${empleado.nombre}, tu nuevo sueldo es: ${nuevoSueldo.toFixed(2)} Soles`;
    }
    // Método estático
    static calcularAumento(empleado, porcentaje) {
        return empleado.sueldo + (empleado.sueldo * porcentaje / 100);
    }
}
// Aquí inicamos la aplicación creando una instancia de la clase creada
new calculadoraAumento();
