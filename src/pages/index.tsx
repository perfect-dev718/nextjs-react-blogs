import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Box, Flex, Image, Text } from 'rebass';
import { ContentRepository, HomepageContent } from 'shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Pagination]);

interface Props {
  homepage: HomepageContent;
}

const Index: React.FC<Props> = ({ homepage }) => {
  return (
    <div>
      <Head>
        <title>Admiral</title>
      </Head>
      <Box variant='container' sx={{ mt: 4, pt: 3 }}>
        <Box sx={{ display: [null, null, 'flex'] }}>
          <Box sx={{ flex: 916 }} width={['100%', '100%', '50%', '50%', '50%']}>
            <Swiper pagination={{ clickable: true }} slidesPerView={1} className='big-dot'>
              {homepage.custom.slider &&
              homepage.custom.slider.map((item) => {
                return (
                  <SwiperSlide key={item.image}>
                    <Link href={item.url}>
                      <Box
                        sx={{
                          cursor: 'pointer',
                          minHeight: ['300px', 492],
                          backgroundImage: `url(${item.image})`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}

                      ></Box>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box sx={{ flex: 463, ml: [0, 0, 4, 4, 4], mt: [4,4,0] }} width={['100%', '100%', '50%', '50%', '50%']}>
            {homepage.custom.secondarySlider &&
            homepage.custom.secondarySlider.map((item) => {
              return (
                <Link href={item.url} key={item.image}>
                  <Box
                    sx={{
                      backgroundImage: `url(${item.image})`,
                      height: ['180px', '180px', '230px'],
                      objectFit: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      p: [3, 3, 5],
                      mb: [2, 2, 4],
                      transition: 'transform 0.5s',
                      cursor: 'pointer',
                    }}
                  ></Box>
                </Link>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {homepage.custom.tiles &&
          homepage.custom.tiles.map((item) => {
            return (
              <Link key={item.icon} href={item.link || ''}>
                <Box
                  sx={{
                    width: 186,
                    height: 191,
                    borderColor: 'rgba(0, 71, 18, 0.35)',
                    borderWidth: 3,
                    borderStyle: 'solid',
                    borderRadius: 8,
                    m: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: 4,
                    pb: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                  width={['40%', '40%', '25%', '20%', '15%']}
                >
                  <Box sx={{ minHeight: 50 }}>
                    <Image src={item.icon} />
                  </Box>
                  <Text sx={{ textTransform: 'uppercase', fontWeight: 700, mt: 3 }}>
                    {item.title}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [homepage] = await Promise.all([
    ContentRepository.getList({ type: 'layout', slug: 'home-page' }),
  ]);

  return {
    props: {
      homepage: homepage.data[0],
    },
  };
};

export default Index;
