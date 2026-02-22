import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { PROPERTIES } from '../../data/properties.mock';
import { Property } from '../../models/property.model';

type BlockItem = { id: string; label: string };

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
    MatExpansionModule,
  ],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.scss',
})
export class PropertyDetail {
  private id = signal<string>('');

  property = computed<Property | undefined>(() =>
    PROPERTIES.find((p) => p.id === this.id()),
  );

  selectedImage = signal<string | null>(null);

  constructor(
    route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    route.paramMap.subscribe((pm) => {
      const id = pm.get('id') ?? '';
      this.id.set(id);

      const p = PROPERTIES.find((x) => x.id === id);
      const list = p?.images?.length ? p.images : [p?.imageUrl ?? ''];
      this.selectedImage.set(list[0] ?? p?.imageUrl ?? null);
    });
  }

  formatPrice(value: number) {
    return new Intl.NumberFormat('de-DE').format(value) + ' €';
  }

  pickImage(url: string) {
    this.selectedImage.set(url);
  }

  prevImage(images: string[]) {
    if (!images?.length) return;

    const current = this.selectedImage() ?? images[0];
    const idx = Math.max(0, images.indexOf(current));
    const prev = (idx - 1 + images.length) % images.length;

    this.selectedImage.set(images[prev]);
  }

  nextImage(images: string[]) {
    if (!images?.length) return;

    const current = this.selectedImage() ?? images[0];
    const idx = Math.max(0, images.indexOf(current));
    const next = (idx + 1) % images.length;

    this.selectedImage.set(images[next]);
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  blocks = computed<BlockItem[]>(() => {
    const p = this.property();
    if (!p) return [];

    const items: BlockItem[] = [
      { id: 'opis', label: 'Opis nekretnine' },
      { id: 'lokacija', label: 'Točna lokacija' },
      { id: 'dron', label: 'Dron video' },
      { id: 'matterport', label: '3D (Matterport)' },
      { id: 'tlocrt', label: 'Tlocrt' },
      { id: 'tehnicki', label: 'Tehnički podaci' },
      { id: 'dokumentacija', label: 'Dokumentacija' },
    ];

    return items.filter((b) => {
      if (b.id === 'opis') return true;
      if (b.id === 'lokacija') return !!p.mapEmbedUrl;
      if (b.id === 'dron') return !!p.droneEmbedUrl;
      if (b.id === 'matterport') return !!p.matterportEmbedUrl;
      if (b.id === 'tlocrt') return (p.floorPlans?.length ?? 0) > 0;
      if (b.id === 'tehnicki') return (p.techSections?.length ?? 0) > 0;
      if (b.id === 'dokumentacija') return (p.docs?.length ?? 0) > 0;
      return true;
    });
  });
}
