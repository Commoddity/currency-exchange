import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ShowsSection from './Sections/ShowsSection.js';
import HostsSection from './Sections/HostsSection.js';
import GuestsSection from './Sections/GuestsSection.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const GlobalCSS = withStyles({
  '@global': {
    '.makeStyles-title-12': {
      fontSize: '30px'
    }
  }
})(() => null);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <StylesProvider>
        <GlobalCSS />
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Currency Exchange"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'gray-color'
          }}
          {...rest}
        />
      </StylesProvider>
      <Parallax filter image={require('assets/img/landing-bg.png')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Currency Exchange</h1>
              <h2>
                Sundays 6-8pm PST <br />
                on
                <a href="http://www.saveonradio.com/"> Save on Radio</a>
              </h2>
              <h4>
                Join DJs Commoddity and Rich Nines every Sunday for an in-depth
                selection of quality underground electronic music, spanning from
                the cutting edge to the classic.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ShowsSection />
          <HostsSection />
          <GuestsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
