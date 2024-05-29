import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_URL = ["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  caradd(createCarRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api/v1/cars/add", createCarRequest);
  }
}