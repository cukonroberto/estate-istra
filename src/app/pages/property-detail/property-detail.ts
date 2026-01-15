import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { PROPERTIES } from '../../data/properties.mock';
import { Property } from '../../models/property.model';

@Component({
  standalone: true,
  selector: 'app-property-detail',
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.scss',
})
export class PropertyDetail {
  private id = signal<string>('');

  property = computed<Property | undefined>(() =>
    PROPERTIES.find((p) => p.id === this.id())
  );

  selectedImage = signal<string | null>(null);

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((pm) => {
      const id = pm.get('id') ?? '';
      this.id.set(id);

      const p = PROPERTIES.find((x) => x.id === id);
      const first = p?.images?.[0] ?? p?.imageUrl ?? null;
      this.selectedImage.set(first);
    });
  }

  formatPrice(value: number) {
    return new Intl.NumberFormat('de-DE').format(value) + ' €';
  }

  pickImage(url: string) {
    this.selectedImage.set(url);
  }
}
