import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HomeLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authServive: AuthService,
    private router: Router,
  ){  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }

  login(){
    console.log(this.loginForm.value);
    
    this.authServive.login(this.loginForm.value).subscribe((res) => {
      console.log(res);

      if(res.userId != null){
        const user = {
          userId: res.userId,
          role: res.userRole
        }
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        if(StorageService.isAdminLoggedIn())
          this.router.navigateByUrl("/admin/dashboard");
        else
        this.router.navigateByUrl("/customer/dashboard")

      } else {
        
        console.error("bad crediantials");
        
      }
    })
  }
}
