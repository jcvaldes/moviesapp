import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';
import { filter, map } from 'rxjs/operators';
import { GeneratedFile } from '@angular/compiler';
import { Pelicula } from '../../peliculas/pelicula.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.scss']
})
export class PaisListadoComponent implements OnInit {
  pais: Pais;
  paisesDesactivados: string[] = [];
  paises: Pais[] = [];
  searchTerm: string;
  url =  'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.get<Pais>(this.url)
    // .pipe(
    //   filter( i => {
    //     debugger
    //     return i.filter(p => !this.paisesDesactivados.includes(p));
    //   })
    // )
    .subscribe(paises => {
      this.paises = paises;
    });
  }
  onSelected(pais: Pais) {
    this.pais = pais;
  }
  onDeactivated(pais: Pais) {
    this.paisesDesactivados.push(pais.name);
    this.paises = _.differenceWith(this.paises, this.paisesDesactivados,({ name }, id) => name === id);
    this.pais = null;
  }
}
