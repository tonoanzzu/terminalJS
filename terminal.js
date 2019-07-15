class Vehiculo {

    constructor(marca = '', modelo = '', tipo = '', metodoAceleracion = '', velocidadMaxima = 0, usaMotor = false, usaRuedas = false) {

        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo; // declaracion de propiedad tipo: terrestre, acuatico, aereo
        this.metodoAceleracion = metodoAceleracion; // declaracion de propiedad metodoAceleracion: palanca, pedal
        this.velocidadMaxima = velocidadMaxima; // declaracion de propiedad velocidadMaxima: numero
        this.usaMotor = usaMotor;
        this.usaRuedas = usaRuedas;
        this.enMovimiento = false;
        this.enReposo = false;

    }

    enMovimiento() {
        this.enMovimiento = true;
        this.enReposo = false;
        console.log('Me encuentro en movimiento');
    }
    enReposo() {
        this.enMovimiento = false;
        this.enReposo = true;
        console.log('Me encuentro en reposo');
    }

    static definicion() {
        return 'Vehiculo: Aparato con o sin motor que se mueve sobre el suelo, en el agua o el aire y sirve para transportar cosas o personas'
    }

    velocidadMaxima() {
        return 'Mi velocidad Maxima es de ' + this.velocidadMaxima;
    }

    metodoDeAceleracion() {

    }

}

class Automovil extends Vehiculo {
    //constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
    //super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);
    constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
        super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);

        this.nombreVehiculo = "Automovil";
        this.noDeRuedas = noDeRuedas;
        this.tipoMotor = tipoMotor;

    }

    encender() {
        enMovimiento();
    }

    apagar() {
        enReposo();
    }

    metodoDeAceleracion() {
        return 'Mi metodo de acelerar es ' + this.metodoAceleracion
    }

    presentarse() {
        return 'this.nombreVehiculo' + ' : ' + this.nombreVehiculo + ' , ' +
            'this.marca' + ' : ' + this.marca + ' , ' +
            'this.modelo' + ' : ' + this.modelo + ' , ' +
            'this.tipo' + ' : ' + this.tipo + ' , ' +
            'this.metodoAceleracion' + ' : ' + this.metodoAceleracion + ' , ' +
            'this.velocidadMaxima' + ' : ' + this.velocidadMaxima + ' , ' +
            'this.usaMotor' + ' : ' + this.usaMotor + ' , ' +
            'this.usaRuedas' + ' : ' + this.usaRuedas + ' , ' +
            'this.noDeRuedas' + ' : ' + this.noDeRuedas + ' , ' +
            'this.tipoMotor' + ' : ' + this.tipoMotor;
    }

    static definicionAutomovil() {
        return 'Aparato con motor que se mueve sobre el suelo, sirve para transportar cosas o personas'
    }


}

class Avion extends Vehiculo {
    constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
        super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);

        this.nombreVehiculo = "Avion";
        this.noDeRuedas = noDeRuedas;
        this.tipoMotor = tipoMotor;

    }

    encender() {
        super.enMovimiento();
    }

    apagar() {
        super.enReposo();
    }

    metodoDeAceleracion() {
        return 'Mi metodo de acelerar es ' + this.metodoAceleracion
    }

    presentarse() {
        return 'this.nombreVehiculo' + ' : ' + this.nombreVehiculo + ' , ' +
            'this.marca' + ' : ' + this.marca + ' , ' +
            'this.modelo' + ' : ' + this.modelo + ' , ' +
            'this.tipo' + ' : ' + this.tipo + ' , ' +
            'this.metodoAceleracion' + ' : ' + this.metodoAceleracion + ' , ' +
            'this.velocidadMaxima' + ' : ' + this.velocidadMaxima + ' , ' +
            'this.usaMotor' + ' : ' + this.usaMotor + ' , ' +
            'this.usaRuedas' + ' : ' + this.usaRuedas + ' , ' +
            'this.noDeRuedas' + ' : ' + this.noDeRuedas + ' , ' +
            'this.tipoMotor' + ' : ' + this.tipoMotor;
    }

    static definicionAvion() {
        return 'Aparato con motor que se mueve sobre el aire, sirve para transportar cosas o personas'
    }
}


