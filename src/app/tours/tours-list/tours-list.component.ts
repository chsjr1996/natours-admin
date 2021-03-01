import { Component, OnInit } from '@angular/core';
import { Tour, ToursService } from '../shared/tours.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss'],
})
export class ToursListComponent implements OnInit {
  tours: Tour[] = [];
  displayedColumns: string[] = [
    'name',
    'price',
    'difficulty',
    'ratings_average',
    'ratings_quantity',
    'secret_tour',
    'is_active',
  ];

  constructor(private tourService: ToursService) {}

  ngOnInit(): void {
    this.tourService.getTours().subscribe((response) => {
      this.tours = response;
    });
  }
}
