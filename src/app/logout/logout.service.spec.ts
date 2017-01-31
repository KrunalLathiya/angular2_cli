/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogoutService } from './logout.service';

describe('LogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutService]
    });
  });

  it('should ...', inject([LogoutService], (service: LogoutService) => {
    expect(service).toBeTruthy();
  }));
});
