import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditTransmissionFormComponent } from '../../../../features/transmissions/components/edit-transmission-form/edit-transmission-form.component';
import { TransmissionsListTableComponent } from '../../../../features/transmissions/components/transmissions-list-table/transmissions-list-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-edit-transmission-page',
  standalone: true,
  imports: [ CommonModule,
    EditTransmissionFormComponent,
  ],
  templateUrl: './management-edit-transmission-page.component.html',
  styleUrl: './management-edit-transmission-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditTransmissionPageComponent implements OnInit {
  transmissionId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTransmissionIdFromRoute();
  }

  private getTransmissionIdFromRoute() {
    this.route.params.subscribe((params) => {
      const transmissionId = params['transmissionId'];
      if (!transmissionId) return;

      this.transmissionId = Number(transmissionId);
    });
  }
}