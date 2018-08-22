import { TestBed, inject } from '@angular/core/testing';

import { NgxAdibroEcommerceGridService } from './ngx-adibro-ecommerce-grid.service';

describe('NgxAdibroEcommerceGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAdibroEcommerceGridService]
    });
  });

  it('should be created', inject([NgxAdibroEcommerceGridService], (service: NgxAdibroEcommerceGridService) => {
    expect(service).toBeTruthy();
  }));
});
