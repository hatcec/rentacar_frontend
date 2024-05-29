import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditFuelFormComponent } from '../../../../features/fuels/components/edit-fuel-form/edit-fuel-form.component';
import { FuelsListTableComponent } from '../../../../features/fuels/components/fuels-list-table/fuels-list-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-edit-fuel-page',
  standalone: true,
  imports: [ CommonModule,
    EditFuelFormComponent,
  ],
  templateUrl: './management-edit-fuel-page.component.html',
  styleUrl: './management-edit-fuel-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditFuelPageComponent implements OnInit {
  fuelId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getFuelIdFromRoute();
  }

  private getFuelIdFromRoute() {
    this.route.params.subscribe((params) => {
      const fuelId = params['fuelId'];
      if (!fuelId) return;

      this.fuelId = Number(fuelId);
    });
  }
}