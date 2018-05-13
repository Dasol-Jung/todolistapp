import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from './Components/Layout/Layout';
import ListBuilder from './Containers/ListBuilder/ListBuilder'

class App extends Component {

  
  render() {

    return(
      <MuiThemeProvider>
        <Layout>
          <ListBuilder/>
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default App;
