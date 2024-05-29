import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
// import { CarListItemDto } from '../../models/car-list-item-dto';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
// import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './cars-list-menu.component.html',
  styleUrl: './cars-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush ile değişikliklerin kontrolü optimize edilir.
})
export class CarsListMenuComponent
  extends CarsListBaseComponent
  implements OnInit
{
  // override ngOnInit(): void {
  //   console.log('CarsListMenuComponent');
  //   super.ngOnInit();
  // }

  get carsMenuItems(): MenuItem[] {
    return (
      this.cars?.map((car) => {
        return {
          label: car.plate!, // ! : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectCar(car),
        };
      }) ?? []
    );
  }
}