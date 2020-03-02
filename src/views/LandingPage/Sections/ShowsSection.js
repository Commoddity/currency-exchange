import React from 'react';

import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function ShowsSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Shows Archive</h2>
          <h5 className={classes.description}>
            The show was formerly known as Street Level Beat Radio. <br />
            Archived episodes can be heard here.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer
          className={imageClasses}
          style={{
            margin: '10px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '3px',
            maxHeight: 350,
            overflow: 'auto'
          }}
        >
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Hush Hush"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-hushhush-june-30-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Kimmy K"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-kimmy-k-may-12-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Brontron"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-brontron-may-5-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Levrige"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-levrige-april-21-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Tor"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-tor-april-14-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Rosy Glow"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-rosy-glow-april-7-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Disociate"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-disociate-march-24-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Ingot Vein"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ingot-vein-march-27-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Young Dene"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-young-dene-march-3-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Sinerise"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-sinerise-february-24-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Rich Nines"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-rich-nines-february-17-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Handsome Tiger"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-ft-handsome-tiger-february-20-2019%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="All Kenyan Special pt.2"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fall-kenyan-music-special-pt-2%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="All Kenyan Special pt.1"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-january-27-2019-all-kenyan-music-special-pt-1-of-2%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <iframe
              title="Episode 1"
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FStreetLevelBeatRadio%2Fstreet-level-beat-radio-december-16-2018-episode-1%2F"
              frameborder="0"
            ></iframe>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
