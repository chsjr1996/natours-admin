import { Tour, ToursService } from './tours.service';
import { asyncData } from 'src/testing/async-observable-helpers';
import { getTestTours } from 'src/testing/test-tours';

describe('ToursService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: ToursService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ToursService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected tours (HttpClient called once', () => {
    const expectedTours: Tour[] = getTestTours();

    httpClientSpy.get.and.returnValue(asyncData(expectedTours));

    service
      .getTours()
      .subscribe(
        (tours) => expect(tours).toEqual(expectedTours, 'expected tours'),
        fail
      );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
