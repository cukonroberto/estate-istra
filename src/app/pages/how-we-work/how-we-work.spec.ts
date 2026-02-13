import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-how-we-work',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './how-we-work.html',
  styleUrl: './how-we-work.scss',
})
export class HowWeWork {
  year = new Date().getFullYear();
}
