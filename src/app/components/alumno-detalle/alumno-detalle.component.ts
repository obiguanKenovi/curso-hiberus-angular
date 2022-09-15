import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  alumno!:IAlumno;
  constructor(
    private  _activateRoute:ActivatedRoute
  ) {
    this._activateRoute.queryParams.subscribe(arg => {
      this.alumno={
        comportamiento:arg['comportamiento'],
        nombre:arg['nombre'],
        apellido:arg['apellido'],
        nota:arg['nota'],
      }
    });
    /*
    this.alumno={
      comportamiento:this._activateRoute.snapshot.queryParams['comportamiento'],
      nombre:this._activateRoute.snapshot.queryParams['nombre'],
      apellido:this._activateRoute.snapshot.queryParams['apellido'],
      nota:this._activateRoute.snapshot.queryParams['nota'],
    };
    */
   }

  ngOnInit(): void {
  }

}

