import { ContentModel, ContentCategory } from '../models';
import get from 'lodash.get';
const ENDPOINT =
  'http://admiral-env.eba-wjw5h5wq.ap-southeast-1.elasticbeanstalk.com/wp-json/wp/v2';

function formatContent(data: any): ContentModel {
  return {
    title: data.title?.rendered || '',
    thumbnail: get(data, `_embedded['wp:featuredmedia'][0].source_url`, ''),
    content: data.content?.rendered || '',
    id: data.id,
    slug: data.slug,
    excerpt: data.excerpt?.rendered || '',
    date: data.date,
    custom: data.acf || {},
  };
}

function formatContentCategory(data: any): ContentCategory {
  return {
    name: data.name,
    slug: data.slug,
    parent: data.parent,
    id: data.id,
    thumbnail: get(data, 'acf.image.url', ''),
  };
}

interface ContentResponse {
  total: number;
  data: ContentModel[];
}

export const ContentRepository = {
  async getList({
    type,
    slug,
    categories,
    page = 1,
    perPage = 100,
  }: {
    type: string;
    slug?: string;
    categories?: string;
    page?: number;
    perPage?: number;
  }): Promise<ContentResponse> {
    const url = `${ENDPOINT}/${type}?_embed=wp:featuredmedia&slug=${slug || ''}&categories=${
      categories || ''
    }&page=${page || ''}&per_page=${perPage || ''}`;

    let data = await fetch(url).then(async (res) => {
      return {
        data: await res.json(),
        headers: res.headers,
      };
    });

    return {
      data: data.data.map((item) => formatContent(item)),
      total: parseInt(data.headers.get('x-wp-total')),
    };
  },

  async getCategories(): Promise<ContentCategory[]> {
    let data = await fetch(`${ENDPOINT}/categories`).then((res) => res.json());
    data = data.map((item) => formatContentCategory(item));
    return data;
  },
};
