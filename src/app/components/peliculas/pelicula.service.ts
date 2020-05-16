import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula.model';

@Injectable()
export class PeliculaService {
  constructor(public http: HttpClient) {
  }
  getPeliculas() {
    debugger
    return JSON.parse(localStorage.getItem('peliculas'));
  }

  altaPelicula(pelicula: Pelicula) {
   debugger
    let peliculas: Pelicula[] = JSON.parse(localStorage.getItem('peliculas'));
    pelicula.id = this.genId(peliculas);
    peliculas.push(pelicula);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }
  private genId(peliculas: Pelicula[]) {
    return peliculas.length + 1;
  }
}
