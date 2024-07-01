import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { DemoAngularMaterailModule } from '../../../DemoAngularMaterialModule';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth/auth.service';

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
    RouterLink,
    RouterOutlet,
    ButtonComponent,
    DemoAngularMaterailModule, ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() title: NavTitle;
  @Input() navItems: NavItem[] = [];
  @Input() navItemsUser:NavItem[]=[];
  @Input() endContentTemplate?: TemplateRef<any>;
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;
  constructor(private readonly authService: AuthService, private router:Router) {

  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
    this.isUser = this.authService.isUser();
  }





  logout(): void {
    this.authService.logOut();
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isUser = false;
    this.router.navigateByUrl('login');
  }
 
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