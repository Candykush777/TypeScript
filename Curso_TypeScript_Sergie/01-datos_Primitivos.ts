let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
  console.log("Puedes seguir viendo el curso typescript");
} else {
  console.log("Primero tienes que ver el curso de Javascript");
}

let interMiami: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi:boolean=true;

let palabras :string ="Me emoiconé al ver a Messi"
//void no va a devolver nada
function jugar(equipo1: number, equipo2: number,juegaMessi : boolean): void {
    let motivo:string='';
    if(juegaMessi) {equipo1 += messi
        motivo ='porque juega Messi';
    }
  if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
  if (equipo1 == equipo2) console.log("Empatan");
  if (equipo1 < equipo2) console.log("Gana FC Dallas");
}

jugar(interMiami, fcDallas,juegaMessi);


