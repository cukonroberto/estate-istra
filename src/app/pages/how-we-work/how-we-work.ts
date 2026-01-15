import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Contact } from '../contact/contact';

@Component({
  standalone: true,
  selector: 'app-how-we-work',
  imports: [MatCardModule, MatButtonModule, RouterLink, Contact],
  templateUrl: './how-we-work.html',
  styleUrl: './how-we-work.scss',
})
export class HowWeWork {
  year = new Date().getFullYear();
}
