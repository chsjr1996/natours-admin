import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SidebarComponent } from './sidebar.component';

const mat = [MatIconModule, MatListModule, MatRippleModule];

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, ...mat],
  exports: [SidebarComponent],
})
export class SidebarModule {}
