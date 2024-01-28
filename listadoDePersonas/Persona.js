class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre; // Accede a la propiedad subyacente _nombre
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido; // Accede a la propiedad subyacente _apellido
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
}
