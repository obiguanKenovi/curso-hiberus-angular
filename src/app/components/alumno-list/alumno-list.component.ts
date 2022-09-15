import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {



  alumnos:any[]=[
    {comportamiento:'bueno',repetidor:true,nombre:'José',apellido:'Matos',nota:7},
    {comportamiento:'bueno',repetidor:false,nombre:'Dayabel',apellido:'Hernandez',nota:9},
    {comportamiento:'regular',repetidor:false,nombre:'Julio',apellido:'Gonzalez',nota:5.9},
    {comportamiento:'malo',repetidor:true,nombre:'Manuel',apellido:'Diaz',nota:3.4},
    {comportamiento:'malo',repetidor:false,nombre:'Carlos',apellido:'Lopez',nota:4.0},
    {comportamiento:'malorrr',repetidor:false,nombre:'xxx',apellido:'yyy',nota:4.0},
  ]


  constructor(
    public _listaAlumno:AlumnosService
  ) { }

  ngOnInit(): void {
  }

}
