import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {
  actores: Actor[] = [];
  constructor(public _actorService: ActorService) {

  }

  ngOnInit(): void {
    this.actores = this._actorService.getActores();
  }
}