class Bote extends Vehiculo {
    constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
        super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);

        this.nombreVehiculo = "Bote";
        this.noDeRuedas = noDeRuedas;
        this.tipoMotor = tipoMotor;

    }

    presentarse() {
        return 'this.nombreVehiculo' + ' : ' + this.nombreVehiculo + ' , ' +
            'this.marca' + ' : ' + this.marca + ' , ' +
            'this.modelo' + ' : ' + this.modelo + ' , ' +
            'this.tipo' + ' : ' + this.tipo + ' , ' +
            'this.metodoAceleracion' + ' : ' + this.metodoAceleracion + ' , ' +
            'this.velocidadMaxima' + ' : ' + this.velocidadMaxima + ' , ' +
            'this.usaMotor' + ' : ' + this.usaMotor + ' , ' +
            'this.usaRuedas' + ' : ' + this.usaRuedas + ' , ' +
            'this.noDeRuedas' + ' : ' + this.noDeRuedas + ' , ' +
            'this.tipoMotor' + ' : ' + this.tipoMotor;
    }

    navegar() {
        super.enMovimiento();
    }

    anclar() {
        super.enReposo();
    }

    metodoDeAceleracion() {
        return 'Mi metodo de acelerar es ' + this.metodoAceleracion
    }

    static definicionBote() {
        return 'Aparato con o sin motor que se mueve sobre el agua, sirve para transportar cosas o personas'
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
        super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);

        this.nombreVehiculo = "Bicicleta";
        this.noDeRuedas = noDeRuedas;
        this.tipoMotor = tipoMotor;

    }

    metodoDeAceleracion() {
        return 'Mi metodo de acelerar es ' + this.metodoAceleracion
    }

    presentarse() {
        return 'this.nombreVehiculo' + ' : ' + this.nombreVehiculo + ' , ' +
            'this.marca' + ' : ' + this.marca + ' , ' +
            'this.modelo' + ' : ' + this.modelo + ' , ' +
            'this.tipo' + ' : ' + this.tipo + ' , ' +
            'this.metodoAceleracion' + ' : ' + this.metodoAceleracion + ' , ' +
            'this.velocidadMaxima' + ' : ' + this.velocidadMaxima + ' , ' +
            'this.usaMotor' + ' : ' + this.usaMotor + ' , ' +
            'this.usaRuedas' + ' : ' + this.usaRuedas + ' , ' +
            'this.noDeRuedas' + ' : ' + this.noDeRuedas + ' , ' +
            'this.tipoMotor' + ' : ' + this.tipoMotor;
    }

    andar() {
        super.enMovimiento();
    }

    parar() {
        super.enReposo();
    }



    static definicionBicicleta() {
        return 'Aparato con o sin motor que se mueve sobre el suelo, sirve para transportar cosas o personas'
    }
}

class Motocicleta extends Bicicleta {
    constructor(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas, noDeRuedas = 0, tipoMotor = '') {
        super(marca, modelo, tipo, metodoAceleracion, velocidadMaxima, usaMotor, usaRuedas);

        this.nombreVehiculo = "Motocicleta";
        this.noDeRuedas = noDeRuedas;
        this.tipoMotor = tipoMotor;

    }

    encender() {
        enMovimiento();
    }

    apagar() {
        enReposo();
    }

    metodoDeAceleracion() {
        return 'Mi metodo de acelerar es ' + this.metodoAceleracion
    }

    presentarse() {
        return 'this.nombreVehiculo' + ' : ' + this.nombreVehiculo + ' , ' +
            'this.marca' + ' : ' + this.marca + ' , ' +
            'this.modelo' + ' : ' + this.modelo + ' , ' +
            'this.tipo' + ' : ' + this.tipo + ' , ' +
            'this.metodoAceleracion' + ' : ' + this.metodoAceleracion + ' , ' +
            'this.velocidadMaxima' + ' : ' + this.velocidadMaxima + ' , ' +
            'this.usaMotor' + ' : ' + this.usaMotor + ' , ' +
            'this.usaRuedas' + ' : ' + this.usaRuedas + ' , ' +
            'this.noDeRuedas' + ' : ' + this.noDeRuedas + ' , ' +
            'this.tipoMotor' + ' : ' + this.tipoMotor;
    }

    static definicionMotocicleta() {
        return 'Aparato con motor que se mueve sobre el suelo, sirve para transportar cosas o personas'
    }
}

//mycar = new Car("Ford");
//let tiposDeTransporte = [new Automovil("Chrisler", "Neon", "Terrestre", "Pedal", 300, true, 4, ' 4 cilindros', 11)];
let tiposDeTransporte = [new Automovil("Chrisler", "Neon", "Terrestre", "Pedal", 250, true, true, 4, ' 4 cilindros'),
    new Avion("Boeing", "747", "Aereo", "Palanca", 400, true, true, 6, '2 turbinas'),
    new Bote("Bote a remo", "Iron", "Marino", "Remo", 1, false, false, 6, '2 remos'),
    new Bicicleta("Bennoto", "Progression", "Terrestre", "Pedal", 40, true, true, 2, '2 patas'),
    new Motocicleta("Yamaha", "Veloci Boxter", "Terrestre", "Palanca", 400, true, true, 2, '2 cilindros')
];