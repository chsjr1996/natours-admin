import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour, ToursService } from 'src/app/tours/shared/tours.service';
import { getTestTours } from './test-tours';
import { asyncData } from './async-observable-helpers';

/**
 * Extends the service but initialize the constructor with null to tests purposes.
 */
@Injectable()
export class TestToursService extends ToursService {
  constructor() {
    // @ts-ignore
    super(null);
  }

  tours = getTestTours();

  getTours(): Observable<Tour[]> {
    return asyncData(this.tours);
  }
}
