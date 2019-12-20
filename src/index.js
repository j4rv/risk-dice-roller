import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import React, {Fragment} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import RiskDiceRoller from './components/RiskDiceRoller';
import grey from '@material-ui/core/colors/grey';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: grey[900],
    }
  },
});

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <RiskDiceRoller/>
      </MuiThemeProvider>
    </Provider>
  </Fragment>, 
  document.getElementById('root')
);

registerServiceWorker();