import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FuelsListBaseComponent } from '../fuels-list-base/fuels-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { FuelsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-fuels-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective,
    ButtonComponent,
    RouterModule,
   
  ],
  templateUrl: './fuels-list-table.component.html',
  styleUrl: './fuels-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuelsListTableComponent extends FuelsListBaseComponent {
  //showDeleteConfirmation: boolean = false;
  //deletingFuelId: number | null = null;

  constructor(
    private fuelsControllerService: FuelsControllerService,
    change: ChangeDetectorRef
  ) {
    // Alt sınıfta bir constructor tanımlandığında super() ile üst sınıfın constructor'ı da çağrılmalıdır.
    super(fuelsControllerService, change); // super ana sınıfın constructor'ını çağırır.
  }
  deleteFuel(id: number) {
    this.fuelsControllerService.deleteFuel({ id }).subscribe({
      complete: () => {
        this.getFuelsList();
      },
    });
  }

 
}