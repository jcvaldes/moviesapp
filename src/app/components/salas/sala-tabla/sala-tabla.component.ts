import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Sala } from '../sala.model';
import { SalaService } from '../sala.service';


@Component({
  selector: 'app-sala-tabla',
  templateUrl: './sala-tabla.component.html',
  styleUrls: ['./sala-tabla.component.scss']
})
export class SalaTablaComponent {
  searchTerm: string;
  @Output() salaSelected: EventEmitter<Sala> = new EventEmitter<Sala>();
  @Input() salas: Sala[] = [];
  constructor(
    public _salaService: SalaService
  ) {
    this.salas = this._salaService.getSalas();
  }
  onSelect(sala) {
    debugger
    this.salaSelected.emit(sala);
  }

}
