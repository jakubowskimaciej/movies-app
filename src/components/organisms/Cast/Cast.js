import React, { useState, useEffect } from 'react';
import tmdb from 'api/tmdb';
import { useParams } from 'react-router-dom';
import PersonPic from 'assets/PersonPic.svg';
import { CastWrapper, ActorWrapper } from './Cast.styles';
import { StyledImage } from 'components/atoms/StyledImage/StyledImage';
import { posterLink } from 'views/Root';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPES from 'actions/types';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get(`/movie/${id}/credits`);
        setCast(data.cast);
      } catch (err) {
        dispatch({ type: TYPES.SET_ERROR, payload: err.response });
      }
    })();
  }, [id, dispatch]);

  console.log(error);

  return (
    <LazyLoad>
      <CastWrapper>
        {cast.map((person) => (
          <ActorWrapper key={person.id} to={`/person/${person.id}`}>
            <StyledImage
              src={posterLink + 'w185' + person.profile_path}
              alt={person.name}
              onError={(e) => {
                if (e.target.src !== `${PersonPic}`) {
                  e.target.src = `${PersonPic}`;
                }
              }}
            />

            <div>
              <p>{person.name}</p>
              <p>as {person.character}</p>
            </div>
          </ActorWrapper>
        ))}
      </CastWrapper>
    </LazyLoad>
  );
};

export default Cast;
