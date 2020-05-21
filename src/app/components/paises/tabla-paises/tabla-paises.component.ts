import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisSelected: EventEmitter<Pais> = new EventEmitter<Pais>();
  @Input() paises: Pais[] = [];
  searchTerm: string;
  url =  'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.get<Pais>(this.url).subscribe(paises => {
      this.paises = paises;
    });
  }

  onSelect(pais) {
    this.paisSelected.emit(pais);
  }
}
