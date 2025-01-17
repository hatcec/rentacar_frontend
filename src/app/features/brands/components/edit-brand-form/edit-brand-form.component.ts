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
import { BrandsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { DemoAngularMaterailModule } from '../../../../DemoAngularMaterialModule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent,DemoAngularMaterailModule],
  templateUrl: './edit-brand-form.component.html',
  styleUrl: './edit-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBrandFormComponent implements OnInit {
  @Input() brandId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private brandsService: BrandsControllerService,
    private change: ChangeDetectorRef,
    private snackBar:MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getBrand();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  getBrand() {
    this.brandsService.getBrandById({ id: this.brandId }).subscribe((brand) => {
      this.form.patchValue({
        name: brand.name,
      });
    });
  }

  edit() {
    this.brandsService.updateBrand({
        updateBrandRequest: {
          id: this.brandId,
          name: this.form.value.name,
        },
      })
      .subscribe({
        complete: () => {
        
          this.snackBar.open('Brand Updated Successfully', 'Close', { duration: 5000 });
  
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
      this.formMessage = 'Please fill the form correctly';
      return;
    }

    this.edit();
  }
}