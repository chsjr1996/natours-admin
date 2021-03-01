import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursListComponent } from './tours-list.component';
import { ToursService } from '../shared/tours.service';
import { TestToursService } from 'src/testing/test-tours.service';

describe('ToursListComponent', () => {
  let component: ToursListComponent;
  let fixture: ComponentFixture<ToursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ToursService,
          useClass: TestToursService,
        },
      ],
      declarations: [ToursListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
