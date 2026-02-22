import { Property } from '../models/property.model';

export const PROPERTIES: Property[] = [
  {
    id: 'rovinj-001',
    title: 'Moderan stan s pogledom na more',
    location: 'Rovinj, Istra',
    microLocation: 'Centar',
    priceEUR: 320000,
    areaM2: 68,
    type: 'Stan',
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'assets/background.jpg',
    featured: true,
    descriptionShort:
      'Svijetao stan, blizu centra, idealno za odmor ili najam.',
    descriptionLong:
      'Ovaj svijetao stan nalazi se na odličnoj lokaciji u blizini centra i svih ključnih sadržaja. ' +
      'Prostor je funkcionalno raspoređen, s naglaskom na dnevni boravak i prirodno osvjetljenje. ' +
      'Stan je pogodan za cjelogodišnje stanovanje, ali i kao investicija za turistički najam. ' +
      'U okolici se nalaze trgovine, restorani i šetnice, a more je dostupno u kratkom vremenu. ' +
      'Dokumentacija je uredna, a prezentacija uključuje točnu lokaciju, fotografije i dodatne materijale. ' +
      'Razgled organiziramo kada je kupac već upoznat s prezentacijom i razmišlja o konačnoj odluci.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],

    // iframe src links
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
    droneEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    matterportEmbedUrl: 'https://my.matterport.com/show/?m=XXXXX&play=1',
    matterportFullscreenUrl: 'https://my.matterport.com/show/?m=XXXXX',

    floorPlans: [{ label: 'Tlocrt', url: 'assets/tlocrt-stan.jpg' }],

    techSections: [
      {
        title: 'Osnovno',
        items: [
          { label: 'Tip nekretnine', value: 'Stan' },
          { label: 'Površina', value: '68 m²' },
          { label: 'Spavaće sobe', value: '2' },
          { label: 'Kupaonice', value: '1' },
        ],
      },
      {
        title: 'Instalacije i grijanje',
        items: [
          { label: 'Grijanje', value: 'Klima + električno' },
          { label: 'Hlađenje', value: 'Klima uređaj' },
          { label: 'Internet', value: 'Dostupno' },
        ],
      },
    ],

    docs: [
      { label: 'Vlasnički list (PDF)', url: 'assets/docs/vlasnicki-list.pdf' },
      {
        label: 'Energetski certifikat (PDF)',
        url: 'assets/docs/energetski-certifikat.pdf',
      },
    ],
  },

  {
    id: 'pula-002',
    title: 'Kuća s okućnicom i bazenom',
    location: 'Pula, Istra',
    microLocation: 'Mirna zona',
    priceEUR: 590000,
    areaM2: 180,
    type: 'Kuća',
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: 'assets/background.jpg',
    featured: false,
    descriptionShort:
      'Privatnost, mir i odlična povezanost. Spremno za useljenje.',
    descriptionLong:
      'Kuća s okućnicom i bazenom pruža privatnost i komfor, uz odličnu povezanost s gradom i sadržajima. ' +
      'Nekretnina je pogodna za obiteljsko stanovanje ili kao investicija u turistički najam. ' +
      'Prostor je raspoređen funkcionalno, s naglaskom na vanjski dio i život na otvorenom. ' +
      'Prije oglašavanja provjeravamo dokumentaciju i prezentiramo sve ključne informacije. ' +
      'Razglede organiziramo uz prethodnu provjeru i kada je kupac već upoznat s kompletnom prezentacijom.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],

    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
    droneEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    matterportEmbedUrl: 'https://my.matterport.com/show/?m=XXXXX&play=1',
    matterportFullscreenUrl: 'https://my.matterport.com/show/?m=XXXXX',

    floorPlans: [
      { label: 'Prizemlje', url: 'assets/tlocrt-prizemlje.jpg' },
      { label: 'Kat', url: 'assets/tlocrt-kat.jpg' },
    ],

    techSections: [
      {
        title: 'Osnovno',
        items: [
          { label: 'Tip nekretnine', value: 'Kuća' },
          { label: 'Površina', value: '180 m²' },
          { label: 'Spavaće sobe', value: '4' },
          { label: 'Kupaonice', value: '3' },
        ],
      },
      {
        title: 'Okućnica i sadržaji',
        items: [
          { label: 'Bazen', value: 'Da' },
          { label: 'Parking', value: 'Da' },
          { label: 'Vrt', value: 'Da' },
        ],
      },
    ],

    docs: [
      { label: 'Vlasnički list (PDF)', url: 'assets/docs/vlasnicki-list.pdf' },
      {
        label: 'Energetski certifikat (PDF)',
        url: 'assets/docs/energetski-certifikat.pdf',
      },
    ],
  },

  {
    id: 'medulin-003',
    title: 'Zemljište s potencijalom',
    location: 'Medulin, Istra',
    microLocation: 'Blizina mora',
    priceEUR: 140000,
    areaM2: 900,
    type: 'Zemljište',
    imageUrl: 'assets/background.jpg',
    featured: false,
    descriptionShort:
      'Odlična lokacija za investiciju. Blizina mora i infrastrukture.',
    descriptionLong:
      'Zemljište se nalazi na atraktivnoj lokaciji s dobrim potencijalom za budući razvoj. ' +
      'Prednost je blizina mora i postojeće infrastrukture, uz pristupne puteve i okruženje koje se razvija. ' +
      'Kupcu prikazujemo točnu lokaciju i dostupnu dokumentaciju, a razgled terena organiziramo kada postoji realna namjera kupnje.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],

    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
    droneEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

    // Matterport is often not applicable for zemljište; keep empty unless you really have it
    // matterportEmbedUrl: '...',
    // matterportFullscreenUrl: '...',

    // Floor plans also usually not applicable; keep empty unless you have a plan image
    // floorPlans: [{ label: 'Tlocrt', url: 'assets/tlocrt-zemljiste.jpg' }],

    techSections: [
      {
        title: 'Osnovno',
        items: [
          { label: 'Tip nekretnine', value: 'Zemljište' },
          { label: 'Površina', value: '900 m²' },
        ],
      },
      {
        title: 'Infrastruktura',
        items: [
          { label: 'Pristupni put', value: 'Da' },
          { label: 'Struja', value: 'U blizini' },
          { label: 'Voda', value: 'U blizini' },
        ],
      },
    ],

    docs: [
      { label: 'Vlasnički list (PDF)', url: 'assets/docs/vlasnicki-list.pdf' },
    ],
  },
];
