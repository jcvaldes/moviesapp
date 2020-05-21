import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  pelicula: Pelicula;
  constructor() { }
  ngOnInit(): void {
  }
  onDetail(evt) {
    this.pelicula = evt;
  }
  onDelete(evt) {
    this.pelicula = null;
  }
  onBack() {
    this.pelicula = null;
  }
}
