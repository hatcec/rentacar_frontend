import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, GetModelByIdRequestParams, GetModelByIdResponse, ModelsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { sourceMapsEnabled } from 'process';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-model-details-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './model-details-page.component.html',
  styleUrl: './model-details-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelDetailsPageComponent implements OnInit {
  modelId: number = this.activatedRoute.snapshot.params["modelId"];
  model!:GetModelByIdResponse;
  constructor(private modelService: ModelsControllerService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getByModelId();
  }
  getByModelId(){

    const requestParams: GetModelByIdRequestParams = {
      id: this.modelId // this.modelId, isteğin yapılacağı modelin ID değeri olmalıdır
    };
    this.modelService.getModelById(requestParams).subscribe((res)=>{
      console.log(res);
      const cardto=res;
    });
  }
}