import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import classes from './App.css';
import routes from './bootstrap/routes';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
);

const Wrapper = (props) => props.children;

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Wrapper>
            {/* Change to Header component */}
            <AppBar title="Meu Mundo" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <div className={classes.Container}>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}</div>
          </Wrapper>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
