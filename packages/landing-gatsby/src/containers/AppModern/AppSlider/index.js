import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import { Icon } from 'react-icons-kit';
import { image, playCircle, tag } from 'react-icons-kit/fa';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

const AppSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        appSlider {
          title
          description
          features {
            id
            icon {
              publicURL
            }

            title
            description
          }
          carousel {
            id
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const {
    title,
    description,
    features,
    carousel,
  } = data.appModernJson.appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {carousel.map(item => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image.publicURL} alt={item.title} />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          <FeatureBlock
            key={`app-feature--key${features[0].id}`}
            iconPosition="left"
            icon={<Icon icon={playCircle} size={32}/>}
            title={<Heading as="h3" content={features[0].title} />}
            description={<Text content={features[0].description} />}
          />
          <FeatureBlock
            key={`app-feature--key${features[1].id}`}
            iconPosition="left"
            icon={<Icon icon={tag} size={32}/>}
            title={<Heading as="h3" content={features[1].title} />}
            description={<Text content={features[1].description} />}
          />
          <FeatureBlock
            key={`app-feature--key${features[2].id}`}
            iconPosition="left"
            icon={<Icon icon={image} size={32}/>}
            title={<Heading as="h3" content={features[2].title} />}
            description={<Text content={features[2].description} />}
          />
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
