import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { TableDirective } from '../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../shared/components/button/button.component';
@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent,TableDirective,
    ButtonComponent,
    RouterModule],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {

  users: any[] = [];
  errorMessage: string = ''
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }


  ngOnInit(): void {
    this.loadUsers();

  }

  async loadUsers() {
    try {
      const token: any = localStorage.getItem('token');
      const response = await this.authService.getAllUsers(token);
      if (response && response.statusCode === 200 && response.ourUsersList) {
        this.users = response.ourUsersList;
      } else {
        this.showError('No users found.');
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  async deleteUser(userId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const token: any = localStorage.getItem('token');
        await this.authService.deleteUser(userId, token);
        // Refresh the user list after deletion
        this.loadUsers();
      } catch (error: any) {
        this.showError(error.message);
      }
    }
  }

  navigateToUpdate(userId: string) {
    this.router.navigate(['/update', userId]);
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''; // Clear the error message after the specified duration
    }, 3000);
  }
}