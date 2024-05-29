import { Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";

export const signupRoutes: Routes = [
    {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent,
    },
];