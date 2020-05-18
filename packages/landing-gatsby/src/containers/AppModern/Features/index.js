import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        features {
          slogan
          title
          items {
            id
            color
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);
  const { slogan, title, items } = data.appModernJson.features;

  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>

      </Container>
    </SectionWrapper>
  );
};

export default Features;
