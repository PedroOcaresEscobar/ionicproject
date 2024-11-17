import { TestBed } from '@angular/core/testing';

import { ServiceapiService } from './serviceapi.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ServiceapiService', () => {
  let service: ServiceapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ServiceapiService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ServiceapiService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('deberia llamar a obtener personajes', (done:DoneFn) =>{


  })
});
