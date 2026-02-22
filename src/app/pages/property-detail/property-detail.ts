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

  // gallery and selection
  selectedIndex = signal<number>(0);

  gallery = computed<string[]>(() => {
    const p = this.property();
    if (!p) return [];
    const imgs = (p.images ?? []).filter(Boolean);
    return imgs.length ? imgs : [p.imageUrl];
  });

  selectedImage = computed<string>(() => {
    const g = this.gallery();
    const idx = this.selectedIndex();
    return g[Math.max(0, Math.min(idx, g.length - 1))] ?? g[0] ?? '';
  });

  constructor(
    route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    route.paramMap.subscribe((pm) => {
      const id = pm.get('id') ?? '';
      this.id.set(id);

      // reset selection on route change
      this.selectedIndex.set(0);
    });
  }

  formatPrice(value: number) {
    return new Intl.NumberFormat('de-DE').format(value) + ' €';
  }

  pickImage(index: number) {
    const g = this.gallery();
    if (!g.length) return;
    const safe = Math.max(0, Math.min(index, g.length - 1));
    this.selectedIndex.set(safe);
  }

  prevImage() {
    const g = this.gallery();
    if (g.length <= 1) return;
    const next = (this.selectedIndex() - 1 + g.length) % g.length;
    this.selectedIndex.set(next);
  }

  nextImage() {
    const g = this.gallery();
    if (g.length <= 1) return;
    const next = (this.selectedIndex() + 1) % g.length;
    this.selectedIndex.set(next);
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Hide blocks with no content (except Opis)
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
