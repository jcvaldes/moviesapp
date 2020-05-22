import { SalaService } from '../sala.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Sala } from '../sala.model';
@Component({
  selector: 'app-sala-alta',
  templateUrl: './sala-alta.component.html',
  styleUrls: ['./sala-alta.component.scss']
})
export class SalaAltaComponent implements OnInit {
  form: FormGroup;
  constructor(public _salaService: SalaService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      foto: new FormControl(null, Validators.required),
      paisOrigen: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this._salaService.altaSala(this.createSala());
    this.form.reset();
    Swal.fire('Atención', 'La sala ha sido guardada', 'success');
  }
  createSala(){
    const sala: Sala = {
      id: 0,
      nombre: this.form.value.nombre,
      paisOrigen: this.form.value.paisOrigen,
      foto: this.form.value.foto
    };
    return sala;
  }
}
