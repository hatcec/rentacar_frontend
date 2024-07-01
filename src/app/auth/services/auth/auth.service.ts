import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASIC_URL = ["http://localhost:8080"];
  constructor(private http: HttpClient) { }

  register(signupRequest: any): Observable<any> {
    return this.http.post(this.BASIC_URL + "/api/v1/auth/signup", signupRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.BASIC_URL + "/api/v1/auth/login", loginRequest);
  }
  // register(signupRequest: any): Observable<any> {
  //   return this.http.post(this.BASIC_URL + "/api/v1/auth/signup", signupRequest);
  // }

  // login(loginRequest: any): Observable<any> {
  //   return this.http.post(this.BASIC_URL + "/api/v1/auth/login", loginRequest);
  // }
  async getAllUsers(token:string):Promise<any>{
    const url = `${this.BASIC_URL}/api/v1/auth/admin/get-all-users`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response =  this.http.get<any>(url, {headers}).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }
  async deleteUser(userId: string, token:string):Promise<any>{
    const url = `${this.BASIC_URL}/api/v1/auth/admin/delete/${userId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response =  this.http.delete<any>(url, {headers}).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }

  async updateUSer(userId: string, userData: any, token:string):Promise<any>{
    const url = `${this.BASIC_URL}/api/v1/auth/admin/update/${userId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response =  this.http.put<any>(url, userData, {headers}).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }

  /***AUTHEMNTICATION METHODS */
  logOut(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    }
  }
  async getYourProfile(token: string) {
    const url = `${this.BASIC_URL}/api/v1/auth/adminuser/get-profile`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try {
      const response = this.http.get<any>(url, { headers }).toPromise()
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getUsersById(userId: string, token:string):Promise<any>{
    const url = `${this.BASIC_URL}/api/v1/auth/admin/get-users/${userId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response =  this.http.get<any>(url, {headers}).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }
  isAuthenticated(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token;
    }
    return false;

  }

  isAdmin(): boolean {
    if(typeof localStorage !== 'undefined'){
      const role = localStorage.getItem('role');
      return role === 'ADMIN'
    }
    return false;

  }

  isUser(): boolean {
    if(typeof localStorage !== 'undefined'){
      const role = localStorage.getItem('role');
      return role === 'USER'
    }
    return false;

  }
  // adminOnly() {
  //   return this.isAuthenticated() && this.isAdmin();
  // }

}


