import * as React from 'react';
export interface FooterProps {
    
}
 
export interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    state = { }
    render() { 
        return ( <footer className="footer">
          <nav className="pull-left mt-3">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Company</a>
              </li>
              <li>
                <a href="#pablo">Portfolio</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.creative-tim.com?ref=lbr-footer">
              Creative Tim
            </a>
            , made with love for a better web
          </div>
      </footer> );
    }
}
 
export default Footer;