import * as React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import sidebarRoutes from '../routes';
import Header from '../components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import './Layout.scss';

export interface LayoutProps {
  
}
 
export interface LauoutState {
  
}
 
class Layout extends React.Component<LayoutProps, LauoutState> {
  state = {  }
  getRoutes = (routes:any) => {
    return routes.map((prop:any, key:any) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                // handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() { 
    return ( 
    <div className="App">
    <Sidebar {...this.props} routes={sidebarRoutes}></Sidebar>
    <div id="main-panel" className="main-panel">
      <Header></Header>
      <div className="main-content">
          <Switch>{this.getRoutes(sidebarRoutes)}</Switch>
      </div>
      <Footer></Footer>
    </div>
  </div> );
  }
}
 
export default Layout;