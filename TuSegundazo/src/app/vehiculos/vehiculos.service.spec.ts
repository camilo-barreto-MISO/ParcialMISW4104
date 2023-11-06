/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Vehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculosService]
    });
  });

  it('should ...', inject([VehiculosService], (service: VehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
