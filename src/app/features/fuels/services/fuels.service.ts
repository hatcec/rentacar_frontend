import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  GetAllFuelResponse,
  GetFuelByIdRequestParams,
  GetFuelByIdResponse,
} from '../../../shared/services/api';

@Injectable({
  providedIn: 'root',
}) // Singleton
export class FuelsService {
  private readonly controllerUrl = `${environment.apiUrl}/api/v1/fuels`;
  // data = [
  //   { id: 1, name: 'Toyota' },
  //   { id: 2, name: 'Ford' },
  //   { id: 3, name: 'Chevrolet' },
  //   { id: 4, name: 'Nissan' },
  //   { id: 5, name: 'Honda' },
  //   { id: 6, name: 'Jeep' },
  //   { id: 7, name: 'Hyundai' },
  //   { id: 8, name: 'Dodge' },
  //   { id: 9, name: 'Kia' },
  //   { id: 10, name: 'GMC' },
  // ];
  constructor(private httpClient: HttpClient) {}
  getFuels(): Observable<GetAllFuelResponse[]> {
    return this.httpClient.get<GetAllFuelResponse[]>(this.controllerUrl);
  }

  getFuelById(
    request: GetFuelByIdRequestParams
  ): Observable<GetFuelByIdResponse> {
    return this.httpClient.get<GetFuelByIdResponse>(
      `${this.controllerUrl}/${request.id}`
    );
  }
}