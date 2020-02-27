import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: '25px'
    },
    title: {
      textAlign: 'center',
      padding: '20px',
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        textAlign: 'center',
        margin: '0 auto',
        display: 'block'
    },
    personTitle: {
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px'
    },
    personDescription: {
        textAlign: 'center',
        fontSize: '14px',
        padding: '10px'
    },
    button: {
        margin: '0 auto',
        display: 'block',
        '&:focus': {
          outline: 'none',
        },
    }
    
}));

function OurTeam() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppAppBar/>
      
      <h1 className={classes.title}>Our Team</h1>

      <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
          <Card className={classes.card}>
              <CardContent>
                <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
                <Typography className={classes.personTitle}>
                  Ben Smith - Project manager
                </Typography>
                <Typography className={classes.personDescription}>
                  This is description.  This is description. This is description. This is description. This is description. This is description.
                </Typography>
                <IconButton className={classes.button}>
                  <AddBoxIcon/>
                </IconButton>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
              <Typography className={classes.personTitle}>
                Ben Smith - Project manager
              </Typography>
              <Typography className={classes.personDescription}>
                This is description.  This is description. This is description. This is description. This is description. This is description.
              </Typography>
              <IconButton className={classes.button}>
                <AddBoxIcon/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
              <Typography className={classes.personTitle}>
                Ben Smith - Project manager
              </Typography>
              <Typography className={classes.personDescription}>
                This is description.  This is description. This is description. This is description. This is description. This is description.
              </Typography>
              <IconButton className={classes.button}>
                <AddBoxIcon/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
          <Card className={classes.card}>
              <CardContent>
                <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
                <Typography className={classes.personTitle}>
                  Ben Smith - Project manager
                </Typography>
                <Typography className={classes.personDescription}>
                  This is description.  This is description. This is description. This is description. This is description. This is description.
                </Typography>
                <IconButton className={classes.button}>
                  <AddBoxIcon/>
                </IconButton>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
              <Typography className={classes.personTitle}>
                Ben Smith - Project manager
              </Typography>
              <Typography className={classes.personDescription}>
                This is description.  This is description. This is description. This is description. This is description. This is description.
              </Typography>
              <IconButton className={classes.button}>
                <AddBoxIcon/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.image} src="./img/photo.jpg" alt="person_photo"/>
              <Typography className={classes.personTitle}>
                Ben Smith - Project manager
              </Typography>
              <Typography className={classes.personDescription}>
                This is description.  This is description. This is description. This is description. This is description. This is description.
              </Typography>
              <IconButton className={classes.button}>
                <AddBoxIcon/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <AppFooter/>
    </React.Fragment>
  );
}

export default withRoot(OurTeam);
