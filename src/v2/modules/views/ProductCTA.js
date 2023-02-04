import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { t, i18n } = useTranslation();
  const {classes} = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    fetch('https://gmx.us20.list-manage.com/subscribe/post?u=270d60d5d5a2d14fdc4f7d52b&id=d3ca9d9513', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
              <Typography variant="h2" component="h2" gutterBottom>
                {t("Keep in touch")}
              </Typography>
              <Typography variant="h5">
                {t("Email keith@siilats.com for any new business opportunities")}
              </Typography>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots}/>
            <img
              src="/img/mail/mail1.jpg"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Welcome to Donau.Community :)"
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
