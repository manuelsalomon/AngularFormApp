/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateUserService } from './validate-user.service';

describe('ValidateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateUserService]
    });
  });

  it('should ...', inject([ValidateUserService], (service: ValidateUserService) => {
    expect(service).toBeTruthy();
  }));
});
