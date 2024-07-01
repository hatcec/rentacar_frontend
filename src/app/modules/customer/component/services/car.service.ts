import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BASIC_URL = ["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class CarService {
 // private readonly controllerUrl = `${environment.apiUrl}/cars`;
  constructor(private httpClient: HttpClient) { }

  // createCar(car: CarAddItemDto): Observable<void> {
  //   return this.httpClient.post<void>(this.controllerUrl, car);
  // }

  // getCars(): Observable<CarListItemDto[]>{
  //   return this.httpClient.get<CarListItemDto[]>(this.controllerUrl)

  // }

  getCarById(id: number): Observable<any>{
   
    return this.httpClient.post(BASIC_URL + "/api/v1/cars/get/", id);
  }

  // updateCarById(id: number, request: UpdateCarRequest): Observable<UpdateModelResponse>{
  //   const url =  `${this.controllerUrl}/${id}`; 
  //   return this.httpClient.put<UpdateCarResponse>(url, request);
  // }

  // deleteCarById(id: number): Observable<void>{
  //   const url = `${this.controllerUrl}/${id}`; 
  //   return this.httpClient.delete<void>(url); 
  // }
}