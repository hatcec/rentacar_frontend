import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HomeLayoutComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [null,[Validators.required, Validators.email]],
      firstName:  [null,[Validators.required]],
      lastName:  [null,[Validators.required]],
      city:[null,[Validators.required]],
      password:  [null,[Validators.required]],
      confirmPassword:  [null,[Validators.required, this.confirmationValidate]],
    })
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  signup(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {

      console.log(res);
    })
  }

 }