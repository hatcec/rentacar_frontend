import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllCarResponse, GetAllTransmissionResponse, GetCarByIdRequestParams, GetCarByIdResponse, CarsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { sourceMapsEnabled } from 'process';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-details-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './car-details-page.component.html',
  styleUrl: './car-details-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailsPageComponent implements OnInit {
  carId: number = this.activatedRoute.snapshot.params["carId"];
  car!:GetCarByIdResponse;
  constructor(private carService: CarsControllerService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getByCarId();
  }
  getByCarId(){

    const requestParams: GetCarByIdRequestParams = {
      id: this.carId // this.carId, isteğin yapılacağı carin ID değeri olmalıdır
    };
    this.carService.getCarById(requestParams).subscribe((res)=>{
      console.log(res);
      const cardto=res;
    });
  }
}