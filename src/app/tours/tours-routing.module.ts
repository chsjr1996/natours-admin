import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';

const routes: Routes = [{ path: '', component: ToursListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursRoutingModule {}
