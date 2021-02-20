import { Box, Heading, Text } from 'rebass';
import { Breadcrumb } from 'shared/components/breadcrumb';
import { BreadcrumbItem, ContentRepository, NewsContent, BannerAd, truncateWords } from 'shared';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { LatestNews } from 'components/pages/news/latest-news';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface Props {
  latestNews: NewsContent[];
  news: NewsContent;
}

const News: React.FC<Props> = ({ latestNews, news }) => {
  const breadcrumb: BreadcrumbItem[] = [
    {
      label: 'News',
      href: '/news',
      as: 'news',
    },
    {
      label: news.title,
      href: '#',
      as: '#',
    },
  ];

  const date = format(parseISO(news.date), 'dd/MM/yyyy');

  return (
    <>
      <Box variant="container">
        <Breadcrumb additional={breadcrumb} />
      </Box>
      <LatestNews items={latestNews}></LatestNews>
      <Box variant="container" sx={{ color: 'ourBlack', mt: 4, mb: 5 }}>
        <Box sx={{ px: 4 }}>
          <Heading>{news.title}</Heading>
          <Text sx={{ textTransform: 'uppercase', mt: 2 }}>
            I am topic name for this long article{' '}
          </Text>
          <Box sx={{ width: 160, borderTop: 'standard', borderWidth: 4, mt: 4, mb: 2 }}></Box>
          <Text sx={{ color: 'greyFont', mb: 3 }}>
            {news.custom.author} {date}
          </Text>
          <Box
            sx={{ columnCount: 2, columnGap: 100 }}
            dangerouslySetInnerHTML={{ __html: news.content }}
          ></Box>
        </Box>
      </Box>
      <Box variant="container" sx={{ px: [0, 0, 0, 0] }}>
        <BannerAd src="/img/promo/news.png"></BannerAd>
      </Box>
      <Box variant="container">
        <Heading sx={{ mt: 5, mb: 4 }}>recomended reads</Heading>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 242px))',
            gap: 3,
          }}
        >
          {latestNews.map((item) => {
            return (
              <Link href={`/news/${item.slug}`} key={item.id}>
                <Box
                  sx={{
                    minHeight: 243,
                    backgroundColor: 'brandThree.11',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    textAlign: 'right',
                    color: 'ourBlack',
                    cursor: 'pointer',
                  }}
                >
                  <Text sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{item.title}</Text>
                  <Text
                    dangerouslySetInnerHTML={{ __html: truncateWords(item.excerpt, 15) }}
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: 3 }}
                  ></Text>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const slug = context.query.slug as string;
  const [latestNews, news] = await Promise.all([
    ContentRepository.getList({ type: 'news', perPage: 5 }),
    ContentRepository.getList({ type: 'news', slug }),
  ]);

  return {
    props: {
      latestNews: latestNews.data,
      news: news.data[0],
    },
  };
};

export default News;
