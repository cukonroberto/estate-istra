import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { PROPERTIES } from '../../data/properties.mock';
import { Property } from '../../models/property.model';

@Component({
  standalone: true,
  selector: 'app-properties',
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
  ],
  templateUrl: './properties.html',
  styleUrl: './properties.scss',
})
export class Properties {
  properties: Property[] = PROPERTIES;

  formatPrice(value: number) {
    return new Intl.NumberFormat('de-DE').format(value) + ' €';
  }
}
