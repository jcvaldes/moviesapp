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

  altaActor(actor: Actor) {
    let actores: Actor[] = JSON.parse(localStorage.getItem('actores'));
    actor.id = this.genId(actores);
    actores.push(actor);
    localStorage.setItem('actores', JSON.stringify(actores));
  }
  deleteActor(actor: Actor) {
    const actors: Actor[] = this.getActores();
    const actorsFiltered = actors.filter(el => {
      return el.id !== actor.id;
    });
    localStorage.setItem('actores', JSON.stringify(actorsFiltered));
  }
  private genId(actores: Actor[]) {
    return actores.length + 1;
  }
}
