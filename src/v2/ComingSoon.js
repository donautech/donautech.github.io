import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import ProductCTA from "./modules/views/ProductCTA";

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function ComingSoon() {
  return (
    <React.Fragment>
      <AppAppBar/>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Coming soon :C
          </Typography>
          <Typography variant="body2" align="center">
            {'We\'re working on our customer panel, let us notify you when it\'s done.'}
          </Typography>
        </React.Fragment>
      </AppForm>
      <ProductCTA/>
      <AppFooter/>
    </React.Fragment>
  );
}

export default withRoot(ComingSoon);
