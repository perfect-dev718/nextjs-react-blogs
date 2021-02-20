import { CategoryWrapper } from 'components/pages/category-wrapper';
import { ContentPage } from 'components/pages/content-page';
import { ProductPage } from 'components/pages/product-page';
import { Client, initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import {
  categoryRepository,
  ContentModel,
  ContentRepository,
  PageType,
  productRepository,
  urlResolver,
} from 'shared';

interface Props {
  pageType: PageType;
  data: any;
  error404: boolean;
}

const WildCard: NextPage<Props> = ({ pageType, data, error404 }) => {
  if (error404) {
    return null;
  }

  switch (pageType) {
    case PageType.product:
      return <ProductPage data={data.productPage} />;

    case PageType.contentPage:
      return <ContentPage data={data.contentPage as ContentModel} />;

    default:
      return <CategoryWrapper data={data} />;
  }
};

export default WildCard;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const apolloClient = initializeApollo();
  const pathname = `/${((context.params?.pathname || []) as Array<string>).join('/')}`;
  const pageType = urlResolver(pathname, ['/cookie-policy', '/news']);

  switch (pageType) {
    case PageType.category:
      return await handleCategoryPage(apolloClient, pathname);

    case PageType.product:
      return await handleProductPage(apolloClient, pathname);

    case PageType.contentPage:
      return await handleContentPage(pathname);

    default:
      return await handleCategoryPage(apolloClient, pathname);
  }
};

/**
 * Handles a category level page by using the supplied pathname to lookup the
 * category from the GraphQL layer. Will return fully loaded data if the
 * pathname matches with a known category.
 * @param pathname - the full path of the category
 */
const handleCategoryPage = async (client: Client, pathname: string) => {
  const pageType = PageType.category;

  const category = await categoryRepository.getCategoryFromPath(client, pathname);

  if (category) {
    return {
      props: {
        pageType,
        data: category,
      },
    };
  }

  // TODO: Should we handle it this way? We try to identify if the path is a
  // category first and if not, we attempt to check if it is a product instead.
  const tryProduct = await handleProductPage(client, pathname);

  if (!tryProduct.props.error404) {
    return tryProduct;
  }

  // Path is neither a category or product, so 404
  return { props: { pageType, error404: true } };
};

const handleProductPage = async (client: Client, pathname: string) => {
  const pageType = PageType.product;
  const product = await productRepository.getProductDetail(client, pathname);

  if (product) {
    return {
      props: {
        pageType,
        data: {
          productPage: {
            product,
          },
        },
      },
    };
  }

  return { props: { pageType, error404: true } };
};

/**
 * Handles a content page by using the pathname to lookup known content. If the
 * result is null, then no content will exist at this path.
 * @param pathname - the full path of the content page
 */
const handleContentPage = async (pathname: string) => {
  const paths = pathname.split('/').reverse();
  const slug = paths[0];
  const type = paths[1] || 'content-page';
  const contentPage = (await ContentRepository.getList({ type, slug })).data;

  return {
    props: {
      pageType: PageType.contentPage,
      data: { contentPage: contentPage[0] },
      error404: contentPage ? false : true,
    },
  };
};
