import React, { useState, useEffect } from 'react';
import tmdb from 'api/tmdb';
import { useParams } from 'react-router';
import {
  MovieInfo,
  InfoWrapper,
  Wrapper,
  DetailWrapper,
  GenreWrapper,
  StyledLink,
  StyledInfoTitle,
  MovieTitle,
  MovieTagLine,
} from './MovieDetails.styles';
import Rating from 'components/molecules/Rating/Rating';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import Cast from 'components/organisms/Cast/Cast';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get(`/movie/${id}`);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const renderInfo = (lang, time, data) => {
    const info = [];
    if (!lang) return;
    if (lang.length !== 0) {
      info.push(lang[0].name);
    }
    info.push(time, data);
    return info
      .filter((el) => el !== null)
      .map((el) => (typeof el === 'number' ? `${el} min.` : el))
      .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
  };

  const splitDate = (date) => {
    if (!date) return;
    const [year] = date.split('-');
    return year;
  };

  const renderGenres = (genre) => {
    if (!genre) return;
    return genre.map(({ name, id }) => (
      <StyledLink to={`/genre/${name}`} key={id}>
        {name}
      </StyledLink>
    ));
  };

  const posterLink = `https://image.tmdb.org/t/p/`;

  return (
    <Wrapper>
      <StyledImage
        src={posterLink + 'w780' + movie.poster_path}
        alt={movie.title}
      />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieTagLine>{movie.tagline}</MovieTagLine>
        <DetailWrapper>
          <Rating value={movie.vote_average / 2} />
          <p>
            {renderInfo(
              movie.spoken_languages,
              movie.runtime,
              splitDate(movie.release_date)
            )}
          </p>
        </DetailWrapper>
        <InfoWrapper>
          <StyledInfoTitle as="h2">the genres:</StyledInfoTitle>
          <GenreWrapper>{renderGenres(movie.genres)}</GenreWrapper>
        </InfoWrapper>
        <InfoWrapper>
          <StyledInfoTitle as="h2">Storyline:</StyledInfoTitle>
          <p>{movie.overview}</p>
        </InfoWrapper>
        <InfoWrapper>
          <StyledInfoTitle as="h2">Cast:</StyledInfoTitle>
          <Cast />
        </InfoWrapper>
      </MovieInfo>
    </Wrapper>
  );
};

export default MovieDetails;
