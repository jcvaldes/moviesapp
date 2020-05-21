import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HeroComponent } from './common/hero/hero.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
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
import { FilterPipe } from './common/pipes/filter';
import { PaisTablaComponent } from './components/paises/pais-tabla/pais-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaTablaComponent,
    PeliculaListadoComponent,
    PeliculaDetalleComponent,
    BienvenidaComponent,
    PaisTablaComponent,
    PaisListadoComponent,
    PaisDetalleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [PeliculaService, ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
