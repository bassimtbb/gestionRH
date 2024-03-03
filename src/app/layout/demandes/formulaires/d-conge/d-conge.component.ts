import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-d-conge',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './d-conge.component.html',
  styleUrl: './d-conge.component.css'
})
export class DCongeComponent {

}
