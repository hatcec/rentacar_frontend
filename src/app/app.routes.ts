import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { managementRoutes } from './routes/management-page/management.routes';
import { NotFoundPageComponent } from './routes/not-found-page/not-found-page.component';
import { homeRoutes } from './routes/home-page/home.routes';
import { loginRoutes } from './auth/components/login/login.routes';
import { signupRoutes } from './auth/components/signup/signup.routes';
import { AdminComponent } from './modules/admin/admin.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { CustomerDashboardComponent } from './modules/customer/customer-dashboard/customer-dashboard.component';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { RentcarComponent } from './modules/customer/component/rentcar/rentcar.component';

import { aboutRoutes } from './routes/about-page/about-page.route';
import { ProfileComponent } from './features/users/profile/profile.component';
import { UserupdateComponent } from './features/users/userupdate/userupdate.component';
import { UserslistComponent } from './features/users/userslist/userslist.component';
export const routes: Routes = [
  ...loginRoutes,
  ...signupRoutes,
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'update/:id',
    component: UserupdateComponent
  },
  {
    path: 'users',
    component: UserslistComponent
  },
  ...homeRoutes,
  ...managementRoutes,
  ...aboutRoutes,
  //{
  // path: '',
  // pathMatch: 'full',
  // component: HomePageComponent,//ilk karşılaştığı router outlete bu sayfayı yerleştirecek
  // // children:[
  // //     pat
  // // ]
  //}
  // {
  //     path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  // }, {
  //     path: "customer", loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)
  // },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: AdmindashboardComponent,
      }
    ]
  },
  {
    path: 'customer',

    component: CustomerComponent,
    children: [
      {
        path: 'dashboard',
        component: CustomerDashboardComponent,
      }, {
        path: 'rentcar/:id',
        component: RentcarComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent,//yukarıdakiler hatalıysa ve açılmazsa bu sayfa devreye girer
  },
  {
    path: '',
    redirectTo:'/login', pathMatch:'full'
  },
];
