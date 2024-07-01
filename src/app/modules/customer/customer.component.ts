import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, CustomerDashboardComponent, HomeLayoutComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

}
