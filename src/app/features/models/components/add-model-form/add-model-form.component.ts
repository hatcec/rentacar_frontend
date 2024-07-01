import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  ModelsControllerService,
  AddModelRequestParams,
  BrandsControllerService,
  FuelsControllerService,
  TransmissionsControllerService,
  GetAllBrandResponse,
  
  GetAllFuelResponse,
  GetAllTransmissionResponse,
} from '../../../../shared/services/api';
import { Router, RouterModule } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    RouterModule,
    DemoAngularMaterailModule
  ],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddModelFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;
  selectedFile!: File;
  imagePreview!: string | ArrayBuffer | null;
  isspinning: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private modelsService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private brandsService: BrandsControllerService,
    private fuelsService: FuelsControllerService,
    private transmissionsService: TransmissionsControllerService,
    private snackBar:MatSnackBar,   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getModelRelations();
  }
  brands: GetAllBrandResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];

  getModelRelations(): void {
    // Brand
    this.brandsService.getAllBrand().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAllFuel().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

    // Transmission
    this.transmissionsService.getAllTransmission().subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      });
  }
  createForm() {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      fuelId: ['', [Validators.required]],
      transmissionId: ['', [Validators.required]],
    });
  }

  add() {
    const request: AddModelRequestParams = {
      createModelRequest: {
        name: this.form.value.name,
        brandId: this.form.value.brandId,
        fuelId: this.form.value.fuelId,
        transmissionId: this.form.value.transmissionId,
      },
    };
    console.log(request);
    this.modelsService.addModel(request).subscribe({
      next: (response) => {
        // Next: Observable'dan gelen veri yakaladığımız fonksiyon
        console.log(response);
      },
      error: (error) => {
        // Error: Observable'dan gelen hata yakaladığımız fonksiyon
        this.formMessage = error.error.message;
        this.change.markForCheck(); // OnPush olduğu için bir sonraki bir olaya kadar değişikliği algılamaz. Böylece biz manuel olarak değişikliği algılamasını sağlıyoruz.
      },
      complete: () => {
        // Complete: Observable'dan gelen veri akışının tamamlandığını bildiren fonksiyon. Complete çalıştığı taktirde observable'dan gelen veri akışı sona erer.
       this.snackBar.open('Model added successfully', 'Close', {duration:5000});
        // this.formMessage = 'Model added successfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'models']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields';
      this.snackBar.open('Please fill all required fields', 'Close', {duration:5000});
      return;
    }

    this.add();
  }
  onFileSelected(event: any) {
    this.selectedFile = event?.target.files[0];
    this.previewImage();
    this.change.markForCheck();
  }
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
    this.change.markForCheck();
    
  }
  
}
