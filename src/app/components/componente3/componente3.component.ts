import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IDatosReserva } from '../../interfaces/datosreserva.interface';


@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  hotel:string='';

  datoReserva!:IDatosReserva;

  constructor(
    private  _activateRoute:ActivatedRoute
  ) {
      console.log( this._activateRoute );
      this.hotel= this._activateRoute.snapshot.params['reserva'];
      console.log(this.hotel);
      //Para el queryParams.
      this._activateRoute.snapshot.queryParams['entrada']
      this.datoReserva={
        entrada:this._activateRoute.snapshot.queryParams['entrada'],
        salida:this._activateRoute.snapshot.queryParams['salida'],
        personas:this._activateRoute.snapshot.queryParams['personas'],
        habitacion:this._activateRoute.snapshot.queryParams['habitacion'],
      };
   }

  ngOnInit(): void {
  }

}
