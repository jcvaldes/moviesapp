import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from './sala.model';

@Injectable()
export class SalaService {
  constructor(public http: HttpClient) {
  }
  getSalas() {
    return JSON.parse(localStorage.getItem('salas'));
  }

  altaSala(sala: Sala) {
    let salas: Sala[] = JSON.parse(localStorage.getItem('salas'));
    sala.id = this.genId(salas);
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
  }
  deleteSala(sala: Sala) {
    const actors: Sala[] = this.getSalas();
    const actorsFiltered = actors.filter(el => {
      return el.id !== sala.id;
    });
    localStorage.setItem('salas', JSON.stringify(actorsFiltered));
  }
  private genId(salas: Sala[]) {
    return salas.length + 1;
  }
}
