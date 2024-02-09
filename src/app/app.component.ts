import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MdpOComponent } from './Authentication/mdp-o/mdp-o.component';
import { LoginComponent } from './Authentication/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MdpOComponent,LoginComponent, RouterOutlet, MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule
    ,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionRH';
}
