import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { TransmissionsListTableComponent } from '../../../features/transmissions/components/transmissions-list-table/transmissions-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-transmissions-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TransmissionsListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-transmissions-page.component.html',
  styleUrl: './management-transmissions-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementTransmissionsPageComponent { }
