import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mdp-o',
  standalone: true,
  imports: [ 
    RouterLink, RouterLinkActive, RouterOutlet,MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule
    ,MatButtonModule],
  templateUrl: './mdp-o.component.html',
  styleUrl: './mdp-o.component.css'
})
export class MdpOComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  tel = new FormControl('', [Validators.required]);
  cin= new FormControl('', [Validators.required]);

  getErrorMessageTel() {
    if (this.tel.hasError('required')) {
      return 'You must enter a value';
    }
    return this.tel.hasError('tel') ? 'Not a valid tel' : 'Not a valid phone number';
  }
  getErrorMessagecin() {
    if (this.cin.hasError('required')) {
      return 'You must enter a value';
    }
    return this.cin.hasError('CIN') ? 'Not a valid CIN' : 'Not a valid CIN';
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
