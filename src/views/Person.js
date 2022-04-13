import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdb from 'api/tmdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { clearLoading, fetchMoviesByPerson, setLoading } from 'actions';
import queryString from 'query-string';

import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';
import { Button } from 'components/atoms/Button/Button';

import { BioWrapper, StyledName, DetailsWrapper, StyledBirthday, StyledBio, StyledH2, Wrapper, StyledLazyLoad } from './Person.styles';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import { LinkWrapper } from 'components/atoms/LinkWrapper/LinkWrapper';
import { posterLink } from './Root';
import { Element, animateScroll as scroll } from 'react-scroll';
import Loader from 'components/atoms/Loader/Loader';

const Person = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const { personMovies } = useSelector((state) => state.person);
  const { loading } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const location = useLocation();

  const { page } = queryString.parse(location.search);
  console.log(personMovies);

  useEffect(() => {
    (async () => {
      try {
        dispatch(setLoading());
        const { data } = await tmdb.get(`/person/${id}`);
        setInfo(data);
        dispatch(clearLoading());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id, dispatch]);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    dispatch(fetchMoviesByPerson(id, page));
  }, [dispatch, id, page]);

  const renderWebsite = (link) => {
    if (!link) return;
    return (
      <Button as="a" href={link} target="blank">
        Website
        <FontAwesomeIcon icon={['fas', 'link']} style={{ marginLeft: '1rem' }} />
      </Button>
    );
  };

  const renderImdb = (id) => {
    if (!id) return;
    return (
      <Button as="a" href={`https://www.imdb.com/name/${id}`} target="blank">
        IMDB
        <FontAwesomeIcon icon={['fab', 'imdb']} style={{ marginLeft: '1rem' }} />
      </Button>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <BioWrapper>
            <StyledLazyLoad height={100}>
              <StyledImage src={posterLink + 'w780' + info.profile_path} alt={info.name} />
            </StyledLazyLoad>
            <DetailsWrapper>
              <StyledName as="h2">{info.name}</StyledName>
              <StyledBirthday>{info.birthday}</StyledBirthday>
              <StyledInfoTitle as="h3">The Biography</StyledInfoTitle>
              <StyledBio>{info.biography}</StyledBio>
              <LinkWrapper>
                {renderWebsite(info.homepage)}
                {renderImdb(info.imdb_id)}
              </LinkWrapper>
            </DetailsWrapper>
          </BioWrapper>
          <StyledH2>Also appears in:</StyledH2>
          {loading && !personMovies.results.length ? (
            <Loader />
          ) : (
            <Element name="scroll-to-element">
              <MoviesList movies={personMovies.results} page={personMovies.page} totalPages={personMovies.total_pages} />
            </Element>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Person;
