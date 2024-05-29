import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrandsControllerService, CarDto, CarsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, Model, ModelsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetAllCarResponse } from '../../../../shared/services/api/model/get-all-car-response';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, RouterOutlet, RouterLink, DemoAngularMaterailModule, FormsModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {
  searchModelForm!: FormGroup
  constructor(private carService: CarsControllerService,
    private modelService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private fuelService :FuelsControllerService,
    private transmissionService:TransmissionsControllerService,
    private brandService:BrandsControllerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
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
// submitForm() {
//   const modelName = this.searchModelForm.value;
//   this.carService.getCarsByModelName(modelName).subscribe((cars) => {
//     console.log(modelName);
//     this.cars = cars;
//   });
// }
