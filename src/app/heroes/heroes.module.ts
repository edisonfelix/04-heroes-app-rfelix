import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    HeroeComponent,
    HomeComponent,
    BuscarComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
