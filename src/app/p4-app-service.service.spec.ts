import { TestBed } from '@angular/core/testing';
import { P4AppServiceService } from './p4-app-service.service';

describe('P4AppServiceService', () => {
  let service: P4AppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P4AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
