import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
// import Example from './components/Charts/Example';
import Footer from './components/Footer/Footer';
import sidebarRoutes from './routes';

let getRoutes = (routes:any) => {
  return routes.map((prop:any, key:any) => {
    if (prop.layout === "/admin") {
      return (
        <Route
          path={prop.layout + prop.path}
          render={props => (
            <prop.component/>
          )}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar routes={sidebarRoutes}></Sidebar>
      <div id="main-panel" className="main-panel">
        <Header></Header>
        <div className="main-content">
          <BrowserRouter>
            <Switch>{getRoutes(sidebarRoutes)}</Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}



export default App;
