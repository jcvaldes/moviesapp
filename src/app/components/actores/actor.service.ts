import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from './actor.model';

@Injectable()
export class ActorService {
  constructor(public http: HttpClient) {
  }
  getActores() {
    return JSON.parse(localStorage.getItem('actores'));
  }

  altaActor(pelicula: Actor) {
    let actores: Actor[] = JSON.parse(localStorage.getItem('actores'));
    pelicula.id = this.genId(actores);
    actores.push(pelicula);
    localStorage.setItem('actores', JSON.stringify(actores));
  }
  private genId(actores: Actor[]) {
    return actores.length + 1;
  }
}
