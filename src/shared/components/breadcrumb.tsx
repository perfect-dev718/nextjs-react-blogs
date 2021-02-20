import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Box, Text } from 'rebass';
import { DslCategory } from 'shared/generated/graphql';
import { BreadcrumbItem } from 'shared/models';
import {
  convertUrlChars,
  generateCategoryBreadcrumbItems,
  getCategoryHierarchy,
} from '../../shared/helpers';

interface Props {
  categories?: DslCategory[];
  additional?: BreadcrumbItem[];
  basePath?: string;
}

export const Breadcrumb: React.FC<Props> = ({ categories, additional = [], basePath }) => {
  const router = useRouter();

  let path = router.asPath;

  if (router.asPath[0] === '/') {
    path = router.asPath.substring(1);
  }

  const hierarchy = categories ? getCategoryHierarchy(categories, path.split('/')) : [];
  const items = [...generateCategoryBreadcrumbItems(hierarchy), ...additional];

  return (
    <Box sx={{ display: ['none', null, null, 'block'], my: 3 }}>
      {items.map((item, i) => {
        const isLastItem = i === items.length - 1;

        // Set the base of the path
        let base = '';

        // Only if there are breadcrumbs to generate
        if (i > 0) {
          base = basePath || '/';

          // Look at previous links and append the path to build the url
          for (let p = 1; p < i; p++) {
            // Build the url path
            base += convertUrlChars(items[p].as) + '/';
          }
        }

        const as = `${base}${item.as}`;

        return (
          <Text key={i} variant="breadcrumb" sx={{ pointerEvents: isLastItem ? 'none' : '' }}>
            <Link href={item.href} key={item.as} as={as}>
              <a>{item.label}</a>
            </Link>

            {!isLastItem && <Text sx={{ display: 'inline-block', px: 2 }}>{'>'}</Text>}
          </Text>
        );
      })}
    </Box>
  );
};
