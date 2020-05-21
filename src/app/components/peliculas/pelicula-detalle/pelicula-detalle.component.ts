import { PeliculaService } from '../pelicula.service';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';


@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.scss']
})
export class PeliculaDetalleComponent {
  @Input() pelicula: Pelicula;
  @Output() peliculaDelete: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _peliculaService: PeliculaService) {}

  onDelete() {
    this._peliculaService.deletePelicula(this.pelicula);
    this.onBack();
  }
  onBack() {
    this.back.emit();
  }
}
