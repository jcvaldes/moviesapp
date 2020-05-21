import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CineListadoComponent } from './cine-listado/cine-listado.component';

const routes: Routes = [
  {
    path: 'cines',
    children: [
      { path: 'listado', component: CineListadoComponent },
      // { path: ':id', component: PeliculaAltaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SalaCinesRoutingModule { }
