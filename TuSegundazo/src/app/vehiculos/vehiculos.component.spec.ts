import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosComponent } from './vehiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculos.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';


describe('VehiculosComponent', () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  let debug: DebugElement;
  let vehiculosServicioMock;
  let vehiculosPrueba = [
    new Vehiculo(1,"Renault","Kangoo","VU Express",2017,93272,"Blanco","https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"),
    new Vehiculo(2,"Chevrolet","Spark","Life",2018,55926,"Plata","https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"),
    new Vehiculo(3,"Chevrolet","Sail","LT Sedan",2016,94321,"Rojo","https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png")

  ]

  beforeEach(async () => {
    vehiculosServicioMock = jasmine.createSpyObj(['obtenerVehiculos']);

    vehiculosServicioMock.obtenerVehiculos.and.returnValue(of(vehiculosPrueba));
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculosComponent ],
      providers: [{provide: VehiculosService, useValue: vehiculosServicioMock }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement
  });

  it('Deben existir 4 filas', () => {
    expect(debug.queryAll(By.css('table thead tr'))).toHaveSize(1);
    expect(debug.queryAll(By.css('table tbody tr'))).toHaveSize(3);
  });


});
