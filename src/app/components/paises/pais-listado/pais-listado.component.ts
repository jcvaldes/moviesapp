import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';
import * as _ from 'lodash';
import { PaisesTablaComponent } from '../paises-tabla/paises-tabla.component';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.scss']
})
export class PaisListadoComponent {
  pais: Pais;
  paises: Pais[] = [];
  paisesDesactivados: string[] = [];
  @ViewChild(PaisesTablaComponent, { static: true }) paisTabla: PaisesTablaComponent;
  url =  'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  onSelected(pais: Pais) {
    this.pais = pais;
  }
  onDeactivated(pais: Pais) {
    this.paises = this.paisTabla.paises;
    this.paisesDesactivados.push(pais.name);
    this.paises = _.differenceWith(this.paises, this.paisesDesactivados,({ name }, id) => name === id);
    this.pais = null;
  }
}
