import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrandsControllerService, CarDto, CarsControllerService, FuelsControllerService, ModelsControllerService, TransmissionsControllerService } from '../../../shared/services/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { DemoAngularMaterailModule } from '../../../DemoAngularMaterialModule';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { StorageService } from '../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink, DemoAngularMaterailModule, ButtonComponent
  ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  logout(){
    StorageService.logout();
    this.router.navigateByUrl('login');
   }
  searchModelForm!: FormGroup
  constructor(private carService: CarsControllerService,
    private modelService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private fuelService :FuelsControllerService,
    private transmissionService:TransmissionsControllerService,
    private brandService:BrandsControllerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router:Router
  ) { }
 
  cars: CarDto[] = [];

  // getModelCardText(car: GetAllCarResponse): any {
  //   return this.models.find((model) => model.id === car.modelId)?.name

  // }



  getAllCar(): void {
   

    this.carService.getAllCar().subscribe((cars) => {

    this.cars = cars;
    

  });
  }





ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllCar();
  // this.searchModelForm = this.fb.group({
  //   modelName: [null, [Validators.required]]
  // })
}
deleteCar(id: number) {
  this.carService.deleteCar({ id }).subscribe({
    complete: () => {
      this.snackBar.open('Car Deleted Successfully!', 'Close', { duration: 5000 });
      this.change.markForCheck();
      this.getAllCar();
      
    },
  });
}

}
