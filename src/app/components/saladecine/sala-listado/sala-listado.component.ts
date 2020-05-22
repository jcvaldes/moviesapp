import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Sala } from '../sala.model';
import { SalaService } from '../sala.service';
import { SalaTablaComponent } from '../sala-tabla/sala-tabla.component';
import { Pelicula } from '../../peliculas/pelicula.model';

@Component({
  selector: 'app-sala-listado',
  templateUrl: './sala-listado.component.html',
  styleUrls: ['./sala-listado.component.scss']
})
export class SalaListadoComponent implements OnInit, OnChanges {
  sala: Sala;
  salas: Sala[] = [];
  peliculas: Pelicula[];
  @Input() pelicula: Pelicula[];
  @ViewChild(SalaTablaComponent, { static: true }) salaTabla: SalaTablaComponent;

  constructor(public _salaService: SalaService) { }
  onSelected(sala: Sala) {
    this.sala = sala;
    debugger
    this.peliculas = sala.peliculas;
  }
  onDeleted(sala: Sala) {
    this.salas = this.salaTabla.salas.filter(i => {
      return i !== sala;
    });
    this.sala = null;
  }
  ngOnInit(): void {
    if (this.sala && this.salas.length === 0) {
      this.salas = this.salaTabla.salas;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    // if (changes.pelicula && changes.pelicula.currentValue.SalaCines) {
    //   this.sala = undefined;
    //   this.SalaCines = changes.SalaCines.currentValue;
    // }
  }
}
