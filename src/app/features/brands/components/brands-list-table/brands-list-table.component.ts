import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective,
    ButtonComponent,
    RouterModule,
   
  ],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListTableComponent extends BrandsListBaseComponent {
  //showDeleteConfirmation: boolean = false;
  //deletingBrandId: number | null = null;

  constructor(
    private brandsControllerService: BrandsControllerService,
    change: ChangeDetectorRef
  ) {
    // Alt sınıfta bir constructor tanımlandığında super() ile üst sınıfın constructor'ı da çağrılmalıdır.
    super(brandsControllerService, change); // super ana sınıfın constructor'ını çağırır.
  }
  deleteBrand(id: number) {
    this.brandsControllerService.deleteBrand({ id }).subscribe({
      complete: () => {
        this.getBrandsList();
      },
    });
  }

 
}