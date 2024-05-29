import { Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page.component';
import { ManagementBrandsPageComponent } from './management-brands-page/management-brands-page.component';
import { ManagementCreateBrandPageComponent } from './management-brands-page/management-create-brand-page/management-create-brand-page.component';
import { ManagementModelsPageComponent } from './management-models-page/management-models-page.component';
import { ManagementCreateModelPageComponent } from './management-models-page/management-create-model-page/management-create-model-page.component';
import { ManagementEditBrandPageComponent } from './management-brands-page/management-edit-brand-page/management-edit-brand-page.component';
import { ManagementEditModelPageComponent } from './management-models-page/management-edit-model-page/management-edit-model-page.component';
import { ModelDetailsPageComponent } from './management-models-page/model-details-page/model-details-page.component';
import { ManagementFuelsPageComponent } from './management-fuels-page/management-fuels-page.component';
import { ManagementEditFuelPageComponent } from './management-fuels-page/management-edit-fuel-page/management-edit-fuel-page.component';
import { ManagementCarsPageComponent } from './management-cars-page/management-cars-page.component';
import { ManagementEditCarPageComponent } from './management-cars-page/management-edit-car-page/management-edit-car-page.component';
import { ManagementCreateCarPageComponent } from './management-cars-page/management-create-car-page/management-create-car-page.component';
//import { authGuard } from '../../shared/guards/auth.guard';

export const managementRoutes: Routes = [
  {
    path: 'management', // localhost:4200/management
    //canActivate: [authGuard], // Angular Guard yapıları ilgili route'a giriş yapmadan önce çalışacak olan yapılar
    //   data: {
    //     // Route'a özel veri tutma
    //     requiredRoles: ['admin'],
    //   },
    component: ManagementPageComponent,
    // İlk karşılaştığı <router-outlet>'e ManagementPageComponent'i yerleştirir.
    children: [
      {
        path: 'brands', // localhost:4200/management/brands
        component: ManagementBrandsPageComponent,
        // İkinci karşılaştığı <router-outlet>'e ManagementBrandsPageComponent'i yerleştirir.
      },
      {
        path: 'brands/create', // localhost:4200/management/brands/create
        component: ManagementCreateBrandPageComponent,
      },
      {
        path: 'brands/edit/:brandId', // localhost:4200/management/brands/edit/1 // localhost:4200/management/brands/edit/2
        // :brandId , brandId isminde bir route parametresi tanımlar
        component: ManagementEditBrandPageComponent,
      },
      {
        path: 'models', // localhost:4200/management/brands
        component: ManagementModelsPageComponent,
      },
      {
        path: 'models/create', // localhost:4200/management/models/create
        component: ManagementCreateModelPageComponent,
      },
      {
        path: 'models/edit/:modelId', // localhost:4200/management/models/edit/1 // localhost:4200/management/models/edit/2

        component: ManagementEditModelPageComponent,
      },
       {
         path: 'models/detail/:modelId', // localhost:4200/management/models/edit/1 // localhost:4200/management/models/edit/2

         component: ModelDetailsPageComponent,
       },
       {
        path: 'fuels', // localhost:4200/management/fuels
        component: ManagementFuelsPageComponent,
      },
      {
        path: 'fuels/create', // localhost:4200/management/fuels/create
        component: ManagementEditFuelPageComponent,
      },
      {
        path: 'fuels/edit/:fuelId', // localhost:4200/management/fuels/edit/1 // localhost:4200/management/fuel/edit/2

        component: ManagementEditFuelPageComponent,
      },
      {
        path: 'cars', // localhost:4200/management/cars
        component: ManagementCarsPageComponent,
      },
      {
        path: 'cars/create', // localhost:4200/management/cars/create
        component: ManagementCreateCarPageComponent,
      },
      {
        path: 'cars/edit/:carId', // localhost:4200/management/car/edit/1 // localhost:4200/management/car/edit/2

        component: ManagementEditCarPageComponent,
      },
      {
        path: 'transmissions', // localhost:4200/management/transmissions
        component: ManagementCarsPageComponent,
      },
      {
        path: 'transmissions/create', // localhost:4200/management/transmissions/create
        component: ManagementCreateCarPageComponent,
      },
      {
        path: 'transmissions/edit/:transmissionId', // localhost:4200/management/transmissions/edit/1 // localhost:4200/management/transmissions/edit/2

        component: ManagementEditCarPageComponent,
      },
    ],
  },
];
