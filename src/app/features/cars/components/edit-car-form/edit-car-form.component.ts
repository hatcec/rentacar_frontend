import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CarsControllerService, GetAllModelResponse, ModelsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-car-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, DemoAngularMaterailModule],
  templateUrl: './edit-car-form.component.html',
  styleUrl: './edit-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCarFormComponent implements OnInit {
  @Input() carId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private carsService: CarsControllerService,
    private change: ChangeDetectorRef,
    private modelService: ModelsControllerService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCar();
  }

  createForm() {
    this.form = this.fb.group({
      modelName: ['', [Validators.required]],
      modelYear: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      state: ['', [Validators.required]],
      dailyPrice: ['', [Validators.required]],
      modelId: ['', [Validators.required]],
      brandName: ['', [Validators.required]]
    });
  }
  models: GetAllModelResponse[] = [];
  getModel() {
    this.modelService.getAllModel().subscribe((models) => {
      this.form.patchValue({
        models
      });
    });
  }
  getCar() {
    this.carsService.getCarById({ id: this.carId }).subscribe((car) => {
      // this.form.patchValue({
        const carDto=car; 
        this.form.patchValue(carDto);
        // modelName: car.modelName,
        // brandName: car.brandName,
        // modelYear: car.modelYear,
        // plate: car.plate,
        // state: car.state,
        // dailyPrice: car.dailyPrice,
        // modelId: car.modelId
      //});
    });
  }

  edit() {
    this.carsService.updateCar({
      updateCarRequest: {
        id: this.carId,
      },
    })
      .subscribe({
        complete: () => {
          this.snackBar.open('Car updated successfully', 'Close', { duration: 5000 });
          this.change.markForCheck();

          setTimeout(() => {
            this.router.navigate(['/admin', 'dashboard']);
          }, 2000);
        },
      });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.snackBar.open('Please fill the form correctly', 'Close', { duration: 5000 });

      return;
    }

    this.edit();
  }
}