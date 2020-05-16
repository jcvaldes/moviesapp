import { Component } from '@angular/core';
import { PeliculasServiceMock } from '../utils/mocks/peliculas';
import { ActoresServiceMock } from '../utils/mocks/actores';
import { Pelicula } from './components/peliculas/pelicula.model';
import { Actor } from './components/actores/actor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  peliculas: Pelicula[] = [];
  actores: Actor[] = [];

  title = 'moviesapp';
  constructor() {
    this.initDb();
  }
  private initDb() {
    this.retrivePeliculas();
    this.retriveActores();
  }

  private retrivePeliculas() {
    const peliculasMock = new PeliculasServiceMock();
    let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    if (peliculas.length === 0) {
      peliculasMock.getPeliculas().then(data => {
        this.peliculas = data;
        localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
      });
    }
  }
  private retriveActores() {
    const actoresMock = new ActoresServiceMock();
    let actores = JSON.parse(localStorage.getItem('actores')) || [];
    if (actores.length === 0) {
      actoresMock.getActores().then(data => {
        this.actores = data;
        localStorage.setItem('actores', JSON.stringify(this.actores));
      });
    }
  }
}
