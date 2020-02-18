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
  dialogTitle: {
    color: '#080808',
    fontFamily: "Open Sans",
    font: '700 20px/45px sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '48px'
  },
  dialogSubtitle: {
    color: '#807f7f',
    fontFamily: "Open Sans",
    font: '400, 16px/45px sans-serif',
    textAlign: 'center',
    paddingBottom: '20px',
  },
  dialogproductAndSoftBlock: {
    display: 'flex',
    borderBottom: '2px solid #e6e5e5',
    padding: '25px 100px',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  dialogproductAndSoftItem: {
    flex: '50%',
    order: '1'
  },
  dialogproductAndSoftItemOrder: {
    flex: '50%',
    order: '2'
  },
  dialogproductAndSoftImg: {
    order: '2',
  },
  dialogproductAndSoftImgOrder: {
    order: '1',
  },
  dialogproductAndSoftItem__title: {
    color: '#080808',
    fontFamily: "Open Sans",
    font: '700 20px/45px sans-serif',
    textTransform: 'uppercase',
    padding: '30px 0'
  },
  dialogproductAndSoftItem__titleWithoutPadding: {
    color: '#080808',
    fontFamily: "Open Sans",
    font: '700 20px/45px sans-serif',
    textTransform: 'uppercase',
    padding: '30px 0',
    marginLeft: '-60px',
    marginRight: '-40px',
  },
  dialogproductAndSoftItem__wrap: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '120px',
  },
  dialogproductAndSoftItem__item: {
    color: '#807f7f',
    fontFamily: "Open Sans",
    font: '400, 14px/45px, sans-serif',
  },
  dialogproductAndSoftItem__wrapLast: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '170px',
  }
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

  const productAndSoftData = {
    backend: ['Spring', 'JavaEE', 'Quarkus', 'Netty', 'Jetty', 'Flask', 'Tensorflow', 'Neo4j', 'Laravel', 'NodeJS'],
    mobileAndPc: ['Android SDK', ' JavaSE(6-10)', 'Android Mobile', 'Wear', 'TV', 'JavaFX', 'IOS'],
    db: ['SQL(SQLite,MySQL, PostgreSQL)', 'Realm', 'ObjectBox', 'JavaFx', 'Elasticsearch', 'MongoDB', 'Redis'],
    blockchain: ['Corda', 'Ethereum', 'Hyperledger'],
    machineLearning: ['TensorFlow', 'PyTorch', 'Keras', 'Matplotlib', 'Seaborn', 'ggplot', 'Spacy', 'Scrapy', 'Selenium', 'Beautiful Soup 4', 'requests', 'Scikit-learn', 'Scipy', 'Numpy', 'Pandas', 'Cvxpy']
  }

  const productAndSoftContent = [
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>Backend:</div>
        <div className={classes.dialogproductAndSoftItem__wrap}>
          {
            productAndSoftData.backend.map ((elem, index) => {
              return <div className={classes.dialogproductAndSoftItem__item}>- {elem}</div>
            })
          }
        </div>
      </div>),
      imgUrl: '/img/backend.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Mobile + PC')}:</div>
        <div className={classes.dialogproductAndSoftItem__wrap}>
          {
            productAndSoftData.mobileAndPc.map ((elem, index) => {
              return <div className={classes.dialogproductAndSoftItem__item}>- {elem}</div>
            })
          }
        </div>
      </div>),
      imgUrl: '/img/mobile+pc.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>DB:</div>
        <div className={classes.dialogproductAndSoftItem__wrap}>
          {
            productAndSoftData.db.map ((elem, index) => {
              return <div className={classes.dialogproductAndSoftItem__item}>- {elem}</div>
            })
          }
        </div>
      </div>),
      imgUrl: '/img/db.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Blockchain')}:</div>
        <div className={classes.dialogproductAndSoftItem__wrap}>
          {
            productAndSoftData.blockchain.map ((elem, index) => {
              return <div className={classes.dialogproductAndSoftItem__item}>- {elem}</div>
            })
          }
        </div>
      </div>),
      imgUrl: '/img/blockchain.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title} style={{paddingTop: '10px'}}>{t('Machine Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__wrapLast}>
          {
            productAndSoftData.machineLearning.map ((elem, index) => {
              return <div className={classes.dialogproductAndSoftItem__item}>- {elem}</div>
            })
          }
        </div>
      </div>),
      imgUrl: '/img/backend.png',
    }
  ]

  const machineLearningContent = [
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Machine Learning Algorithms')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/backend.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Computer Vision')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/mobile+pc.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Supervised Machine Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/mobile+pc.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__titleWithoutPadding}>{t('Unsupervised Machine Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/db.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title}>{t('Deep Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/blockchain.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title} style={{paddingTop: '10px'}}>{t('Neural Networks')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/backend.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title} style={{paddingTop: '10px'}}>{t('Reinforcement Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/blockchain.png',
    },
    {
      block: (<div>
        <div className={classes.dialogproductAndSoftItem__title} style={{paddingTop: '10px'}}>{t('Predictive Learning')}:</div>
        <div className={classes.dialogproductAndSoftItem__item}>
          Machine learning is a method of data analysis that automates analytical 
          model building. It is a branch of artificial intelligence based on the 
          idea that systems can learn from data, identify patterns and make decisions 
          with minimal human intervention.
        </div>
      </div>),
      imgUrl: '/img/db.png',
    }
  ]

  const images = [
    {
      url:
        '/img/showcase-software-dev.jpg',
      title: t('Product/Software development'),
      width: '40%',
      description: (<div>
        <Typography variant="body1" gutterBottom className={classes.dialogSubtitle}>
          {t('We provide enterprise-grade software planning and development')}.
        </Typography>
        {
          productAndSoftContent.map((elem, index) => {
            return index%2 === 0 ? 
              <div className={classes.dialogproductAndSoftBlock}>
                <div className={classes.dialogproductAndSoftItem}>{elem.block}</div>
                <img className={classes.dialogproductAndSoftImg} src={elem.imgUrl} width="350px" height="259px"/>
              </div> 
            :
              <div className={classes.dialogproductAndSoftBlock}>
                <div className={classes.dialogproductAndSoftItemOrder} style={{paddingLeft: '130px'}}>{elem.block}</div>
                <img className={classes.dialogproductAndSoftImgOrder} src={elem.imgUrl} width="350px" height="259px"/>
              </div> 
          })
        }
      </div>)
    },
    {
      url:
        '/img/robot.jpg',
      title: t('Machine Learning'),
      width: '20%',
      description: (<div>
        {
          machineLearningContent.map((elem, index) => {
            return index%2 === 0 ? 
              <div className={classes.dialogproductAndSoftBlock}>
                <div className={classes.dialogproductAndSoftItem}>{elem.block}</div>
                <img className={classes.dialogproductAndSoftImg} src={elem.imgUrl} width="350px" height="259px"/>
              </div> 
            :
              <div className={classes.dialogproductAndSoftBlock}>
                <div className={classes.dialogproductAndSoftItemOrder} style={{paddingLeft: '90px'}}>{elem.block}</div>
                <img className={classes.dialogproductAndSoftImgOrder} src={elem.imgUrl} width="350px" height="259px"/>
              </div> 
          })
        }
      </div>)
    },
    {
      url:
        '/img/showcase-3.png',
      title: t('Upcoming product ;)'),
      width: '40%',
    },
    {
      url:
        '/img/medium.png',
      title: t('Medium articles'),
      width: '38%',
      description: (<div>
        <Typography variant="body1" gutterBottom>
          {t('We write articles at medium ranging from mobile development lifehacks to Kubernetes and Machine Learning, you should definitely check them out')}
        </Typography>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          className={classes.button}
          component="a"
          href="https://medium.com/donautech"
        >
          {t('Open articles')}
        </Button>
      </div>)
    },
    {
      url:
        '/img/behaiv_usage.png',
      title: t('Behaiv'),
      width: '38%',
      description: (<div>
        <Typography variant="body1" gutterBottom>
          {t('Behaiv is a high-level AI tool that helps users to navigate faster through the app,')}
          {t('predict what users want to open and take appropriate actions.')}
          {t('It was developed with a focus on simplicity of usage.')}
          {t('Instead of overwhelming developers with burden of implementation,')}
          {t('they only need to write few lines of code.')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('Our company covers Java, Swift, Python and Javascript versions of this library')}
        </Typography>
        <Button
          color="primary"
          size="small"
          variant="contained"
          className={classes.button}
          component="a"
          href="https://github.com/dmi3coder/behaiv-java"
        >
          {t('Look through our library')}
        </Button>
      </div>)
    },
    {
      url:
        '/img/youtube.png',
      title: t('YouTube Lessons'),
      width: '24%',
      description: (
        <div>
          <Typography variant="body1" gutterBottom>
            {t('We have small youtube channel where we put some lessons and discussions about different AI, ML and Software Engineering topics')}
          </Typography>
          <Button
            color="primary"
            size="small"
            variant="contained"
            className={classes.button}
            component="a"
            href="https://github.com/dmi3coder/behaiv-java"
          >
            {t('Visit YouTube channel')}
          </Button>
        </div>
      )
    },
    {
      url:
        '/img/showcase-lovepons.png',
      title: t('Lovepons'),
      width: '40%',
    },
    {
      url:
        '/img/next_project.jpg',
      title: t('Your next project?'),
      width: '20%',
    },
    {
      url:
        '/img/bg-showcase-1.jpg',
      title: t('IOT/Scooter Business services'),
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
        scroll='body'
        open={detailsDialogOpen}
        maxWidth='md'
        fullWidth={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {
          selectedDialogImage.title === t('Product/Software development') || selectedDialogImage.title === t('Machine Learning')  
          ? 
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.dialogTitle}>
                {selectedDialogImage.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {selectedDialogImage.description}
              </Typography>
            </CardContent>
          :
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
        }
      </Dialog>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
