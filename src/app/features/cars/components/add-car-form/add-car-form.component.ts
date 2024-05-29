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

  AddCarRequestParams,
  CarsControllerService,
  CreateCarRequest,
  GetAllModelResponse,
  ModelsControllerService,
} from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { AdminService } from '../../../../modules/admin/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, DemoAngularMaterailModule],
  templateUrl: './add-car-form.component.html',
  styleUrl: './add-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCarFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;
  selectedFile!: File;
  // selectedFiles: File[] = []
  imagePreview!: string | ArrayBuffer | null;
  isspinning: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private carServices: CarsControllerService,
    private change: ChangeDetectorRef,
    private modelService: ModelsControllerService,
    private router: Router,
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getModelRelations();
  }
 
  models: GetAllModelResponse[] = [];
  getModelRelations(): void {
    // Brand
    this.modelService.getAllModel().subscribe((models) => {
      this.models = models;
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      modelYear: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      state: ['', [Validators.required]],
      dailyPrice: ['', [Validators.required]],
      modelId: ['', [Validators.required]],

    });
  }

  add() {

    const formData: FormData = new FormData();
    formData.append('modelYear', this.form.value.modelYear);
    formData.append('plate', this.form.value.plate);
    formData.append('state', this.form.value.state);
    formData.append('dailyPrice', this.form.value.dailyPrice);
    formData.append('modelId', this.form.value.modelId);
    //formData.append('image', this.selectedFile);

    this.adminService.caradd(formData).subscribe((res) => {
      if (res.id != null) {
        this.snackBar.open('Car Posted Successfully', 'Close', { duration: 5000 });

        this.router.navigateByUrl('admin/dashboard')
      }
      else {
        this.snackBar.open(res.errorMessage, 'ERROR', { duration: 5000 });
      }
    }
    )
    console.log(formData.getAll);

  //   this.carServices.addCar(request).subscribe({
  //     // Next: Observable'dan gelen veriyi yakaladığımız fonksiyon
  //     next: (response) => {
  //       console.log(response);
  //     },
  //     // Error: Observable'dan gelen hatayı yakaladığımız fonksiyon
  //     error: (error) => {
  //       this.formMessage = error.errorMessage;
  //       this.change.markForCheck();
  //     },
  //     // Complete: Observable'dan gelen veri akışının tamamladığını bildiren fonksiyon, eğer complete çalışırsa observable'dan gelen veri akışı sona erer.
  //     complete: () => {
  //       this.formMessage = 'Car added successfully';
  //       this.form.reset();
  //       this.change.markForCheck();

  //       setTimeout(() => {
  //         this.router.navigate(['/management', 'cars']);
  //       }, 2000);
  //     },
  //   });
 }


  // const request: AddCarRequestParams = {
  //    createCarRequest: formData
  //  };
  // // // const formData=new FormData();
  // // formData.append('image', this.selectedFile);
  // const request: AddCarRequestParams = {
  //   createCarRequest: {
  //     modelYear: this.form.value.modelYear,
  //     plate: this.form.value.plate,
  //     state: this.form.value.state,
  //     dailyPrice: this.form.value.dailyPrice,
  //     modelId: this.form.value.modelId,

  //   },
  // };
  // const createCarRequest: CreateCarRequest = {
  //   modelYear: this.form.value.modelYear,
  //   plate: this.form.value.plate,
  //   state: this.form.value.state,
  //   dailyPrice: this.form.value.dailyPrice,
  //   modelId: this.form.value.modelId,
  //   image: this.selectedFile
  // };

  // const request: AddCarRequestParams = {
  //   createCarRequest: createCarRequest
  // };

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields';
      return;
    }

    this.add();
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];//?işareti sildşm eventten sonra[file[0]]
    this.previewImage();
  }
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);

  }
}
