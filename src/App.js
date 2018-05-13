import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from './Components/Layout/Layout'

class App extends Component {

  
  render() {

    return(
      <MuiThemeProvider>
        <Layout/>
      </MuiThemeProvider>
    )
  }
}

export default App;
