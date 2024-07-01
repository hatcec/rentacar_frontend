import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userupdate',
  standalone: true,
  imports: [CommonModule, HomeLayoutComponent, FormsModule],
  templateUrl: './userupdate.component.html',
  styleUrl: './userupdate.component.scss'
})
export class UserupdateComponent  implements OnInit{

  constructor(private readonly authService:AuthService,
    private readonly router: Router,
    private readonly route:ActivatedRoute){}


    userId: any;
    userData: any = {}
    errorMessage:string = ''


  ngOnInit(): void {
    this.getUserById()
      
  }

  async getUserById(){
      this.userId = this.route.snapshot.paramMap.get('id')
      const token = localStorage.getItem('token')
      if(!this.userId || !token){
          this.showError("User ID or Token is Required")
          return;
      }

      try {
        let userDataResponse = await this.authService.getUsersById(this.userId, token)
        const {firstName, lastName, email, role, city} = userDataResponse.users
        this.userData = {firstName, lastName, email, role, city};
        
      } catch (error:any) {
        this.showError(error.message);
      }
  }

  async updateUser(){
    const confitm = confirm("Are you sure you wanna update this user")
    if(!confirm) return
    try{
      const token = localStorage.getItem('token')
      if(!token){
        throw new Error("Token not found")
      }
      const res = await this.authService.updateUSer(this.userId, this.userData, token);
      console.log(res)

      if(res.statusCode === 200){
        this.router.navigate(['/users'])
      }else{
        this.showError(res.message)
      }

    }catch(error:any){
      this.showError(error.message)
    }

  }


  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }
}
