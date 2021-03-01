import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursListComponent } from './tours-list/tours-list.component';

const mat = [MatTableModule];

@NgModule({
  declarations: [ToursListComponent],
  imports: [CommonModule, ToursRoutingModule, ...mat],
})
export class ToursModule {}
