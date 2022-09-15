import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente2Component } from './components/componente2/componente2.component';


//crear el array con las rutas a cada componente.
import {RouterModule, Routes } from '@angular/router';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoDetalleComponent } from './components/alumno-detalle/alumno-detalle.component';


export const routes: Routes = [
  {
    path:'c1',
    component:Componente1Component
  },
  {
    path:'c2',
    component:Componente2Component
  },
  {
    path:'c3/:reserva',
    component:Componente3Component
  },
  // {
  //   path:'lista-alumnos',
  //   component:AlumnoListComponent,
  //   // children:[
  //   //   {
  //   //     path:'detalle-alumno',
  //   //     component:AlumnoDetalleComponent
  //   //   }
  //   // ]

  // },
  {
    path:'detalle-alumno/:id',
    component:AlumnoDetalleComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente3Component,
    Componente2Component,
    AlumnoListComponent,
    AlumnoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
