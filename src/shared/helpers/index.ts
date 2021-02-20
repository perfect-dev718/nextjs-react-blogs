import { PageType } from '..';
import { NavItem } from '../models/navigation';
import { DslCategory } from '../generated/graphql';
import { BreadcrumbItem } from '../models';

export const urlResolver = (pathname: string, contentPages: string[]): PageType => {
  const split = pathname.split('/').filter((x) => x);

  if (split.length > 3) {
    return PageType.product;
  } else {
    if (contentPages.find((o) => pathname.startsWith(o))) {
      return PageType.contentPage;
    }

    return PageType.category;
  }
};

export const convertUrlChars = (url: string): string => {
  return url.replace(/\//g, '-').toLowerCase();
};

function removeLastChar(value: string): string {
  return value.substring(0, value.length - 1);
}

export const formatNavItems = (data: DslCategory[]): NavItem[] => {
  const createNavItem = (x: DslCategory, currentPath = '/'): NavItem => {
    const url = `${currentPath}${x.seoTitle || x.name}/`;

    return {
      id: x.id,
      title: x.name,
      slug: x.seoSlug as string,
      url: removeLastChar(url),
      subItems: x.subCategories
        ? x.subCategories.map((s) => createNavItem(s as DslCategory, url))
        : [],
    };
  };

  return data ? data.map((category) => createNavItem(category)) : [];
};

export const resolveOrderStatus = (status: string): String => {
  switch (status) {
    case 'P':
      return 'Payment Processed';

    default:
      return 'Open';
  }
};

export const generateCategoryBreadcrumbItems = (categories: DslCategory[]): BreadcrumbItem[] => {
  return [
    {
      href: '/',
      label: 'Home',
      as: '/',
    },
    ...categories.map((category) => {
      return {
        href: '/[...pathname]',
        label: category.name,
        as: (category.seoTitle as string) || category.name,
      };
    }),
  ];
};

export const getCategoryHierarchy = (categories: DslCategory[], paths: string | string[]) => {
  let currentCategories: DslCategory[] = [];

  const getCategories = (data: DslCategory[], level = 0) => {
    for (let category of data) {
      if (category.seoTitle || category.name === paths[level]) {
        currentCategories.push(category);
      }

      if (category.subCategories) {
        getCategories(category.subCategories as DslCategory[], level + 1);
      }
    }
  };

  getCategories(categories);

  return currentCategories;
};

export const truncateWords = (value: string, length: number) => {
  const words = value.split(' ');

  if (words.length > length) {
    return `${words.slice(0, length).join(' ')}...`;
  }

  return value;
};
