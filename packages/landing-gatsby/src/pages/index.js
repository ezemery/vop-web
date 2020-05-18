import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/src/theme/appModern';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppModern/Navbar';
import Banner from '../containers/AppModern/Banner';
import AppSlider from '../containers/AppModern/AppSlider';
import Features from '../containers/AppModern/Features';
import DashboardFeatures from '../containers/AppModern/Dashboard';
import ProductSlide from '../containers/AppModern/ProductSlide';
import DesignedAndBuilt from '../containers/AppModern/DesignedAndBuilt';
import PricingPolicy from '../containers/AppModern/PricingPolicy';
import TeamPortfolio from '../containers/AppModern/TeamPortfoilo';
import Testimonial from '../containers/AppModern/Testimonial';
import Newsletter from '../containers/AppModern/Newsletter';
import Footer from '../containers/AppModern/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppModern/appModern.style';
import '@redq/reuse-modal/es/index.css';

import SEO from '../components/seo';

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Vop - Shoppable TikTok + Social Video Feeds" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/*<Features />*/}
            <AppSlider />
            <DashboardFeatures />
            {/*<Testimonial />*/}
            {/*<ProductSlide />*/}
            <DesignedAndBuilt />
            <PricingPolicy />
            {/*<TeamPortfolio />*/}
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
