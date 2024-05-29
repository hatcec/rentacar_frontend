import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { CarsListTableComponent } from '../../../features/cars/components/cars-list-table/cars-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-cars-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CarsListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-cars-page.component.html',
  styleUrl: './management-cars-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCarsPageComponent { }
