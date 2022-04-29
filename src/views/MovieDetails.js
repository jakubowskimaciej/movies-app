import React, { useEffect, useState } from 'react';
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
  ActiveButton,
} from './MovieDetails.styles';
import { StyledInfoTitle } from 'components/atoms/StyledInfoTitle/StyledInfoTitle';
import Rating from 'components/molecules/Rating/Rating';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import Cast from 'components/organisms/Cast/Cast';
import { LinkWrapper } from 'components/atoms/LinkWrapper/LinkWrapper';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useModal from 'hooks/useModal/useModal';
import ModalVideo from 'react-modal-video';
import { posterLink } from './Root';
import { animateScroll as scroll } from 'react-scroll';
import Blank from 'assets/Blank.svg';
import Loader from 'components/atoms/Loader/Loader';
import { ImgLoading } from 'components/atoms/ImgLoading/ImgLoading';

const MovieDetails = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const { movieVideos, movieDetails } = useSelector((state) => state.movie);
  const { inWatchlist } = useSelector((state) => state.inWatchlist);
  const { loading } = useSelector((state) => state.main);

  const dispatch = useDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      duration: 1000,
    });
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

  const renderGenres = (genre) => {
    if (!genre) return;
    return genre.map(({ name, id }) => (
      <StyledGenreLink to={`/genre/${name}`} key={id}>
        {name}
      </StyledGenreLink>
    ));
  };

  const renderTrailer = (videos) => {
    if (videos.length === 0) return null;
    const { key } = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

    return (
      <>
        <Button isSecondary onClick={handleOpenModal}>
          Trailer
          <FontAwesomeIcon icon={['fas', 'play-circle']} style={{ marginLeft: '1rem' }} />
        </Button>
        {isModalOpen ? <ModalVideo channel="youtube" isOpen={isModalOpen} videoId={key} onClose={handleCloseModal} /> : null}
      </>
    );
  };

  const renderWebsite = (link) => {
    if (!link) return null;
    return (
      <Button as="a" href={movieDetails.homepage} target="blank">
        Homepage
        <FontAwesomeIcon icon={['fas', 'link']} style={{ marginLeft: '1rem' }} />
      </Button>
    );
  };

  const handleAddToWatchlist = () => {
    dispatch({
      type: 'ADD_TO_WATCHLIST',
      payload: movieDetails,
    });
  };

  let storedMovie = inWatchlist.find((item) => item.id === movieDetails.id);
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <ImageWrapper>
            {!loaded ? (
              <ImgLoading>
                <Loader />
              </ImgLoading>
            ) : null}
            <StyledImage
              src={posterLink + 'w780' + movieDetails.poster_path}
              alt={movieDetails.title}
              onLoad={() => setLoaded(true)}
              onError={(e) => {
                if (e.target.src !== `${Blank}`) {
                  e.target.src = `${Blank}`;
                }
              }}
              style={!loaded ? { display: 'none' } : {}}
            />

            <LinkWrapper>
              {renderWebsite(movieDetails.homepage)}
              {renderTrailer(movieVideos)}
              <ActiveButton onClick={() => handleAddToWatchlist()} disabled={watchlistDisabled}>
                Add to Watchlist
                <FontAwesomeIcon icon={['fas', 'plus-circle']} style={{ marginLeft: '1rem' }} />
              </ActiveButton>
            </LinkWrapper>
          </ImageWrapper>
          <MovieInfo>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <MovieTagLine>{movieDetails.tagline}</MovieTagLine>
            <DetailWrapper>
              <Rating value={movieDetails.vote_average / 2} />
              <p>{movieDetails.vote_average} / 10</p>
              <p>{renderInfo(movieDetails.spoken_languages, movieDetails.runtime, movieDetails.release_date)}</p>
            </DetailWrapper>
            <InfoWrapper>
              <StyledInfoTitle as="h2">the genres:</StyledInfoTitle>
              <GenreWrapper>{renderGenres(movieDetails.genres)}</GenreWrapper>
            </InfoWrapper>
            <InfoWrapper>
              <StyledInfoTitle as="h2">Storyline:</StyledInfoTitle>
              <p>{movieDetails.overview}</p>
            </InfoWrapper>
            <InfoWrapper>
              <StyledInfoTitle as="h2">Cast:</StyledInfoTitle>
              <Cast />
            </InfoWrapper>
          </MovieInfo>
        </Wrapper>
      )}
    </>
  );
};

export default MovieDetails;
