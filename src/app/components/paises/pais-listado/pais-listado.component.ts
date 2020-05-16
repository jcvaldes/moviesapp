import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.scss']
})
export class PaisListadoComponent implements OnInit {
  paises: Pais[] = [];
  url =  'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.get<Pais>(this.url).subscribe(paises => {
      this.paises = paises;
    })
  }

}
