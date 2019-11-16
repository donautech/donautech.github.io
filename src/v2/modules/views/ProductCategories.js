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
import Markdown from "../components/Markdown";
import Button from "../components/Button";

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
      description: (<div>
        <Typography variant="body1" gutterBottom>
          We provide enterprise-grade software planning and development.
        </Typography>
        <Markdown>{
          `* **Backend**: Spring, JavaEE, Quarkus, Netty, Jetty, Flask, Tensorflow, Neo4j, Laravel, NodeJS
* **Mobile + PC**: Android SDK, JavaSE(6-10), Android Mobile, Wear, TV, JavaFX, IOS 
* **DB**: SQL(SQLite,MySQL, PostgreSQL), Realm, ObjectBox, JavaFx, Elasticsearch,  MongoDB, Redis
* **Blockchain**: Corda, Ethereum, Hyperledger
* **Machine learning**: TensorFlow, PyTorch, Keras, Matplotlib, Seaborn, ggplot, Spacy, Scrapy, Selenium, Beautiful Soup 4, requests, Scikit-learn, Scipy, Numpy, Pandas, Cvxpy`.toString()
        }
        </Markdown>
      </div>)
    },
    {
      url:
        '/img/robot.jpg',
      title: 'Machine Learning',
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
      description: (<div>
        <Typography variant="body1" gutterBottom>
          We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning,
          you should definitely check them out
        </Typography>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          className={classes.button}
          component="a"
          href="https://medium.com/donautech"
        >
          Open articles
        </Button>
      </div>)
    },
    {
      url:
        '/img/behaiv_usage.png',
      title: 'Behaiv',
      width: '38%',
      description: (<div>
        <Typography variant="body1" gutterBottom>
          Behaiv is a high-level AI tool that helps users to navigate faster through the app,
          predict what users want to open and take appropriate actions.
          It was developed with a focus on simplicity of usage.
          Instead of overwhelming developers with burden of implementation,
          they only need to write few lines of code.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our company covers Java, Swift, Python and Javascript versions of this library
        </Typography>
        <Button
          color="primary"
          size="small"
          variant="contained"
          className={classes.button}
          component="a"
          href="https://github.com/dmi3coder/behaiv-java"
        >
          Look through our library
        </Button>
      </div>)
    },
    {
      url:
        '/img/youtube.png',
      title: 'YouTube Lessons',
      width: '24%',
      description: (
        <div>
          <Typography variant="body1" gutterBottom>
            We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics
          </Typography>
          <Button
            color="primary"
            size="small"
            variant="contained"
            className={classes.button}
            component="a"
            href="https://github.com/dmi3coder/behaiv-java"
          >
            Visit YouTube channel
          </Button>
        </div>
      )
    },
    {
      url:
        '/img/showcase-lovepons.png',
      title: 'Lovepons',
      width: '40%',
    },
    {
      url:
        '/img/next_project.jpg',
      title: 'Your next project?',
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
        fullWidth={true}
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
              {selectedDialogImage.description}
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
