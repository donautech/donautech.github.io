import React from 'react';
import { Slide } from 'react-slideshow-image';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    slideContainer: {
      width: '800px',
      margin: 'auto',
    },   
    eachDiv: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '300px',
    },
    eachSpan: {
      padding: '20px',
      fontSize: '20px',
      background: '#efefef',
      textAlign: 'center',
    },
    eachBlock: {
      display: 'flex',
    },
    eachSlide: {
      padding: '0 30px',
    },
    cover: {
      width: '80%',
      height: '300px',
    },
    title: {
      padding: '10px',
      textAlign: 'center',
      borderBottom: '1px solid #cccccc',
      marginBottom: '10px',
    },
    subtitle: {
      padding: '10px 20px',
      textAlign: 'center'
    },
    item: {
      padding: '10px 20px',
    },   
}));

 
const slideImages = [
  '/img/mobile+pc.png',
  '/img/db.png',
  '/img/blockchain.png'
];
 
const properties = {
//   duration: 10000,
//   transitionDuration: 700,
  infinite: true,
//   indicators: true,
  arrows: true,
  autoplay: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    const classes = useStyles();
    return (
      <div className={classes.slideContainer}>
        <Slide {...properties}>
          <Card>
            <CardContent className={classes.eachSlide}>
              <Typography component="h1" variant="h5" className={classes.title}>
                Title
              </Typography>
              <Typography component="div" variant="h5" className={classes.eachBlock}>
                <Typography component="div" variant="h5">
                  <Typography component="h2" variant="h5" className={classes.subtitle}>Subtitle</Typography>
                  <Typography component="div" variant="h5" className={classes.list}>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text big text</Typography>
                  </Typography>
                </Typography>
                <CardMedia
                  className={classes.cover}
                  image={slideImages[0]}
                />
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={classes.eachSlide}>
              <Typography component="h1" variant="h5" className={classes.title}>
                Title
              </Typography>
              <Typography component="div" variant="h5" className={classes.eachBlock}>
                <Typography component="div" variant="h5">
                  <Typography component="h2" variant="h5" className={classes.subtitle}>Subtitle</Typography>
                  <Typography component="div" variant="h5" className={classes.list}>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text big text</Typography>
                  </Typography>
                </Typography>
                <CardMedia
                  className={classes.cover}
                  image={slideImages[1]}
                />
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={classes.eachSlide}>
              <Typography component="h1" variant="h5" className={classes.title}>
                Title
              </Typography>
              <Typography component="div" variant="h5" className={classes.eachBlock}>
                <Typography component="div" variant="h5">
                  <Typography component="h2" variant="h5" className={classes.subtitle}>Subtitle</Typography>
                  <Typography component="div" variant="h5" className={classes.list}>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text</Typography>
                    <Typography className={classes.item}>- big text big text big text big text big text big text big text big text big text big text</Typography>
                  </Typography>
                </Typography>
                <CardMedia
                  className={classes.cover}
                  image={slideImages[2]}
                />
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      </div>
    )
}

export default Slideshow