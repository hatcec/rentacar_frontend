import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditCarFormComponent } from '../../../../features/cars/components/edit-car-form/edit-car-form.component';
import { CarsListTableComponent } from '../../../../features/cars/components/cars-list-table/cars-list-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-edit-car-page',
  standalone: true,
  imports: [ CommonModule,
    EditCarFormComponent,
  ],
  templateUrl: './management-edit-car-page.component.html',
  styleUrl: './management-edit-car-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditCarPageComponent implements OnInit {
  carId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCarIdFromRoute();
  }

  private getCarIdFromRoute() {
    this.route.params.subscribe((params) => {
      const carId = params['carId'];
      if (!carId) return;

      this.carId = Number(carId);
    });
  }
}