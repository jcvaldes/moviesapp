import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';


@Component({
  selector: 'app-cine-tabla',
  templateUrl: './cine-tabla.component.html',
  styleUrls: ['./cine-tabla.component.scss']
})
export class CineTablaComponent {
  searchTerm: string;
  @Output() cineSelected: EventEmitter<Cine> = new EventEmitter<Cine>();
  @Input() cines: Cine[] = [];
  constructor(
    public _cineService: CineService
  ) {
    this.cines = this._cineService.getCines();
  }
  onSelect(cine) {
    debugger
    this.cineSelected.emit(cine);
  }

}
