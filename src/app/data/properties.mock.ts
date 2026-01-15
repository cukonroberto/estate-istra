import { Property } from '../models/property.model';

export const PROPERTIES: Property[] = [
  {
    id: 'rovinj-001',
    title: 'Moderan stan s pogledom na more',
    location: 'Rovinj, Istra',
    priceEUR: 320000,
    areaM2: 68,
    type: 'Stan',
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'assets/background.jpg', // swap later
    featured: true,
    descriptionShort:
      'Svijetao stan, blizu centra, idealno za odmor ili najam.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],
    droneUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // placeholder
    matterportUrl: 'https://my.matterport.com/show/?m=XXXXXXXXXXX', // placeholder
    floorPlanUrl: 'assets/background.jpg',
    docs: [
      { label: 'Vlasnički list (PDF)', url: '#' },
      { label: 'Energetski certifikat (PDF)', url: '#' },
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
  },
  {
    id: 'pula-002',
    title: 'Kuća s okućnicom i bazenom',
    location: 'Pula, Istra',
    priceEUR: 590000,
    areaM2: 180,
    type: 'Kuća',
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: 'assets/background.jpg',
    featured: false,
    descriptionShort:
      'Privatnost, mir i odlična povezanost. Spremno za useljenje.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],
    droneUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // placeholder
    matterportUrl: 'https://my.matterport.com/show/?m=XXXXXXXXXXX', // placeholder
    floorPlanUrl: 'assets/background.jpg',
    docs: [
      { label: 'Vlasnički list (PDF)', url: '#' },
      { label: 'Energetski certifikat (PDF)', url: '#' },
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
  },
  {
    id: 'medulin-003',
    title: 'Zemljište s potencijalom',
    location: 'Medulin, Istra',
    priceEUR: 140000,
    areaM2: 900,
    type: 'Zemljište',
    imageUrl: 'assets/background.jpg',
    featured: false,
    descriptionShort:
      'Odlična lokacija za investiciju. Blizina mora i infrastrukture.',
    images: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'],
    droneUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // placeholder
    matterportUrl: 'https://my.matterport.com/show/?m=XXXXXXXXXXX', // placeholder
    floorPlanUrl: 'assets/background.jpg',
    docs: [
      { label: 'Vlasnički list (PDF)', url: '#' },
      { label: 'Energetski certifikat (PDF)', url: '#' },
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?...',
  },
];
