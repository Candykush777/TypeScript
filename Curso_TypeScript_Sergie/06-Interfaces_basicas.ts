interface Programador4{

    nombre:string,
    tecnologias:string[];
    tomaMate?:boolean | null  // el ? lo que hace es que no sea necesario como vemos en programador3
}

/* type Programador4{
    nombre:string,
    tecnologias:string[];
    tomaMate?:boolean | null 
} */


let dev: Programador4={
    nombre:'Sergie Code',
    tecnologias:['React','Angular','Svelte',],
    tomaMate:true
}

let dev2={
nombre:'Federico',
tecnologias:['HTML','Covol'],
tomaMate:null,
apellido: 'Buenardo',
recibido:false,

}

function enviarCV(programador77:Programador4) {

    console.log(`Este CV es de ${programador77.nombre}`);
    
    
}
enviarCV(dev);
enviarCV(dev2);