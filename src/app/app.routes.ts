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
import { ProfileComponent } from './layout/profile/profile.component';
import { DCongeComponent } from './layout/demandes/formulaires/d-conge/d-conge.component';
import { DCongeExComponent } from './layout/demandes/formulaires/d-conge-ex/d-conge-ex.component';
import { DAutoriSortieComponent } from './layout/demandes/formulaires/d-autori-sortie/d-autori-sortie.component';
import { DAutoriTeleTrComponent } from './layout/demandes/formulaires/d-autori-tele-tr/d-autori-tele-tr.component';
import { DAutoriSortieTemComponent } from './layout/demandes/formulaires/d-autori-sortie-tem/d-autori-sortie-tem.component';
import { DChangHoraireComponent } from './layout/demandes/formulaires/d-chang-horaire/d-chang-horaire.component';
import { DPretComponent } from './layout/demandes/formulaires/d-pret/d-pret.component';
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
          {path:'',component:MesDemandesComponent},
          {path:'D-conge',component:DCongeComponent},
          {path:'D-conge-ex',component:DCongeExComponent},
          {path:'D-Autor-Sor',component:DAutoriSortieComponent},
          {path:'D-Autor-Tele',component:DAutoriTeleTrComponent},
          {path:'D-Autor-Sor-temp',component:DAutoriSortieTemComponent},
          {path:'D-Chang-Horaire',component:DChangHoraireComponent},
          {path:'D-pret',component:DPretComponent},


        ]},
      {path:'formations',component:FormationComponent},
      {path:'chat',component:ChatComponent},
      {path:'home',component:HomeComponent},
      {path:'profile',component:ProfileComponent},

    ]}
];