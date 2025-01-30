
type Programador2={

    nombre:string,
    tecnologias:string[];
    tomaMate:boolean | null  // el ? lo que hace es que no sea necesario como vemos en programador3
}


let programador2: Programador2={
    nombre:'Sergie Code',
    tecnologias:['React','Angular','Svelte',],
    tomaMate:true
}

let programador3:Programador2={
nombre:'Federico',
tecnologias:['HTML','Covol'],
tomaMate:null


}