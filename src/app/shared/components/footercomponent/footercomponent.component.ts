import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footercomponent',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<footer class="bg-dark text-light p-3">
    <div class="container">
      footer component works!
      </div> 
    </footer>`,
  styles: `
  footer{
    height:4rem;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootercomponentComponent { }
