import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-mes-demandes',
  standalone: true,
  imports: [MatTabsModule,  RouterLink, RouterLinkActive, RouterOutlet,CommonModule,MatPaginatorModule],
  templateUrl: './mes-demandes.component.html',
  styleUrl: './mes-demandes.component.css'
})
export class MesDemandesComponent {
  demandes = [
    { Type: "Demande de congé", Statut: "Validée", Date: "2024-02-20", File: "" },
    { Type: "Demande de D’autorisation de télétravail", Statut: "En attente", Date: "2024-02-21", File: "" },
    { Type: "Demande de changement Horaire de travail", Statut: "Refusée", Date: "2024-02-22", File: "" },
    { Type: "Demande D’acompte sur Salaire/prime", Statut: "En attente", Date: "2024-02-23", File: "" },
    { Type: "Demande de D’autorisation de sortie", Statut: "Validée", Date: "2024-02-24", File: "" },
    { Type: "Demande de D’autorisation de travail le dimanche", Statut: "Refusée", Date: "2024-02-25", File: "" }
  ];
  length = 100; // Total number of items
  pageSize = 10; // Items per page
  pageSizeOptions = [5, 10, 25, 100]; // Available page sizes

  // Handle page change event
  onPageChange(event: PageEvent): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    // Fetch data based on pageIndex and pageSize
    // Update your table data accordingly
  
}
getStatusClass(statut: string): string {
  switch (statut) {
    case 'Validée':
      return 'valid';
    case 'En attente':
      return 'pending';
    case 'Refusée':
      return 'rejected';
    default:
      return '';
  }
}
}
