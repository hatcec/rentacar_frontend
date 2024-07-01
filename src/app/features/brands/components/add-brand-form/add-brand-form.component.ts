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
  
  AddBrandRequestParams,
  BrandsControllerService,
} from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { response } from 'express';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,DemoAngularMaterailModule, ButtonComponent],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBrandFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private brandServices: BrandsControllerService,
    private change: ChangeDetectorRef,
    private router: Router,
    private snackBar: MatSnackBar
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
    const request: AddBrandRequestParams = {
      createBrandRequest: {
        name: this.form.value.name,
      },
    };

    this.brandServices.addBrand(request).subscribe({
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
        
          this.snackBar.open('Brand Added Successfully', 'Close', { duration: 5000 });
  
          this.router.navigateByUrl('management/brands')
      
        this.form.reset();
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'brands']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.snackBar.open( 'Please fill all required fields' ,'Close',{duration:5000});
      return;
    }

    this.add();
  }
}