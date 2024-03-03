import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-d-conge-ex',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet,  CommonModule],
  templateUrl: './d-conge-ex.component.html',
  styleUrl: './d-conge-ex.component.css'
})
export class DCongeExComponent {

}
