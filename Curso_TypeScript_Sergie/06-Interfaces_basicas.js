"use strict";
/* type Programador4{
    nombre:string,
    tecnologias:string[];
    tomaMate?:boolean | null
} */
let dev = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte',],
    tomaMate: true
};
let dev2 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Covol'],
    tomaMate: null,
    apellido: 'Buenardo',
    recibido: false,
};
function enviarCV(programador77) {
    console.log(`Este CV es de ${programador77.nombre}`);
}
enviarCV(dev);
enviarCV(dev2);
