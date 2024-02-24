import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  contact = { username: "Respnsable RH", Statut: "Enlinge" };
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
