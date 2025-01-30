"use strict";
class Pelicula {
    proyectarEnCine() {
        console.log(`${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
/*
const pelicula= new Pelicula();

pelicula.proyectarEnCine(); */
const pelicula = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot", "Ryan"]);
const pelicula2 = new Pelicula("Open", ["Open", "Strauss"], ["Cillian", "Robert"]);
console.log(pelicula2);
