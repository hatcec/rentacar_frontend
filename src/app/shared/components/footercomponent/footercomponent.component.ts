import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footercomponent',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./footercomponent.component.html',
  styleUrl:'./footercomponent.component.scss',
 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootercomponentComponent { }
