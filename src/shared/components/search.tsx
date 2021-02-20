import { useLazyQuery } from '@apollo/client';
// @ts-ignore
import SearchIcon from 'assets/icons/search.svg';
import { Input } from '@rebass/forms';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Box, Flex, FlexProps, Image, Text } from 'rebass';
import { DslProduct, SearchProductsQuery } from '../generated/graphql';
import searchProductsQuery from '../graphql/queries/search-products.graphql';
import { useDebounce } from '../hooks/use-debounce';
import { LoadingSpinner } from './loading-spinner';
import { Currency } from './currency';

const previewLength = 5;

interface Props extends FlexProps {
  placeholder?: string;
}

export const Search: React.FC<Props> = ({
  placeholder = 'Search product or brand',
  sx = {},
  ...props
}) => {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [searchStr, setSearchStr] = useState('');
  const debouncedSearchStr = useDebounce(searchStr, 300);

  const [searchQuery, { data: { dslProductSearch = null } = {}, loading }] = useLazyQuery<
    SearchProductsQuery
  >(searchProductsQuery, { fetchPolicy: 'network-only' });

  const products = (dslProductSearch?.products || []) as DslProduct[];

  const onFocus = () => {
    setVisible(true);
    setFocused(true);
  };

  const onBlur = () => {
    setShowResults(false);
    setSearchStr('');
    setFocused(false);
    setTimeout(() => setVisible(false), 400);
  };

  const onSearch = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/search/${searchStr}`);
  };

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };

  useEffect(() => {
    if (debouncedSearchStr) {
      searchQuery({ variables: { searchQuery: debouncedSearchStr } });
    } else {
      setShowResults(false);
    }
  }, [debouncedSearchStr]);

  useEffect(() => {
    if (products?.length && searchStr && debouncedSearchStr) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [products]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.6)',
          zIndex: 100,
          transition: '0.4s opacity ease',
          opacity: focused ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
        }}
        onClick={onBlur}
      />

      <Flex
        as="form"
        onSubmit={onSearch}
        alignItems="center"
        sx={{
          flex: 1,
          borderRadius: 4,
          color: 'greyFont',
          position: 'relative',
          zIndex: 101,
          ...sx,
        }}
        ml={[4, 4, 3, 6]}
        mr={[0, 0, 3, 6]}
        {...props}
      >
        <Input
          variant="search"
          type="text"
          placeholder={placeholder}
          value={searchStr}
          sx={{
            px: 3,
            pr: 4,
            width: '100%',
            height: 48,
          }}
          onFocus={onFocus}
          onChange={onSearchInput}
          aria-label={placeholder}
        />
        {loading ? (
          <LoadingSpinner size={24} style={{ position: 'absolute', right: 12 }} />
        ) : (
          <SearchIcon size={24} style={{ position: 'absolute', right: 12 }} />
        )}

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 40,
            zIndex: 101,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'searchResultsBorder',
            backgroundColor: 'searchResultsBg',
            display: showResults ? 'block' : 'none',
            py: 3,
          }}
        >
          <Text color="heading" fontWeight="bold" sx={{ textTransform: 'uppercase', mb: 3, px: 3 }}>
            Results
          </Text>

          {(products as DslProduct[]).slice(0, previewLength).map((x) => (
            <Link href={{ pathname: '/[...pathname]' }} as={`/${x.seoSlug}`} key={x.id}>
              <Flex
                onClick={onBlur}
                alignItems="center"
                px={3}
                py={2}
                sx={{
                  cursor: 'pointer',
                  transition: '0.2s all',
                  ':hover': { background: 'search', color: 'black' },
                }}
              >
                <Box
                  height={70}
                  width={70}
                  mr={3}
                  sx={{ display: ['none', 'flex'], justifyContent: 'center', alignItems: 'center' }}
                >
                  <Image src={x.mainImage?.thumbnailPath as string} height={70} />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {x.name}
                  </Text>
                  <Currency value={x.price.total} />
                </Box>
              </Flex>
            </Link>
          ))}

          {products && (products as DslProduct[]).length > previewLength && (
            <Link href={{ pathname: '/search/[query]' }} as={`/search/${searchStr}`}>
              <Text
                px={3}
                pt={3}
                as="a"
                sx={{
                  cursor: 'pointer',
                  borderTopWidth: 1,
                  borderTopStyle: 'solid',
                  borderTopColor: 'borderColor',
                  width: '100%',
                  display: 'block',
                  transition: '0.2s all',
                  ':hover': {
                    color: 'black',
                  },
                }}
                onClick={onBlur}
              >
                See all search results
              </Text>
            </Link>
          )}
        </Box>
      </Flex>
    </>
  );
};
