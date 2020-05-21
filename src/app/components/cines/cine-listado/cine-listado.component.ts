import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';
import { CineTablaComponent } from '../cine-tabla/cine-tabla.component';
import { Pelicula } from '../../peliculas/pelicula.model';

@Component({
  selector: 'app-cine-listado',
  templateUrl: './cine-listado.component.html',
  styleUrls: ['./cine-listado.component.scss']
})
export class CineListadoComponent implements OnInit, OnChanges {
  cine: Cine;
  cines: Cine[] = [];
  @Input() pelicula: Pelicula[];
  @ViewChild(CineTablaComponent, { static: true }) cineTabla: CineTablaComponent;

  constructor(public _cineService: CineService) { }
  onSelected(cine: Cine) {
    this.cine = cine;
  }
  onDeleted(cine: Cine) {
    this.cines = this.cineTabla.cines.filter(i => {
      return i !== cine;
    });
    this.cine = null;
  }
  ngOnInit(): void {
    if (this.cines && this.cines.length === 0) {
      this.cines = this.cineTabla.cines;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.pelicula && changes.pelicula.currentValue.cines) {
      this.cine = undefined;
      this.cines = changes.pelicula.currentValue.cines;
    }
  }
}
