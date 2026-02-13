import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Properties } from './pages/properties/properties';
import { HowWeWork } from './pages/how-we-work/how-we-work';
import { PropertyDetail } from './pages/property-detail/property-detail';
import { Contact } from './pages/contact/contact';
import { ZaKupce } from './pages/za-kupce/za-kupce';
import { ZaVlasnike } from './pages/za-vlasnike/za-vlasnike';

//Base routing for now
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nekretnine', component: Properties },
  { path: 'nekretnina/:id', component: PropertyDetail },
  { path: 'kako-radimo', component: HowWeWork },
  { path: 'kontakt', component: Contact },
  { path: 'za-kupce', component: ZaKupce },
  { path: 'za-vlasnike', component: ZaVlasnike },
  { path: '**', redirectTo: '' },
];
