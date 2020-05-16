import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pais } from '../pais.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.scss']
})
export class PaisDetalleComponent implements OnInit {
  form: FormGroup;
  constructor(
    public _paisService: PaisService,
    private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl(null,  Validators.required)
    });
    this.route.params.subscribe((data)=> {
      this.form.get('name').setValue(data.name);
      console.log(data);
    });
    this.route.queryParamMap.subscribe((data)=> {
      debugger
      this.form.get('name').setValue(data);
      console.log(data);
    });

  }

  ngOnInit(): void {
  }
  onSubmit() {
    // const pais: Pais = {
    //   id: 0,
    //   nombre: this.form.value.nombre,
    //   tipo: this.form.value.tipo,
    //   fechaEstreno: this.form.value.fechaEstreno,
    //   cantidadPublico: this.form.value.cantidadPublico,
    //   fotoPais: this.form.value.fotoPais
    // };
    // this._paisService.altaPais(pais);
    Swal.fire('Atención', 'El pais ha sido actualizado', 'success');
  }
}
