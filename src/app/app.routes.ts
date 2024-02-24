import { Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { MdpOComponent } from './Authentication/mdp-o/mdp-o.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemandesComponent } from './layout/demandes/demandes.component';
import { DdemandeComponent } from './layout/demandes/ddemande/ddemande.component';
import { MesDemandesComponent } from './layout/demandes/mes-demandes/mes-demandes.component';
import { FormationComponent } from './layout/formation/formation.component';
import { ChatComponent } from './layout/chat/chat.component';
import { HomeComponent } from './layout/home/home.component';
export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'Login',component:LoginComponent},
    {path:'forget',component:MdpOComponent},
    {path:'dashboard',component:DashboardComponent,
      children:[
      {path:'demandes',component:DemandesComponent ,
        children:[
          {path:'Ddemande',component:DdemandeComponent},
          {path:'Mesdemande',component:MesDemandesComponent},
          {path:'',component:MesDemandesComponent}]},
      {path:'formations',component:FormationComponent},
      {path:'chat',component:ChatComponent},
      {path:'home',component:HomeComponent},

    ]}
];