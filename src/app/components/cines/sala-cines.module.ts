import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CineTablaComponent } from './cine-tabla/cine-tabla.component';
import { CineListadoComponent } from './cine-listado/cine-listado.component';
import { CineService } from './cine.service';
import { SalaCinesRoutingModule } from './sala-cines-routing.module';
import { CommonModule } from '../../common/common.module';

@NgModule({
  declarations: [
    CineTablaComponent,
    CineListadoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SalaCinesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CineService]
})
export class SalaCinesModule { }


















