import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {useTranslation} from "react-i18next";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: '30vh',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductCategories(props) {
  const {classes} = props;
  const {t, i18n} = useTranslation();
  const [detailsDialogOpen, setDetailsDialogOpen] = React.useState(false);
  const [selectedDialogImage, setSelectedDialogImage] = React.useState({});

  const handleClickOpen = (image) => {
    setSelectedDialogImage(image);
    setDetailsDialogOpen(true);
  };

  const handleClickClose = () => {
    setDetailsDialogOpen(false);
  };

  const images = [
    {
      url:
          '/img/showcase-software-dev.jpg',
      title: 'Product/Software development',
      width: '40%',
      description: ""
    },
    {
      url:
          '',
      title: 'TODO',
      width: '20%',
    },
    {
      url:
          '/img/showcase-3.png',
      title: 'Upcoming product ;)',
      width: '40%',
    },
    {
      url:
          '/img/medium.png',
      title: 'Medium articles',
      width: '38%',
    },
    {
      url:
          '/img/behaiv_usage.png',
      title: 'Behaiv',
      width: '38%',
    },
    {
      url:
          '',
      title: 'TODO',
      width: '24%',
    },
    {
      url:
          '/img/showcase-lovepons.png',
      title: 'Lovepons',
      width: '40%',
    },
    {
      url:
          '',
      title: 'TODO',
      width: '20%',
    },
    {
      url:
          '/img/bg-showcase-1.jpg',
      title: 'IOT/Scooter Business services',
      width: '40%',
    },
  ];

  return (
      <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
          {t('Our products and services')}
        </Typography>
        <div className={classes.images}>
          {images.map(image => (
              <ButtonBase
                  key={image.title}
                  className={classes.imageWrapper}
                  onClick={() => handleClickOpen(image)}
                  style={{
                    width: image.width,
                  }}
              >
                <div
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                />
                <div className={classes.imageBackdrop}/>
                <div className={classes.imageButton}>
                  <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className={classes.imageTitle}
                  >
                    {t(image.title)}
                    <div className={classes.imageMarked}/>
                  </Typography>
                </div>
              </ButtonBase>
          ))}
        </div>
        <Dialog
            open={detailsDialogOpen}
            maxWidth='md'
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
          <CardActionArea>
            <CardMedia
                className={classes.media}
                image={selectedDialogImage.url}
                title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {selectedDialogImage.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Dialog>
      </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
