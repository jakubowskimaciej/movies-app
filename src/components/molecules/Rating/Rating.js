import React from 'react';
import styled from 'styled-components';
import Stars from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faStar, faRegularStar);

const RatingWrapper = styled(Stars)`
  line-height: 1;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: inherit;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-right: 5px;
`;

const Rating = ({ value, isYellow }) => {
  return (
    <RatingWrapper
      initialRating={value}
      emptySymbol={<FontAwesome icon={faRegularStar} size="lg" />}
      fullSymbol={<FontAwesome icon={faStar} size="lg" />}
      readonly
      isYellow={isYellow}
    />
  );
};

export default Rating;
