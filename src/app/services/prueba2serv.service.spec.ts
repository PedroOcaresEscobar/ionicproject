import { TestBed } from '@angular/core/testing';

import { Prueba2servService } from './prueba2serv.service';

describe('Prueba2servService', () => {
  let service: Prueba2servService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prueba2servService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
