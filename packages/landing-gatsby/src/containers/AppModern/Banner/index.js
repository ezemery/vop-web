import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { download } from 'react-icons-kit/fa/download';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import shopify from 'common/src/assets/image/appModern/shopify-logo.png';
import bannerImg from 'common/src/assets/image/appModern/banner2.png';
import videoBanner1 from 'common/src/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/src/assets/image/appModern/video-2.png';
import circleBorder from 'common/src/assets/image/appModern/shape.svg';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/8ME-QAlW6Ww"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appModernJson;
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <RatingInfo>
              <Rating rating={5} />
              5 out of 5 on <img src={shopify} alt="Shopify App Store" style={{width:"100px"}} />
            </RatingInfo>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="We create shoppable experiences from your social video."
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Video has been shown to be twice as engaging as images. With mobile traffic now accounting for 70% of ecommerce, it's time to create shoppable video experiences."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Request demo" onClick={() => {window.Calendly.initPopupWidget({url: 'https://calendly.com/getvop'});return false;}} />

              {/*<Button*/}
                {/*className="text"*/}
                {/*variant="textButton"*/}
                {/*icon={<Icon icon={download} />}*/}
                {/*iconPosition="left"*/}
                {/*title="View on Shopify App Store"*/}
              {/*/>*/}
            </ButtonGroup>
          </Fade>
          <VideoGroup>
            <img
              src={videoBanner1}
              alt="TikTok"
            />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      {/*<CustomerWrapper>*/}
        {/*<Text content="Trusted by companies like:" />*/}
        {/*<ImageWrapper>*/}
          {/*{client.map(item => (*/}
            {/*<Image*/}
              {/*key={`client-key${item.id}`}*/}
              {/*src={item.image.publicURL}*/}
              {/*alt={item.title}*/}
            {/*/>*/}
          {/*))}*/}
        {/*</ImageWrapper>*/}
      {/*</CustomerWrapper>*/}
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
