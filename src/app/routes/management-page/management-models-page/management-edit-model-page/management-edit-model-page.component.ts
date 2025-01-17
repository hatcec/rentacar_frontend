import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EditModelFormComponent } from '../../../../features/models/components/edit-model-form/edit-model-form.component';
import { ModelsListTableComponent } from '../../../../features/models/components/models-list-table/models-list-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-edit-model-page',
  standalone: true,
  imports: [ CommonModule,
    EditModelFormComponent,
  ],
  templateUrl: './management-edit-model-page.component.html',
  styleUrl: './management-edit-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditModelPageComponent implements OnInit {
  modelId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getModelIdFromRoute();
  }

  private getModelIdFromRoute() {
    this.route.params.subscribe((params) => {
      const modelId = params['modelId'];
      if (!modelId) return;

      this.modelId = Number(modelId);
    });
  }
}