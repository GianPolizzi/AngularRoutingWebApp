import { Utenti } from './../../model/utenti';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria1',
  templateUrl: './categoria1.component.html',
  styleUrls: ['./categoria1.component.css']
})
export class Categoria1Component implements OnInit {

  utenti : Utenti[];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    //this.richiestaUtenti();
    this.getUtenti().subscribe((res) => {
     this.utenti = res;
    });
  }

  //Mappa Dati (Metodo sicuro per gestire più dati)
  getUtenti() : Observable<any>{
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users/')
    .pipe(map((res) => {
      return res;
    }))
  }

}
