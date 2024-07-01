import { Component } from '@angular/core';
import { NavbarComponent, NavItem, NavTitle } from "../../components/navbar/navbar.component";
import { FootercomponentComponent } from '../../components/footercomponent/footercomponent.component';
import { ButtonComponent } from '../../components/button/button.component';
import { link } from 'fs';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home-layout',
    standalone: true,
    templateUrl: './home-layout.component.html',
    styleUrl: './home-layout.component.scss',
    imports: [NavbarComponent, FootercomponentComponent]
})
export class HomeLayoutComponent {
    
  
  
    title : NavTitle = {
      text: "RentACar",
      routerLink: "/"
    }
  
  
   
    // managementItems: NavItem[] = [
    //   {label: "Dashboard", link: "/management"},
    //   {label: "Profile", link: "/management/users"},
    
    // ];
  
    navTitle: NavTitle = { text: 'Rent A Car', routerLink: '/' };
    navitems: NavItem[] = [//navbarcomponentinden gelen navitem
        { label: 'Home', link: '/' },
        //{label:'Cars Managament', link:'/customer/dashboard'},
        // { label: 'About', link: '/about' },
        // { label: 'Contact', link: 'mailto:hatce@gmail.com' },
        { label: 'Brands Management', link: '/management/brands' },
        { label: 'Model Management', link: '/management/models' },
        { label: 'Car Management', link: '/management/cars' },
        { label: 'Fuel Management', link: '/management/fuels' },
        { label: 'Transmission Management', link: '/management/transmissions' },
        { label: 'User Management', link: '/users' },
    ];

    navItemsUser : NavItem[] = [
        {label: "Home", link: "/"},
        {label: "About", link: "/about"},
        {label: "Cars", link: "/customer/dashboard"},
        {label: "Contact", link: "mailto:hatce@gmail.com"}
      ]
    
}
