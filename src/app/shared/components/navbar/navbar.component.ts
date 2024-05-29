import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { DemoAngularMaterailModule } from '../../../DemoAngularMaterialModule';

// export interface NavItemInterface{
// label: string;
// }
//export type NavItem=NavItemInterface;


//inline interface
export type NavItem = {
  label: string;
  link: string;
};
export type NavTitle = {
  text: string;
  routerLink?: string | string[];//|undefined|null ?demek
} | undefined;//title undefined de olabilir.
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,//ngfor için
    RouterModule,//roueterlink,
    ButtonComponent,
    DemoAngularMaterailModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() title: NavTitle;
  @Input() navItems :NavItem[] = [];
  @Input() endContentTemplate ?: TemplateRef<any>;

  isUrl(url: string): boolean {
    return (
      url.startsWith('http') ||
      url.startsWith('https') ||
      url.startsWith('mailto') ||
      url.startsWith('tel')
    );
    const urlRegex = new RegExp(
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
    );
    return urlRegex.test(url);
  }

}