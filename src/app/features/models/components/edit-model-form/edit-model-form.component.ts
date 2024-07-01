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
import { Router } from '@angular/router';
import { BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllTransmissionResponse, ModelsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';

@Component({
  selector: 'app-edit-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DemoAngularMaterailModule, ButtonComponent],
  templateUrl: './edit-model-form.component.html',
  styleUrl: './edit-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditModelFormComponent implements OnInit {
  @Input() modelId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private modelsService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private brandsService: BrandsControllerService,
    private fuelsService: FuelsControllerService,
    private transmissionsService: TransmissionsControllerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getModel();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
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
  getModel() {
    this.modelsService.getModelById({ id: this.modelId }).subscribe((model) => {
      this.form.patchValue({
        name: model.name,
      });
    });
  }

  edit() {
    // this.modelsService.updateModel({id: this.modelId, updateModelRequest:{
    //   name: this.form.value.name
    // }}).subscribe({
    //   complete: () => {
    //     this.formMessage = 'Model updated successfully';
    //     this.change.markForCheck;

    //     setTimeout(() => {
    //       this.router.navigate(['/management', 'models']);
    //     }, 2000);
    //   },
    // });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill the form correctly';
      return;
    }

   //this.edit();
  }
}