import { PeliculaService } from './../pelicula.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  form: FormGroup;
  constructor(public _peliculaService: PeliculaService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      tipo: new FormControl(null, Validators.required),
      fechaEstreno: new FormControl(new Date(), Validators.required),
      cantidadPublico: new FormControl(null, Validators.required),
      fotoPelicula: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this._peliculaService.altaPelicula(this.createPelicula());
    this.form.reset();
    Swal.fire('Atención', 'La película ha sido guardada', 'success');
  }
  createPelicula(){
    const pelicula: Pelicula = {
      id: 0,
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      fechaEstreno: this.form.value.fechaEstreno,
      cantidadPublico: this.form.value.cantidadPublico,
      fotoPelicula: this.form.value.fotoPelicula
    };
    return pelicula;
  }
}
