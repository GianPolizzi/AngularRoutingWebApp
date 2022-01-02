import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { Categoria2Component } from './categorie/categoria2/categoria2.component';
import { Categoria1Component } from './categorie/categoria1/categoria1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { MatSliderModule } from '@angular/material/slider';

/**
 * Qui inserisco:
 * - in declarations --> i componenti che utilizzo in app
 * - in imports --> i moduli che utilizzo in app
 * - boostrap --> il componente principale (unico poichè avvia la app)
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChisiamoComponent,
    Categoria2Component,
    Categoria1Component
  ],
  imports: [
    BrowserModule,
    //Necessario per il routing
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Material
    //MatSliderModule
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
