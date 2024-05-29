import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CarsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective,
    ButtonComponent,
    RouterModule,
   
  ],
  templateUrl: './cars-list-table.component.html',
  styleUrl: './cars-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListTableComponent extends CarsListBaseComponent {
  //showDeleteConfirmation: boolean = false;
  //deletingCarId: number | null = null;

  constructor(
    private carsControllerService: CarsControllerService,
    change: ChangeDetectorRef
  ) {
    // Alt sınıfta bir constructor tanımlandığında super() ile üst sınıfın constructor'ı da çağrılmalıdır.
    super(carsControllerService, change); // super ana sınıfın constructor'ını çağırır.
  }
  deleteCar(id: number) {
    this.carsControllerService.deleteCar({ id }).subscribe({
      complete: () => {
        this.getCarsList();
      },
    });
  }

 
}