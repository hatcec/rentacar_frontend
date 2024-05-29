import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeLayoutComponent } from "./shared/layouts/home-layout/home-layout.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'rentacarProject';
}
