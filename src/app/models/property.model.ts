export type PropertyType = 'Kuća' | 'Stan' | 'Zemljište';

export interface Property {
  // not all are mandatory.
  id: string;
  title: string;
  location: string;
  priceEUR: number;
  areaM2: number;
  type: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  imageUrl: string;
  featured?: boolean;
  descriptionShort: string;

  // Detailed page
  images?: string[]; // gallery images
  droneUrl?: string; // youtube/vimeo link OR image url
  matterportUrl?: string; // embed link
  floorPlanUrl?: string; // image/pdf
  docs?: { label: string; url: string }[]; // pdfs
  mapEmbedUrl?: string; // google maps embed
}
