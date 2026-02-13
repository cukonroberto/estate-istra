import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-za-vlasnike',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    NgFor,
  ],
  templateUrl: './za-vlasnike.html',
  styleUrl: './za-vlasnike.scss',
})
export class ZaVlasnike {
  year = new Date().getFullYear();

  withOwners = [
    'Žele ekskluzivan odnos s jednom agencijom',
    'Cijene profesionalnu prezentaciju i pripremu',
    'Žele ozbiljne kupce, ne turističke razglede',
    'Razumiju važnost dokumentacije i transparentnosti',
    'Žele miran i kontroliran proces prodaje',
  ];

  withoutOwners = [
    'Želite da vašu nekretninu oglašava više agencija',
    'Ne želite otvoreno pokazati dokumentaciju',
    'Jedini kriterij je “što više upita”',
    'Tražite brzu prodaju bez detaljne pripreme',
    'Želite sakriti nedostatke ili probleme',
  ];

  benefits = [
    'Provjeru dokumentacije prije oglašavanja',
    'Profesionalne fotografije i video',
    'Dron snimke i 3D prikaz nekretnine',
    'Digitalne tlocrte',
    'Ne sakrivamo točnu lokaciju nekretnine',
    'Potpunu tehničku prezentaciju',
    'Filtriranje kupaca prije razgleda',
    'Miran i kontroliran proces prodaje',
  ];

  steps = [
    'Uvodni razgovor i procjena',
    'Provjera dokumentacije',
    'Priprema i prezentacija nekretnine',
    'Oglašavanje i filtriranje kupaca',
    'Razgledi s ozbiljnim kupcima',
    'Zaključenje transakcije',
  ];
}
