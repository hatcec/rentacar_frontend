import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [
    CommonModule, RouterModule, HomeLayoutComponent,NavbarComponent
  ],
  templateUrl:  './management-page.component.html',
  styleUrl: './management-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent { }
