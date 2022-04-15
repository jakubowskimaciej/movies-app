import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { Input } from 'components/atoms/Input/Input';
import { ImageWrapper, SearchbarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StyledLink, StyledTitle } from './Searchbar.styles';
import { posterLink } from 'views/Root';
import { useSearch } from 'hooks/useSearch/useSearch';
import Blank from 'assets/Blank.svg';
import Loader from 'components/atoms/Loader/Loader';

const Searchbar = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { searchMovies } = useSearch();

  const getMatchingMovies = debounce(async ({ inputValue }) => {
    if (inputValue === '') return '';
    const { results } = await searchMovies(inputValue);
    setSearchedMovies(results);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: searchedMovies,
    itemToString: (item) => (item ? item.title : ''),
    onInputValueChange: getMatchingMovies,
  });

  return (
    <SearchbarWrapper>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps({})} name="search" id="search" type="text" placeholder="Search for a movie..." autoComplete="off" />
        <SearchResults isVisible={isOpen && searchedMovies.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            searchedMovies.map((item, index) => (
              <SearchResultsItem {...getItemProps({ item, index })} highlighted={highlightedIndex === index} key={item.id}>
                <StyledLink to={`/movie/${item.id}`}>
                  <ImageWrapper>
                    {!loaded ? <Loader isSmall /> : null}
                    <img
                      src={item.poster_path ? posterLink + 'w185' + item.poster_path : posterLink + 'w185' + item.profile_path}
                      alt={item.title}
                      onLoad={() => setLoaded(true)}
                      onError={(e) => {
                        if (e.target.src !== `${Blank}`) {
                          e.target.src = `${Blank}`;
                        }
                      }}
                    />
                  </ImageWrapper>
                  <StyledTitle highlighted={highlightedIndex === index}>{item.title ? item.title : item.name}</StyledTitle>
                </StyledLink>
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchbarWrapper>
  );
};

export default Searchbar;
