export interface ContentModel {
  title: string;
  content: string;
  excerpt: string;
  thumbnail: string;
  slug: string;
  id: number;
  date: string;
  custom: { [key: string]: any };
}

export interface ContentCategory {
  name: string;
  slug: string;
  parent: number;
  id: number;
  thumbnail: string | undefined;
}

export interface HomepageContent extends ContentModel {
  custom: {
    secondarySlider: Array<{ url: string; image: string }> | false;
    slider: Array<{ url: string; image: string }> | false;
    tiles: Array<{ icon: string; link: string; title: string }> | false;
  };
}

export interface NewsContent extends ContentModel {
  custom: {
    author: string;
    thumbnail?: string;
  };
}
