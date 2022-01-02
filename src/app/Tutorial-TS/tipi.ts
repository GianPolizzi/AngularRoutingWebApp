/**
 * STRING, NUMBER, BOOLEAN
 */

//Definizione esplicita
let miaStringa : string = 'stringa';
//Definizione implicita
let mioNumero = 5;


/**
 * ARRAY, OBJECT
 */

 //Array di stringhe
 let arrayCity: string[];
 arrayCity = ["Catania", "Palermo", "Milano"];

 //Array di numeri
 let arrayNumber: number[] = [1,2,5,100,9];  //Metodo attuale
 let arrayNumber2: Array<number> = [2,4,6,8,10];   //Metodo obsoleto

 //Oggetto Auto
 let auto : {
     marca : string,
     nome : string,
     cavalli : number,
     nuova : boolean
 }

 //Oggetto Persona
 let persona : {
     nome : string,
     cognome? : string,   //Proprietà opzionale (posso non esplicitarla)
     eta : number,
     sposato : boolean
 } = {
     nome : "Gianmarco",
     eta : 29,
     sposato : false
 }


 /**
  * FUNCTON, PARAM, RETURN
  */

  //Come variabile
  let funzErrore : () => void = () => {
      console.log("Error");
  }

  let somma1 : () => number = () => {
      return 23;
  }

  let somma2 : (x: number,y: number) => number = (x: number, y: number) => {
      return x + y;
  }


  //Come funzione
  function funzErrore2() : void {
    console.log("Error");
  }

  function somma3(x: number, y: number) : number {
      return x + y;
  }


  /**
   * ANY, UNKNOWN
   */

   //Any: utilizzo questo tipo quando non so che tipo di variabile sarà (fetch): string, number, boolean
   let nomeAlbum: any;
   nomeAlbum = "Mare2020";
   nomeAlbum = 17082020;
   nomeAlbum = [];

   //Unknown: quando non si sa che tipo sarà a variabile, successivamente è opportuno cambiarlo in "any"
   let sconosciuto: unknown;
   