import React from 'react';
import Paragraph from '../Paragraph';
import Link from '../Link';
import Heading from '../../components/Heading';
import {
  StyledCard,
  StyledContent,
  StyledFace,
  StyledBack,
  StyledLinks,
} from './StyledCard';

const Card = ({
  icon: Icon,
  faceHeading,
  backHeading,
  description,
  demoUrl,
  githubUrl,
}) => {
  return (
    <StyledCard>
      <StyledContent>
        <StyledFace>
          <Icon style={{ width: '6rem', height: 'auto' }} />
          <Heading>{faceHeading}</Heading>
        </StyledFace>
        <StyledBack>
          <Heading>{backHeading}</Heading>
          <Paragraph size="s">{description}</Paragraph>
          <StyledLinks>
            <Link href={demoUrl}>Demo</Link>
            <Link href={githubUrl}>GitHub</Link>
          </StyledLinks>
        </StyledBack>
      </StyledContent>
    </StyledCard>
  );
};

export default Card;
