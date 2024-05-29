import { Component } from '@angular/core';
import { NavbarComponent, NavItem, NavTitle } from "../../components/navbar/navbar.component";
import { FootercomponentComponent } from '../../components/footercomponent/footercomponent.component';
import { ButtonComponent } from '../../components/button/button.component';
import { link } from 'fs';

@Component({
    selector: 'app-home-layout',
    standalone: true,
    templateUrl: './home-layout.component.html',
    styleUrl: './home-layout.component.scss',
    imports: [NavbarComponent, FootercomponentComponent]
})
export class HomeLayoutComponent {
    navTitle: NavTitle = { text: 'Rent A Car', routerLink: '/' };
    navitems: NavItem[] = [//navbarcomponentinden gelen navitem
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: 'mailto:hatce@gmail.com' },
        {label:'Management', link:'/management'},
        { label: 'Brands Management', link: '/management/brands' },
        { label: 'Model Management', link: '/management/models' },
        { label: 'Car Management', link: '/management/cars' },
        { label: 'Fuel Management', link: '/management/fuels' },
        { label: 'Transmission Management', link: '/management/transmissions' },
    ];
}
