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
  messages = [
      {
        "sender": "send",
        "date": "11/02/2024 12:30",
        "content": "Bonjour"
      },
      {
        "sender": "recive",
        "date": "11/02/2024 12:30",
        "content": "Bonjour"
      },
      {
        "sender": "send",
        "date": "11/02/2024 13:00",
        "content": "Comment allez-vous aujourd'hui ?"
      },
      {
        "sender": "recive",
        "date": "11/02/2024 13:05",
        "content": "Je vais bien, merci. Comment puis-je vous aider ?"
      },
      {
        "sender": "send",
        "date": "11/02/2024 13:10",
        "content": "Je voulais discuter de ma demande de congé pour la semaine prochaine. Est-ce que nous pouvons en parler ?"
      },
      {
        "sender": "recive",
        "date": "11/02/2024 13:15",
        "content": "Bien sûr, je suis à votre écoute. Quelles sont les dates exactes de votre congé ?"
      }
   ];

  getStatusClassS(statut: string): string {
    switch (statut) {
      case 'Enlinge':
        return 'enlinge';
      case 'Horslinge':
        return 'horslinge';
      default:
        return '';
    }}
    
    getStatusClassM(message: string): string {
      switch (message) {
        case 'send':
          return 'left ';
        case 'recive':
          return 'right';
        default:
          return '';
      }
}
}
