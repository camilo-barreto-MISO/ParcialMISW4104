import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = []
  constructor(private vehiculosServicio: VehiculosService) {
    this.vehiculosServicio.obtenerVehiculos().subscribe((veiculos) => {
      this.vehiculos = veiculos;
    });
  }

  ngOnInit(): void {
  }

  cantidadDeVehiculosPorMarca(marca:string): number {
    return this.vehiculos.filter(Vehiculo => Vehiculo.marca == marca).length;
  }

}
