import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Box, Image } from 'rebass';
import {
  Breadcrumb,
  BreadcrumbItem,
  ContentCategory,
  ContentContainer,
  ContentModel,
  ContentRepository,
  FullHeading,
} from 'shared';

interface LinkItem {
  title: string;
  id: string;
  slug: string;
  thumbnail: string;
  url?: string;
}

interface Props {
  linkItems: LinkItem[];
  currentCategory: ContentCategory;
  post: ContentModel | null;
  breadcrumbs: BreadcrumbItem[];
  categoryPath: string;
}

interface LinkProps {
  item: LinkItem;
}

const LinkGrid: React.FC<LinkProps> = ({ item }) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        boxShadow: '0 0 2px rgba(0,0,0,0.29)',
        p: 3,
        ':hover': { boxShadow: '0 0 25px rgba(0,0,0,0.29)' },
      }}
    >
      <Image src={item.thumbnail} />
      <Box sx={{ fontWeight: 'bold', mt: 2 }}>
        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
      </Box>
    </Box>
  );
};

const Mps: React.FC<Props> = ({ linkItems, currentCategory, post, breadcrumbs, categoryPath }) => {
  if (post) {
    return (
      <Box variant="container">
        <Breadcrumb
          basePath="/mps/"
          additional={[
            ...breadcrumbs,
            {
              label: post.title,
              href: '',
              as: '',
            },
          ]}
        ></Breadcrumb>
        <FullHeading>
          <span dangerouslySetInnerHTML={{ __html: post.title }}></span>
        </FullHeading>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: 300, pr: 5 }}>
            {linkItems.map((item) => {
              const isActive = item.slug === post.slug;
              return (
                <Link
                  key={item.id}
                  href="/mps/[...pathname]"
                  as={`/mps/${categoryPath}/${item.slug}`}
                >
                  <Box
                    sx={{
                      py: 3,
                      borderBottom: '1px solid #ccc',
                      cursor: 'pointer',
                      fontSize: 3,
                      fontWeight: isActive ? 600 : 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                    <FiArrowRight />
                  </Box>
                </Link>
              );
            })}
          </Box>
          <Box sx={{ flex: 1 }}>
            <ContentContainer content={post.content || ''} />
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box variant="container">
      <Breadcrumb additional={breadcrumbs} basePath="/mps/"></Breadcrumb>
      <FullHeading>
        <span dangerouslySetInnerHTML={{ __html: currentCategory.name }}></span>
      </FullHeading>
      <Box
        sx={{
          display: 'grid',
          maxWidth: '1200px',
          margin: 'auto',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gridGap: '16px',
        }}
      >
        {linkItems.map((item) => {
          if (item.url) {
            return (
              <a href={item.url} target="_blank" rel="noreferrer" key={item.id}>
                <LinkGrid item={item}></LinkGrid>
              </a>
            );
          }
          return (
            <Link key={item.id} href="/mps/[...pathname]" as={`/mps/${categoryPath}/${item.slug}`}>
              <a>
                <LinkGrid item={item}></LinkGrid>
              </a>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

function resolveUrl(paths: string[], allCategories: ContentCategory[]) {
  const categories: ContentCategory[] = [];
  let postSlug = '';
  const breadcrumbs: BreadcrumbItem[] = [];
  let categoryPath = '';

  for (let path of paths) {
    const category = allCategories.find((o) => o.slug === path);
    if (category) {
      categories.push(category);
      categoryPath = categories.map((o) => o.slug).join('/');

      breadcrumbs.push({
        label: category.name,
        href: '/mps/[...pathname]',
        as: path,
      });
    } else {
      postSlug = path;
    }
  }

  return { categories, postSlug, breadcrumbs, categoryPath };
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const allCategories = await ContentRepository.getCategories();
  const paths = (context.params.pathname as string[]) || [];

  const { categories, postSlug, breadcrumbs, categoryPath } = resolveUrl(paths, allCategories);
  const currentCategory = [...categories].reverse()[0];
  const subCategories = allCategories.filter((o) => o.parent === currentCategory.id);
  const linkItems: LinkItem[] = [];

  const posts = (
    await ContentRepository.getList({
      type: 'mypubsupport',
      categories: currentCategory.id.toString(),
    })
  ).data;

  for (let post of posts) {
    linkItems.push({
      thumbnail: post.thumbnail,
      id: post.slug,
      slug: post.slug,
      title: post.title,
      url: post.custom.link || '',
    });
  }

  for (let category of subCategories) {
    linkItems.push({
      thumbnail: category.thumbnail,
      id: category.slug,
      slug: category.slug,
      title: category.name,
    });
  }

  const post = postSlug ? posts.find((o) => o.slug === postSlug) : null;

  return {
    props: { linkItems, currentCategory, post: post, breadcrumbs, categoryPath },
  };
};

export default Mps;
