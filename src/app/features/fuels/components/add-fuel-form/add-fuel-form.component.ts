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
  
  AddFuelRequestParams,
  FuelsControllerService,
} from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';

@Component({
  selector: 'app-add-fuel-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent,DemoAngularMaterailModule],
  templateUrl: './add-fuel-form.component.html',
  styleUrl: './add-fuel-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFuelFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private fuelServices: FuelsControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  add() {
    const request: AddFuelRequestParams = {
      createFuelRequest: {
        name: this.form.value.name,
      },
    };

    this.fuelServices.addFuel(request).subscribe({
      // Next: Observable'dan gelen veriyi yakaladığımız fonksiyon
      next: (response) => {
        console.log(response);
      },
      // Error: Observable'dan gelen hatayı yakaladığımız fonksiyon
      error: (error) => {
        this.formMessage = error.errorMessage;
        this.change.markForCheck();
      },
      // Complete: Observable'dan gelen veri akışının tamamladığını bildiren fonksiyon, eğer complete çalışırsa observable'dan gelen veri akışı sona erer.
      complete: () => {
        this.formMessage = 'Fuel added successfully';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'fuels']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields';
      return;
    }

    this.add();
  }
}