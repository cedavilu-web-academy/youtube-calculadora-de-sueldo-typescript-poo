// Definir una clase Empleado - con su respectivo constructor
class Empleado{
    constructor(public nombre:string, public sueldo:number){
        this.nombre = nombre
        this.sueldo = sueldo
    }
}

// Definir la clase principal que hace uso de la clase Empleado
class calculadoraAumento{
    private formulario = document.getElementById("formulario-sueldo") as HTMLFormElement;
    private entradaNombre = document.getElementById("nombre") as HTMLFormElement;
    private entradaSueldo = document.getElementById("sueldo") as HTMLFormElement;
    private entradaPorcentaje = document.getElementById("porcentaje") as HTMLFormElement;
    private resultado = document.getElementById("resultado") as HTMLDivElement;

    constructor(){
        this.formulario = document.getElementById("formulario-sueldo") as HTMLFormElement;
        this.entradaNombre = document.getElementById("nombre") as HTMLFormElement;
        this.entradaSueldo = document.getElementById("sueldo") as HTMLFormElement;
        this.entradaPorcentaje = document.getElementById("porcentaje") as HTMLFormElement;
        this.resultado = document.getElementById("resultado") as HTMLDivElement;
        // Llamar al evento responsable de escuchar el submit
        this.iniciarEscucharEventos();
    }
    private iniciarEscucharEventos():void{
        this.formulario.addEventListener("submit", (evento: Event) => {
            // Aquí llamar al método que evita que se envíe el formulario
            this.manejadorSubmit(evento);

    })
    }
    private manejadorSubmit(evento:Event){
        evento.preventDefault();
        const nombre =  this.entradaNombre.value
        const sueldo= parseFloat(this.entradaSueldo.value)
        const porcentajeAumento:number = parseFloat(this.entradaPorcentaje.value);
        // Hacer la instanciación de la clase para crear el objeto empleado
        const empleado = new Empleado(nombre,sueldo)
        this.mostrarResultado(empleado,porcentajeAumento)
    }
    // Función responsable de hacer las validaciones y de mostrar los resultados
    private mostrarResultado(empleado:Empleado, porcentajeAumento:number):void{
        // Validación básica
        if  (empleado.nombre == "" || isNaN(empleado.sueldo) || isNaN(porcentajeAumento)) {
            this.resultado.innerHTML = "Por favor ingrese valores válidos.";
            return;
        }
        // Calculamos el nuevo sueldo
        const nuevoSueldo = calculadoraAumento.calcularAumento(empleado, porcentajeAumento);
        // Mostramos el resultado
        this.resultado.innerHTML = `${empleado.nombre}, tu nuevo sueldo es: ${nuevoSueldo.toFixed(2)} Soles`;
    }
    // Método estático
    static calcularAumento(empleado:Empleado, porcentaje:number):number {
        return empleado.sueldo + (empleado.sueldo * porcentaje / 100);
    }
}

// Aquí inicamos la aplicación creando una instancia de la clase creada
new calculadoraAumento();

