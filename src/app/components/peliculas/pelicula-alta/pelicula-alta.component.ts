import { PeliculaService } from './../pelicula.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';
import { ActivatedRoute } from '@angular/router';
import { CineService } from '../../cines/cine.service';
import { Cine } from '../../cines/cine.model';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  cine: Cine;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    public _cineService: CineService,
    public _peliculaService: PeliculaService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      tipo: new FormControl(null, Validators.required),
      fechaEstreno: new FormControl(new Date(), Validators.required),
      cantidadPublico: new FormControl(null, Validators.required),
      fotoPelicula: new FormControl(null, Validators.required),
    });
    this.route.queryParams.subscribe(data  => {
      this.cine = this._cineService.getCine(+data.cineId);
      this.cine.peliculas = [];
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    debugger
    if ( this.cine ) {
      const pelicula = this.createPelicula();
      this.cine.peliculas.push(pelicula);
      this._cineService.updateCine(this.cine);
    } else {
      this._peliculaService.altaPelicula(this.createPelicula());
    }
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
