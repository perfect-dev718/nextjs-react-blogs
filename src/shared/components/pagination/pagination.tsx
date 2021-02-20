import React, { useEffect, useState } from 'react';
import { PaginationControl } from './pagination-control';
import { SxStyleProp } from 'rebass';

interface Props {
  itemsCountPerPage: number;
  totalItemsCount: number;
  defaultPage: number;
  onPageChange(page: number): void;
  hideFirstLastPages?: boolean;
  hideDisabled?: boolean;
  hideNavigation?: boolean;
  prevPageText?: string;
  nextPageText?: string;
  firstPageText?: string;
  lastPageText?: string;
  align?: string;
  sx?: SxStyleProp;
}

export const Pagination: React.FC<Props> = ({
  itemsCountPerPage,
  totalItemsCount,
  defaultPage = 1,
  onPageChange,
  hideFirstLastPages,
  hideDisabled,
  hideNavigation,
  prevPageText,
  nextPageText,
  firstPageText,
  lastPageText,
  align,
  sx,
}) => {
  const [page, setPage] = useState(defaultPage);
  const onChange = (page: number) => setPage(page);

  useEffect(() => {
    if (page !== defaultPage) {
      const element = document.querySelector('#heading');
      const topPos = (element?.getBoundingClientRect().top || 0) + window.pageYOffset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });

      onPageChange(page);
    }
  }, [page]);

  if (itemsCountPerPage < totalItemsCount) {
    return (
      <PaginationControl
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        activePage={page}
        onChange={onChange}
        prevPageText={prevPageText}
        nextPageText={nextPageText}
        firstPageText={firstPageText}
        lastPageText={lastPageText}
        hideFirstLastPages={hideFirstLastPages}
        hideDisabled={hideDisabled}
        hideNavigation={hideNavigation}
        align={align}
        sx={sx}
      />
    );
  }

  return null;
};
