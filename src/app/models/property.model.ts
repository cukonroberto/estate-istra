export type PropertyType = 'Kuća' | 'Stan' | 'Zemljište';

export interface Property {
  id: string;
  title: string;
  location: string; // e.g. "Rovinj, Istra"
  microLocation?: string; // e.g. "Centar" / "Borik" / "Monsena"
  priceEUR: number;
  areaM2: number;
  type: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  imageUrl: string;
  featured?: boolean;
  descriptionShort: string;

  // Detailed page
  images?: string[];

  // Required embeds
  mapEmbedUrl?: string; // Google Maps embed URL (iframe src)
  droneEmbedUrl?: string; // YouTube/Vimeo embed URL (iframe src)
  matterportEmbedUrl?: string; // Matterport embed URL (iframe src)
  matterportFullscreenUrl?: string; // optional: open in fullscreen/new tab

  // Description (long)
  descriptionLong?: string;

  // Floor plans (multiple levels)
  floorPlans?: { label: string; url: string }[]; // url can be image

  // Tech specs sections (accordion)
  techSections?: { title: string; items: { label: string; value: string }[] }[];

  // Documents
  docs?: { label: string; url: string }[];
}
