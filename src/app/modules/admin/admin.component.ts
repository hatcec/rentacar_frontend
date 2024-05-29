import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeLayoutComponent } from "../../shared/layouts/home-layout/home-layout.component";
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, AdmindashboardComponent, HomeLayoutComponent]
})
export class AdminComponent {

}
