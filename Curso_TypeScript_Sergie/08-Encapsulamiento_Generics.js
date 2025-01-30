"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Edu Programmer');
sorteo.setTicket(7);
console.log(sorteo.sortear());
let sorteo2 = new Sorteo('Edu Programmer');
sorteo2.setTicket("A7");
console.log(sorteo2.sortear());
