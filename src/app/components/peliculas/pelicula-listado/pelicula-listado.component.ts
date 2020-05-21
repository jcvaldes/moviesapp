import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: [ './pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  peliculas: Pelicula[];
  @Output() showDetail: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public _peliculaService: PeliculaService) {}

  handleDetail(pelicula) {
    this.showDetail.emit(pelicula);
  }
  ngOnInit(): void {
    this.peliculas = this._peliculaService.getPeliculas();
  }
  onDelete(pelicula: Pelicula) {
    debugger
  }
}
