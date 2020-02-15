import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { useTranslation } from 'react-i18next';

const backgroundImage =
  '../../../img/donau_bg.png';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const { t, i18n } = useTranslation();

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {t("Let's bring your ideas to life")}
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {t("Customers choose our company not because of technologies, but because of versatility and commitment")}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="mailto:info@donau.tech?subject=I want free AI consultancy&body=Hello DonauTech!%0d%0dWe would like to receive free AI consultancy regarding our company/product!%0d%0d Please contact us by any of the contacts below:"
      >
        {t("Bootstrap your product")}
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        {t("Discover the experience")}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
