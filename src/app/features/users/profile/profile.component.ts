import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../users.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { AuthenticationControllerService } from '../../../shared/services/api';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  constructor(private readonly router:Router, private readonly authService:AuthService, private  readonly authenticationController:AuthenticationControllerService){}



    profileInfo: any;
    errorMessage: string = ''

  async ngOnInit() {
    try {
      const token = localStorage.getItem('token')
      if(!token){
        throw new Error("No Token Found")
      }

      this.profileInfo = await this.authService.getYourProfile(token);
      console.log(this.profileInfo.getYourProfile);
    } catch (error:any) {
      this.showError(error.message)
    }
      
  }


  updateProfile(id: string){
      this.router.navigate(['/update', id])
  }


  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }
}