import { NewsContent } from 'shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Link from 'next/link';
import { Box } from 'rebass';
import { NewsPanel } from './news-panel';

SwiperCore.use([Pagination]);

interface Props {
  items: NewsContent[];
}

export const LatestNews: React.FC<Props> = ({ items }) => {
  return (
    <Box sx={{ backgroundColor: 'brandThree.11' }}>
      <Box variant="container">
        <Swiper pagination={{ clickable: true }} slidesPerView={1} className="standard-dot">
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={`/news/${item.slug}`}>
                  <Box sx={{ cursor: 'pointer', py: 4, px: 5, textAlign: 'right' }}>
                    <NewsPanel item={item} />
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};
