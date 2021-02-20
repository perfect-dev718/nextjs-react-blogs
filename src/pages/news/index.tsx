import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Box, Flex } from 'rebass';
import {
  ContentRepository,
  BreadcrumbItem,
  NewsContent,
  Pagination as AppPagination,
} from 'shared';
import { Breadcrumb } from 'shared/components/breadcrumb';
import { LatestNews } from 'components/pages/news/latest-news';
import { NewsPanel } from 'components/pages/news/news-panel';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import GridView from 'assets/icons/grid-view.svg';
import ListView from 'assets/icons/list-view.svg';

interface Props {
  items: NewsContent[];
  total: number;
}

const PER_PAGE = 12;

const ViewButtonStyle = {
  display: ['none', 'inline-block'],
  mx: 2,
  fill: 'secondary',
  cursor: 'pointer',
  '&.active *': {
    fill: 'primary',
  },
};

const News: React.FC<Props> = ({ items, total }) => {
  const [news, setNews] = useState<NewsContent[]>(items);
  const [page, setPage] = useState(1);

  // Define view and load from localstorage
  const [view, setView] = useState('grid');
  useEffect(() => {
    setView(localStorage.getItem('view') || 'grid');
  }, []);
  const changeView = (view: string) => {
    localStorage.setItem('view', view);
    setView(view);
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      label: 'News',
      href: '#',
      as: '#',
    },
  ];

  const onPageChange = async (page: number) => {
    setPage(page);
    const { data } = await ContentRepository.getList({ type: 'news', perPage: PER_PAGE, page });
    setNews(data as NewsContent[]);
  };

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Box variant="container">
        <Breadcrumb additional={breadcrumb} />
      </Box>

      <LatestNews items={news} />

      <Box variant="container">
        <Flex justifyContent="flex-end" mt={4}>
          <Box
            className={`${view == 'list' ? 'active' : ''}`}
            sx={ViewButtonStyle}
            onClick={() => changeView('list')}
          >
            <ListView />
          </Box>

          <Box
            className={`${view == 'grid' ? 'active' : ''}`}
            sx={ViewButtonStyle}
            onClick={() => changeView('grid')}
          >
            <GridView />
          </Box>
        </Flex>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, ${view === 'grid' ? '420px' : '640px'})`,
            columnGap: 2,
            rowGap: 3,
            justifyContent: 'center',
            mt: 4,
          }}
        >
          {news.map((item) => {
            return (
              <Link key={item.id} href={`/news/${item.slug}`}>
                <Box
                  sx={{
                    p: 3,
                    textAlign: 'right',
                    cursor: 'pointer',
                    backgroundColor: 'brandThree.11',
                    minHeight: view === 'grid' ? '420px' : '225px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <NewsPanel item={item} small />
                </Box>
              </Link>
            );
          })}
        </Box>
        <Box sx={{ mt: 3 }}>
          <AppPagination
            itemsCountPerPage={PER_PAGE}
            defaultPage={page}
            totalItemsCount={total}
            onPageChange={onPageChange}
            hideFirstLastPages={true}
          />
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [items] = await Promise.all([
    ContentRepository.getList({ type: 'news', perPage: PER_PAGE }),
  ]);

  return {
    props: {
      items: items.data,
      total: items.total,
    },
  };
};

export default News;
