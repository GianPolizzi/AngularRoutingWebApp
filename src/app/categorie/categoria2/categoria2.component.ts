import { Album } from './../../model/album';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria2',
  templateUrl: './categoria2.component.html',
  styleUrls: ['./categoria2.component.css']
})
export class Categoria2Component implements OnInit {

  album : Album[];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    //this.richiestaAlbum();

    this.getAlbum().subscribe((alb) => {
      this.album = alb;
    })
  }

  //Mappa Dati (Metodo sicuro per gestire più dati)
  getAlbum() : Observable<any>{
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/albums/')
    .pipe(map((res) => {
      return res;
    }))
  }
  
}
