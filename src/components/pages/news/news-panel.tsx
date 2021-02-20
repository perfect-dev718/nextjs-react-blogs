import { NewsContent, truncateWords } from 'shared';
import { format, parseISO } from 'date-fns';
import { Box, Text } from 'rebass';

interface Props {
  item: NewsContent;
  small?: boolean;
}

export const NewsPanel: React.FC<Props> = ({ item, small }) => {
  const date = format(parseISO(item.date), 'dd-MM-yyyy');
  return (
    <Box>
      <Box sx={{ maxWidth: 900, ml: 'auto', color: 'ourBlack' }}>
        <Text
          sx={{
            fontWeight: 700,
            fontSize: small ? 3 : 4,
            textTransform: 'uppercase',
            mb: 3,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            height: 46,
          }}
          dangerouslySetInnerHTML={{ __html: item.title as string }}
        />
        <Text
          dangerouslySetInnerHTML={{ __html: item.excerpt.toString() }}
          sx={{
            fontSize: small ? 1 : 2,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            height: 48,
            p: {
              m: 0,
            },
          }}
        />
      </Box>
      <Box sx={{ color: 'greyFont', textAlign: 'right', fontSize: small ? 1 : 2 }}>
        <Box
          sx={{
            width: 160,
            borderTop: 'standard',
            borderTopColor: 'greyFont',
            display: 'inline-block',
            mb: 1,
          }}
        />
        <Text>
          {item.custom.author} - {date}
        </Text>
      </Box>
    </Box>
  );
};
