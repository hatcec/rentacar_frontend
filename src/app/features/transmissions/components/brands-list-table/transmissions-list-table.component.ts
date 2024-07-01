import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { TransmissionsControllerService } from '../../../../shared/services/api';
import { TransmissionsListBaseComponent } from '../brands-list-base/transmissions-list-base.component';

@Component({
  selector: 'app-transmissions-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective,
    ButtonComponent,
    RouterModule,
   
  ],
  templateUrl: './transmissions-list-table.component.html',
  styleUrl: './transmissions-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransmissionsListTableComponent extends TransmissionsListBaseComponent {
  //showDeleteConfirmation: boolean = false;
  //deletingTransmissionId: number | null = null;

  constructor(
    private transmissionsControllerService: TransmissionsControllerService,
    change: ChangeDetectorRef
  ) {
    // Alt sınıfta bir constructor tanımlandığında super() ile üst sınıfın constructor'ı da çağrılmalıdır.
    super(transmissionsControllerService, change); // super ana sınıfın constructor'ını çağırır.
  }
  deleteTransmission(id: number) {
    this.transmissionsControllerService.deleteTransmission({ id }).subscribe({
      complete: () => {
        this.getTransmissionsList();
      },
    });
  }

 
}