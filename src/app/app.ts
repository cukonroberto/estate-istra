import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterOutlet,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, NgIf, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isHome = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHome = this.router.url === '/' || this.router.url === '';
        document.body.classList.toggle('no-scroll', this.isHome);
      });
  }
}
