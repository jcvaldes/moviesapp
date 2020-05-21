import { Component, OnInit, ViewChild } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';
import { ActorTablaComponent } from '../actor-tabla/actor-tabla.component';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {
  actor: Actor;
  actores: Actor[] = [];
  @ViewChild(ActorTablaComponent, { static: true }) actorTabla: ActorTablaComponent;

  constructor(public _actorService: ActorService) {}
  onSelected(actor: Actor) {
    this.actor = actor;
  }
  onDeleted(actor: Actor) {
    this.actores = this.actorTabla.actores.filter(i => {
      return i !== actor;
    });
    this.actor = null;
  }
  ngOnInit(): void {
    this.actores = this._actorService.getActores();
  }
}
