import React, { MouseEvent, ReactElement } from 'react';
import { Box, Link } from 'rebass';

interface Props {
  pageText: string | ReactElement;
  pageNumber: number;
  isActive?: boolean;
  isDisabled?: boolean;
  href: string;
  onClick?: (pageNumber: number) => void;
}

const Page: React.FC<Props> = (props) => {
  const handleClick = (e: MouseEvent) => {
    const { isDisabled, pageNumber } = props;
    e.preventDefault();
    if (isDisabled) {
      return;
    }

    if (props.onClick) {
      props.onClick(pageNumber);
    }
  };

  let { pageText, isActive, isDisabled, href } = props;

  return (
    <Box
      as="li"
      minWidth={32}
      height={35}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        px: 2,
        py: 1,
        cursor: 'pointer',
        color: isActive ? 'paginationFont' : isDisabled ? 'greyFont' : 'primary',
        pointerEvents: isDisabled ? 'none' : null,
        backgroundColor: isActive ? 'paginationActiveBg' : 'paginationBg',
        border: isActive ? 'paginationActive' : 'pagination',
        ':hover': {
          backgroundColor: isActive ? null : 'paginationHover',
          border: isActive ? null : 'paginationHover',
        },
      }}
      onClick={handleClick}
    >
      <Link
        href={href}
        sx={{ height: '100%', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
      >
        {pageText}
      </Link>
    </Box>
  );
};

export default Page;
