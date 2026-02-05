export const BRAND_LOGO = '/brand-logo.jpeg' as const;
export const FAVICON = '/favicon.svg' as const;

export type ImageKey = typeof BRAND_LOGO | typeof FAVICON;

export const images = {
  BRAND_LOGO,
  FAVICON,
} as const;

export const getImagePath = (key: ImageKey): string => {
  return images[key];
};