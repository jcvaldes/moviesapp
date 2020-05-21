import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorListadoComponent } from '../actor-listado/actor-listado.component';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.scss']
})
export class ActorTablaComponent implements OnInit {
  searchTerm: string;
  @Output() actorSelected: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Input() actores: Actor[];
  constructor(public _actorService: ActorService) {}

  onSelect(actor) {
    this.actorSelected.emit(actor);
  }
  ngOnInit(): void {
    this.actores = JSON.parse(localStorage.getItem('actores')) || [];
  }
}
