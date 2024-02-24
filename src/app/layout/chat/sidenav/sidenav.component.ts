import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  contacts = [
    { username: "Respnsable RH", Statut: "Enlinge" },
    { username: "Admine", Statut: "Horslinge" },
    { username: "Chef", Statut: "Enlinge" },
 
  ];
  getStatusClass(statut: string): string {
    switch (statut) {
      case 'Enlinge':
        return 'enlinge';
      case 'Horslinge':
        return 'horslinge';
      default:
        return '';
    }
}
}