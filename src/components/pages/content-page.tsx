import Head from 'next/head';
import { ContentModel, ContentContainer, FullHeading } from 'shared';

interface Props {
  data: ContentModel;
}

export const ContentPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <FullHeading>
        <span dangerouslySetInnerHTML={{ __html: data.title }}></span>
      </FullHeading>
      <ContentContainer content={data.content || ''} />
    </>
  );
};
