import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, fetchMovieVideos } from 'actions';

import {
  MovieInfo,
  InfoWrapper,
  Wrapper,
  DetailWrapper,
  GenreWrapper,
  StyledGenreLink,
  MovieTitle,
  MovieTagLine,
  ImageWrapper,
} from './MovieDetails.styles';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';
import Rating from 'components/molecules/Rating/Rating';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import Cast from 'components/organisms/Cast/Cast';
import { LinkWrapper } from 'components/molecules/LinkWrapper/LinkWrapper';
import { AWrapper } from 'components/atoms/AWrapper/AWrapper';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useModal from 'hooks/useModal/useModal';
import ModalVideo from 'react-modal-video';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movieDetails);
  const videos = useSelector((state) => state.movieVideos);
  const dispatch = useDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieVideos(id));
  }, [dispatch, id]);

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
      <StyledGenreLink to={`/genre/${name}`} key={id}>
        {name}
      </StyledGenreLink>
    ));
  };

  const renderTrailer = () => {
    if (videos.length === 0) return;
    const { key } = videos.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return (
      <>
        <Button isSecondary onClick={handleOpenModal}>
          Trailer
          <FontAwesomeIcon
            icon={['fas', 'play-circle']}
            style={{ marginLeft: '1rem' }}
          />
        </Button>
        {isModalOpen ? (
          <ModalVideo
            channel="youtube"
            isOpen={isModalOpen}
            videoId={key}
            onClose={handleCloseModal}
          />
        ) : null}
      </>
    );
  };

  const posterLink = `https://image.tmdb.org/t/p/`;

  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImage
          src={posterLink + 'w780' + movie.poster_path}
          alt={movie.title}
        />
        <LinkWrapper>
          <AWrapper href={movie.homepage} target="blank">
            <Button>
              Homepage
              <FontAwesomeIcon
                icon={['fas', 'link']}
                style={{ marginLeft: '1rem' }}
              />
            </Button>
          </AWrapper>
          <AWrapper>{renderTrailer()}</AWrapper>
        </LinkWrapper>
      </ImageWrapper>
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