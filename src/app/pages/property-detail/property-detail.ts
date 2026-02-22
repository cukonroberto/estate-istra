import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { PROPERTIES } from '../../data/properties.mock';
import { Property } from '../../models/property.model';

type BlockKey =
  | 'opis'
  | 'mapa'
  | 'dron'
  | 'matterport'
  | 'tlocrt'
  | 'tehnicki'
  | 'dokumentacija';

@Component({
  standalone: true,
  selector: 'app-property-detail',
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    MatCardModule,
    MatButtonModule,
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

  // ---------- Image carousel ----------
  imageIndex = signal<number>(0);

  allImages = computed<string[]>(() => {
    const p = this.property();
    if (!p) return [];
    const imgs = (p.images ?? []).filter(Boolean);
    const base = p.imageUrl ? [p.imageUrl] : [];
    // ensure unique and keep order: imageUrl first, then images[]
    const merged = [...base, ...imgs];
    return Array.from(new Set(merged));
  });

  selectedImage = computed<string | null>(() => {
    const imgs = this.allImages();
    if (imgs.length === 0) return null;
    const idx = Math.min(Math.max(this.imageIndex(), 0), imgs.length - 1);
    return imgs[idx];
  });

  setImageIndex(i: number) {
    const imgs = this.allImages();
    if (imgs.length === 0) return;
    const clamped = Math.min(Math.max(i, 0), imgs.length - 1);
    this.imageIndex.set(clamped);
  }

  prevImage() {
    const imgs = this.allImages();
    if (imgs.length <= 1) return;
    const next = (this.imageIndex() - 1 + imgs.length) % imgs.length;
    this.imageIndex.set(next);
  }

  nextImage() {
    const imgs = this.allImages();
    if (imgs.length <= 1) return;
    const next = (this.imageIndex() + 1) % imgs.length;
    this.imageIndex.set(next);
  }

  // ---------- Block carousel ----------
  blocks: { key: BlockKey; title: string }[] = [
    { key: 'opis', title: 'Opis nekretnine' },
    { key: 'mapa', title: 'Točna lokacija' },
    { key: 'dron', title: 'Dron video' },
    { key: 'matterport', title: '3D (Matterport)' },
    { key: 'tlocrt', title: 'Tlocrt' },
    { key: 'tehnicki', title: 'Tehnički podaci' },
    { key: 'dokumentacija', title: 'Dokumentacija' },
  ];

  blockIndex = signal<number>(0);

  currentBlock = computed<BlockKey>(() => this.blocks[this.blockIndex()].key);
  currentBlockTitle = computed<string>(
    () => this.blocks[this.blockIndex()].title,
  );

  prevBlock() {
    const n = this.blocks.length;
    this.blockIndex.set((this.blockIndex() - 1 + n) % n);
  }

  nextBlock() {
    const n = this.blocks.length;
    this.blockIndex.set((this.blockIndex() + 1) % n);
  }

  constructor(
    route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    route.paramMap.subscribe((pm) => {
      const id = pm.get('id') ?? '';
      this.id.set(id);

      // reset indices when navigating to a new property
      this.blockIndex.set(0);
      this.imageIndex.set(0);
    });
  }

  // ---------- Helpers ----------
  formatPrice(value: number) {
    return new Intl.NumberFormat('de-DE').format(value) + ' €';
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  visibleTechSections(p: Property) {
    const secs = (p.techSections ?? [])
      .map((s) => ({
        title: s.title,
        items: (s.items ?? []).filter(
          (it) =>
            (it.label ?? '').trim().length > 0 &&
            (it.value ?? '').trim().length > 0,
        ),
      }))
      .filter((s) => s.title.trim().length > 0 && s.items.length > 0);

    return secs;
  }
}
