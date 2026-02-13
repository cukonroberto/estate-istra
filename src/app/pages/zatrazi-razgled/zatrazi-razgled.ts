import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  standalone: true,
  selector: 'app-zatrazi-razgled',
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  templateUrl: './zatrazi-razgled.html',
  styleUrl: './zatrazi-razgled.scss',
})
export class ZatraziRazgled {
  year = new Date().getFullYear();
  submitted = false;

  // optional: allow passing property info via query params
  propertyTitle = '';
  propertyLocation = '';
  propertyCode = '';

  form;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.propertyTitle = this.route.snapshot.queryParamMap.get('title') ?? '';
    this.propertyLocation =
      this.route.snapshot.queryParamMap.get('location') ?? '';
    this.propertyCode = this.route.snapshot.queryParamMap.get('code') ?? '';

    this.form = this.fb.group({
      // A) PODACI O KUPCU
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],

      // C) NAMJENA I FINANCIJSKI STATUS
      purpose: ['', [Validators.required]],
      fundsStatus: ['', [Validators.required]],
      purchaseMethod: ['', [Validators.required]],

      // D) VREMENSKI OKVIR
      timeline: ['', [Validators.required]],

      // E) REZERVACIJA – KLJUČNO PITANJE
      depositReady: ['', [Validators.required]],

      // F) NAPOMENE
      notes: [''],

      // 6) OBAVEZNA POTVRDA
      confirmedReviewed: [false, [Validators.requiredTrue]],

      // B) PODACI O NEKRETNINI (hidden-ish; filled automatically)
      propertyTitle: [this.propertyTitle],
      propertyLocation: [this.propertyLocation],
      propertyCode: [this.propertyCode],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Razgled request submitted', this.form.value);

    this.submitted = true;
    this.form.reset({
      confirmedReviewed: false,
      propertyTitle: this.propertyTitle,
      propertyLocation: this.propertyLocation,
      propertyCode: this.propertyCode,
    });
  }
}
