/**
 * CLASSI
 * 
 * Public, Protected, Private, Readonly
 */

class Individuo {
    //Posso usarla solo dentro la classe
    private nome: string;

    //Posso usarlo all'interno della classe e all'interno di una classe che estende questa classe
    protected cognome: string;

    //Posso usarla anche al di fuori della classe
    public eta: number;

    //Costante
    private readonly sesso = "Uomo";

    //Costruttore
    constructor(nome: string, eta: number){
        this.nome = nome;
        this.eta = eta;

        console.log(pers.nome, pers.eta);
    }

    public saluto(){
        console.log(`Ciao, sono ${this.nome} ed ho ${this.eta} anni`);
    }

    private insulta(){
        console.log("Idiota");
    }
}

//Creo un nuovo individuo con età 29 anni
const pers: Individuo = new Individuo("Ciccio", 29);
console.log(pers.eta);
pers.saluto();