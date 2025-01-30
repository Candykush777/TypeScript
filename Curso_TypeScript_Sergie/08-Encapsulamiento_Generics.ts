class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}


let sorteo=new Sorteo<number>('Edu Programmer')
sorteo.setTicket(7);
console.log(sorteo.sortear());

let sorteo2=new Sorteo<string>('Edu Programmer')
sorteo2.setTicket("A7");
console.log(sorteo2.sortear());
