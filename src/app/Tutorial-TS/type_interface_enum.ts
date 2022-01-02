/**
 * TYPE
 * 
 * - non viene convertito in JS
 */

 type Persona = {
     nome: string,
     cognome: string,
     cf: string,
     figli: number,
     sposato: boolean,
     patenti: any[]
 }

 let gianmarco: Persona = {
     nome: "Gianmarco",
     cognome: "Polizzi",
     cf: "PLZGMR91P02C351S",
     figli: 0,
     sposato: false,
     patenti: ["A1", "B"]
 }

/**
 * INTERFACE
 * 
 * - non viene convertito in JS
 */

 interface Persona2 {
    nome: string,
    cognome: string,
    cf: string,
    figli: number,
    sposato: boolean,
    patenti: any[],

    //Posso aggiungere altre proprietà non previste dalla mia interfaccia
    [key: string]: any;
 }

 let giancarlo: Persona2 = {
     nome: "Giancarlo",
     cognome: "Polizzi",
     cf: "PLZGCR083hdoweh",
     figli: 3,
     sposato: true,
     patenti: ["A3", "B"],

     //Proprietà non previste dall'interfaccia
     disoccupato: true,

 }

/**
 * ENUM
 * 
 * Crea delle mappature di valori
 * - di default lavora con i numeri;
 * - possiamo impostarlo per lavorare con le stringhe;
 * - viene convertito in JS
 */

 enum categorie {
     pesca,  //Automaticamente = 0
     caccia, //Automaticamente = 1
     sport,  //Automaticamente = 2
     neve = 10,
     fango   //Automaticamente = 11

 }

 enum direzione {
     su = "Avanti",
     giu = "Indietro",
     des = "Destra",
     sin = "Sinistra"
 }