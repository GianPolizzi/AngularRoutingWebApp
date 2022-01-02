/**
 * MODULI
 * 
 * - typescript lavora co i moduli (introdotti in ES6);
 * - sono un pò ostici;
 * - quando viene compilato non si aggiunge automaticamente l'estensione .ts (consigliabile usare Webpack)
 */

//DATI DA ESPORTARE (export.ts)
//Tutto quello che esporto viene considerato una costante
 export const giorni = 365;
 export let ore = 24;
 export const totOre = (): number => {
     return giorni * ore;
 };
 export default class Data {
     constructor(){
         console.log("Oggi è il ", new Date())
     }
 }

/***************************************************************************************************/

//DATI DA IMPORTARE (import.ts)
//import Data from 'export.ts';

//Per importare tutto
//import * as tempo from 'export.ts';

//console.log(tempo.ore);
//const data: Data = new Data();