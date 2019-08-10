import * as React from 'react';
import { FaList, FaAlignCenter } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import './Sidebar.scss'

export interface SidebarProps {
  routes: any;
  location?: any;
}

export interface SidebarState {
  isSidebarMiniOpen: boolean
}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  state = {
    isSidebarMiniOpen:false
  }

  sidebarMiniToggle = (e: any) => {
    this.setState({
      isSidebarMiniOpen: !this.state.isSidebarMiniOpen
    });
    e.preventDefault();
    document.documentElement.classList.toggle("sidebar-mini");
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="/" onClick={this.sidebarMiniToggle} className="simple-text logo-mini">
              {this.state.isSidebarMiniOpen ? <FaList size="25px" /> : <FaAlignCenter size="25px" />}
            </a>
          </div>
          <ul className="nav">
            {/* {this.state.width <= 991 ? <AdminNavbarLinks /> : null} */}
            {this.props.routes.map((prop: any, key: any) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : "this.activeRoute(prop.layout + prop.path)"
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      {prop.icon}
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>);
  }
}

export default Sidebar;