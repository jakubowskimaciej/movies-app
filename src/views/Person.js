import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdb from 'api/tmdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByPerson } from 'actions';

import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';
import { Button } from 'components/atoms/Button/Button';

import {
  BioWrapper,
  StyledName,
  DetailsWrapper,
  StyledBirthday,
  StyledBio,
  StyledH2,
  Wrapper,
  StyledLazyLoad,
} from './Person.styles';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import { LinkWrapper } from 'components/atoms/LinkWrapper/LinkWrapper';
import { posterLink } from './Root';
import { animateScroll as scroll } from 'react-scroll';

const Person = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const movies = useSelector((state) => state.personMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get(`/person/${id}`);
        setInfo(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      delay: 500,
    });
    dispatch(fetchMoviesByPerson(id));
  }, [dispatch, id]);

  const renderWebsite = (link) => {
    if (!link) return;
    return (
      <Button as="a" href={link} target="blank">
        Website
        <FontAwesomeIcon
          icon={['fas', 'link']}
          style={{ marginLeft: '1rem' }}
        />
      </Button>
    );
  };

  const renderImdb = (id) => {
    if (!id) return;
    return (
      <Button as="a" href={`https://www.imdb.com/name/${id}`} target="blank">
        IMDB
        <FontAwesomeIcon
          icon={['fab', 'imdb']}
          style={{ marginLeft: '1rem' }}
        />
      </Button>
    );
  };

  return (
    <Wrapper>
      <BioWrapper>
        <StyledLazyLoad height={100}>
          <StyledImage
            src={posterLink + 'w780' + info.profile_path}
            alt={info.name}
          />
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
      <MoviesList movies={movies} />
    </Wrapper>
  );
};

export default Person;
