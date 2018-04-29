import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RiskDiceRoller from './components/RiskDiceRoller';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import store from './store';
import grey from 'material-ui/colors/grey';

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