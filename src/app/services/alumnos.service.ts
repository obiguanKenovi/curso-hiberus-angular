import { Injectable } from '@angular/core';
import { IAlumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private  _listaAlumnos:IAlumno[]=[];

  constructor() {

    this.cargarListaAlumnos();

   }


   get listAlumnos()
   {
      return [...this._listaAlumnos];
   }

  private cargarListaAlumnos():IAlumno[]|[]{
   return this._listaAlumnos=[
      {comportamiento:'bueno',repetidor:true,nombre:'José',apellido:'Matos',nota:7},
      {comportamiento:'bueno',repetidor:false,nombre:'Dayabel',apellido:'Hernandez',nota:9},
      {comportamiento:'regular',repetidor:false,nombre:'Julio',apellido:'Gonzalez',nota:5.9},
      {comportamiento:'malo',repetidor:true,nombre:'Manuel',apellido:'Diaz',nota:3.4},
      {comportamiento:'malo',repetidor:false,nombre:'Carlos',apellido:'Lopez',nota:4.0},
      {comportamiento:'malorrr',repetidor:false,nombre:'xxx',apellido:'yyy',nota:4.0},
    ]

  }


}
