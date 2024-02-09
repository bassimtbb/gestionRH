import { Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { MdpOComponent } from './Authentication/mdp-o/mdp-o.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'Login',component:LoginComponent},
    {path:'forget',component:MdpOComponent},
    {path:'dashboard',component:DashboardComponent}
];