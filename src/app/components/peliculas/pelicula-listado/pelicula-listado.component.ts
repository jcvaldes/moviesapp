import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: [ './pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  peliculas: Pelicula[];
  constructor(public _peliculaService: PeliculaService) {

  }

  ngOnInit(): void {
    this.peliculas = this._peliculaService.getPeliculas();
  }

}
