// @ts-ignore
import FiChevronsLeft from '@meronex/icons/fi/FiChevronsLeft';
// @ts-ignore
import FiChevronsRight from '@meronex/icons/fi/FiChevronsRight';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import React, { Fragment } from 'react';
import Page from './page';
import { Paginator } from './paginator';
import { SxStyleProp, Box } from 'rebass';
import { SelectField } from '../forms/select-field';

interface Props {
  itemsCountPerPage?: number;
  pageRangeDisplayed?: number;
  activePage?: number;
  prevPageText?: string;
  nextPageText?: string;
  firstPageText?: string;
  lastPageText?: string;
  totalItemsCount: number;
  hideDisabled?: boolean;
  hideNavigation?: boolean;
  hideFirstLastPages?: boolean;
  align?: string;
  onChange?: (pageNumber: number) => void;
  getPageUrl?: (i: number) => string;
  sx?: SxStyleProp;
}

export const PaginationControl: React.FC<Props> = ({
  itemsCountPerPage = 10,
  pageRangeDisplayed = 5,
  activePage = 1,
  prevPageText,
  firstPageText,
  nextPageText,
  lastPageText,
  hideFirstLastPages = false,
  hideDisabled = false,
  hideNavigation = false,
  totalItemsCount,
  align = 'center',
  onChange,
  getPageUrl = () => '#',
  sx,
}) => {
  const isFirstPageVisible = (has_previous_page: boolean) => {
    if (hideFirstLastPages || (hideDisabled && !has_previous_page)) return false;
    return true;
  };

  const isPrevPageVisible = (has_previous_page: boolean) => {
    if (hideNavigation || (hideDisabled && !has_previous_page)) return false;
    return true;
  };

  const isNextPageVisible = (has_next_page: boolean) => {
    if (hideNavigation || (hideDisabled && !has_next_page)) return false;
    return true;
  };

  const isLastPageVisible = (has_next_page: boolean) => {
    if (hideFirstLastPages || (hideDisabled && !has_next_page)) return false;
    return true;
  };

  const buildPages = () => {
    const pages = [];
    const pageNumbers = [];
    const paginator = new Paginator(itemsCountPerPage, pageRangeDisplayed);

    const paginationInfo = paginator.build(totalItemsCount, activePage);

    for (let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
      pageNumbers.push(
        <Page
          isActive={i === activePage}
          key={i}
          href={getPageUrl(i)}
          pageNumber={i}
          pageText={i + ''}
          onClick={onChange}
        />,
      );
    }

    const options = new Array(paginationInfo.total_pages).fill(1).map((_, index) => ({
      label: `Page ${index + 1} of ${paginationInfo.total_pages}`,
      value: index + 1,
    }));

    pages.push(
      <Fragment key="page-numbers">
        <Box sx={{ display: ['none', 'none', 'block'] }} key="page-numbers-button">
          {pageNumbers}
        </Box>
        <Box sx={{ display: ['block', 'block', 'none'], mx: 'auto' }} key="page-number-selector">
          <SelectField
            id="wishlist-select"
            options={options}
            defaultValue={activePage}
            onSelectChange={(e) => onChange(e.value as number)}
            sx={{ width: 170 }}
          />
        </Box>
      </Fragment>,
    );

    isPrevPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={'prev' + paginationInfo.previous_page}
          href={getPageUrl(paginationInfo.previous_page)}
          pageNumber={paginationInfo.previous_page}
          onClick={onChange}
          pageText={prevPageText || <ArrowLeft />}
          isDisabled={!paginationInfo.has_previous_page}
        />,
      );

    isFirstPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={'first'}
          href={getPageUrl(1)}
          pageNumber={1}
          onClick={onChange}
          pageText={firstPageText || <FiChevronsLeft />}
          isDisabled={!paginationInfo.has_previous_page}
        />,
      );

    isNextPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={'next' + paginationInfo.next_page}
          href={getPageUrl(paginationInfo.next_page)}
          pageNumber={paginationInfo.next_page}
          onClick={onChange}
          pageText={nextPageText || <ArrowRight />}
          isDisabled={!paginationInfo.has_next_page}
        />,
      );

    isLastPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={'last'}
          href={getPageUrl(paginationInfo.total_pages)}
          pageNumber={paginationInfo.total_pages}
          onClick={onChange}
          pageText={lastPageText || <FiChevronsRight />}
          isDisabled={paginationInfo.current_page === paginationInfo.total_pages}
        />,
      );

    return pages;
  };
  const pages = buildPages();
  return (
    <Box
      as="ul"
      p={0}
      sx={{ textAlign: 'center', display: 'flex', justifyContent: align, ...(sx || {}) }}
    >
      {pages}
    </Box>
  );
};
