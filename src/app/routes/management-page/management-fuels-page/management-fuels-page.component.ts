import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { FuelsListTableComponent } from '../../../features/fuels/components/fuels-list-table/fuels-list-table.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-fuels-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FuelsListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-fuels-page.component.html',
  styleUrl: './management-fuels-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementFuelsPageComponent { }
