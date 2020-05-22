import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HeroComponent } from './common/hero/hero.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actores/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculaService } from './components/peliculas/pelicula.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisListadoComponent } from './components/paises/pais-listado/pais-listado.component';
import { PaisDetalleComponent } from './components/paises/pais-detalle/pais-detalle.component';
import { ActorService } from './components/actores/actor.service';
import { PeliculaTablaComponent } from './components/peliculas/pelicula-tabla/pelicula-tabla.component';
import { PeliculaDetalleComponent } from './components/peliculas/pelicula-detalle/pelicula-detalle.component';
import { PaisTablaComponent } from './components/paises/pais-tabla/pais-tabla.component';
import { ActorTablaComponent } from './components/actores/actor-tabla/actor-tabla.component';
import { ActorDetalleComponent } from './components/actores/actor-detalle/actor-detalle.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SalaListadoComponent } from './components/salas/sala-listado/sala-listado.component';
import { SalaTablaComponent } from './components/salas/sala-tabla/sala-tabla.component';
import { FilterPipe } from './common/pipes/filter';
import { SalaService } from './components/salas/sala.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BusquedaComponent,
    BienvenidaComponent,
    PeliculaAltaComponent,
    PeliculaTablaComponent,
    PeliculaListadoComponent,
    PeliculaDetalleComponent,
    ActorTablaComponent,
    ActorDetalleComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PaisTablaComponent,
    PaisListadoComponent,
    PaisDetalleComponent,
    SalaTablaComponent,
    SalaListadoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [PeliculaService, ActorService, SalaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
