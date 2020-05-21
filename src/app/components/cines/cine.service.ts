import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cine } from './cine.model';

@Injectable()
export class CineService {
  constructor(public http: HttpClient) {
  }
  getCines() {
    return JSON.parse(localStorage.getItem('cines'));
  }

  altaCine(cine: Cine) {
    let cines: Cine[] = JSON.parse(localStorage.getItem('cines'));
    cine.id = this.genId(cines);
    cines.push(cine);
    localStorage.setItem('cines', JSON.stringify(cines));
  }
  deleteCine(cine: Cine) {
    const actors: Cine[] = this.getCines();
    const actorsFiltered = actors.filter(el => {
      return el.id !== cine.id;
    });
    localStorage.setItem('cines', JSON.stringify(actorsFiltered));
  }
  private genId(cines: Cine[]) {
    return cines.length + 1;
  }
}
