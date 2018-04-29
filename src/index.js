import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RiskDiceRoller from './Risk/RiskDiceRoller';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import store from './Risk/store';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <RiskDiceRoller/>
      </MuiThemeProvider>
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();