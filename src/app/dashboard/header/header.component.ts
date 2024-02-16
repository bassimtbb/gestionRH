import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  linksE: string[] = ['Home', 'Demandes', 'Formations', 'Chat'];
  linksRHR: string[] = ['Dashboard','Employé', 'Congé'];
  linksAD: string[] = ['Dashboard', 'Performance', 'Rapport', 'Evénement'];
  linksSH: string[] = ['Employés', 'Congé'];
  notifications: string[] = ['notif1', 'notif2', 'notif3', 'notif4'];
}
