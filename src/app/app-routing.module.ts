import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Categoria1Component } from './categorie/categoria1/categoria1.component';
import { Categoria2Component } from './categorie/categoria2/categoria2.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';

/**
 * Imposto le rotte
 */
const routes: Routes = [
  // { path: 'scelgo-il-nome-pagina' , component: NomeComponente}
  {path: 'home', component: HomeComponent},
  {path: 'chisiamo', component: ChisiamoComponent},
  {path: 'categorie/categoria1', component: Categoria1Component},
  {path: 'categorie/categoria2', component: Categoria2Component},

  //Serve per specificare che quando inserisco solo il dominio vado in home
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  //Wild Card (torno sempre alla home se non trova una corrispondenza alle path specificate su)
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
  
  //In genere si gestisce creando un component di errore
  //{path: '**', component: ErrorPageComponent}
];

/**
 * Creata in automatico in fase di creazione App
 * 
 * - forRoot(routes) stesso livello;
 * - forChild(routes) altro livello (figli);
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
