import { TestBed } from '@angular/core/testing';

import { CustomersServicesService } from './customers-services.service';

describe('CustomersServices+Service', () => {
  let service: CustomersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
