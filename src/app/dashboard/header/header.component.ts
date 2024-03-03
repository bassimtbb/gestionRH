import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, RouterOutlet,
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  linksE = [{titre:'Accueil',root:"/dashboard/home"}, {titre:'Demandes',root:"/dashboard/demandes"}, {titre:'Formations',root:"/dashboard/formations"}, {titre:'Messagerie',root:"/dashboard/chat"}];
  linksRHR=  [{titre:'Dashboard',root:"/dashboard/ee"},{titre:'Employé',root:"/dashboard/ee"}, {titre:'Congé',root:"/dashboard/ee"}];
  linksAD=  [{titre:'Dashboard',root:"/dashboard/ee"}, {titre:'Performance',root:"/dashboard/ee"}, {titre:'Rapport',root:"/dashboard/ee"}, {titre:'Evénement',root:"/dashboard/ee"}];
  linksSH=  [{titre:'Employés',root:"/dashboard/ee"}, {titre:'Congé',root:"/dashboard/"}];
  notifications: string[] = ['notif1','notif2','notif3','notif4'];
}
