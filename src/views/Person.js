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
import PersonError from 'assets/PersonError.svg';

import { BioWrapper, StyledName, DetailsWrapper, StyledBirthday, StyledBio, StyledH2, Wrapper } from './Person.styles';
import { ImgLoading } from 'components/atoms/ImgLoading/ImgLoading';
import MoviesList from 'components/molecules/MoviesList/MoviesList';
import { LinkWrapper } from 'components/atoms/LinkWrapper/LinkWrapper';
import { posterLink } from './Root';
import { Element, scroller } from 'react-scroll';
import Loader from 'components/atoms/Loader/Loader';

const Person = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [readMore, setReadMore] = useState(true);
  const { personMovies } = useSelector((state) => state.person);
  const { loading } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const location = useLocation();

  const { page } = queryString.parse(location.search);

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
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      smooth: 'easeInOutQuart',
      offset: -280,
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

  const readMoreHandler = () => {
    setReadMore((prevState) => !prevState);
    if (!readMore)
      return scroller.scrollTo('scroll-after-read-more', {
        duration: 1000,
        smooth: 'easeInOutQuart',
        offset: -150,
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <BioWrapper>
            {!loaded ? (
              <ImgLoading>
                <Loader />
              </ImgLoading>
            ) : null}
            <StyledImage
              src={posterLink + 'w780' + info.profile_path}
              alt={info.name}
              onLoad={() => setLoaded(true)}
              onError={(e) => {
                if (e.target.src !== `${PersonError}`) {
                  e.target.src = `${PersonError}`;
                }
              }}
              style={!loaded ? { display: 'none' } : {}}
            />
            <DetailsWrapper>
              <StyledName as="h2">{info.name}</StyledName>
              <StyledBirthday>{info.birthday}</StyledBirthday>
              <StyledInfoTitle as="h3">The Biography</StyledInfoTitle>
              <Element name="scroll-after-read-more">
                {info.biography ? (
                  <>
                    <StyledBio>{readMore ? info.biography.slice(0, 250) + `...` : info.biography}</StyledBio>
                    <Button isSecondary onClick={readMoreHandler}>
                      {readMore ? 'Read more' : 'Collapse'}
                    </Button>
                  </>
                ) : null}
              </Element>
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
