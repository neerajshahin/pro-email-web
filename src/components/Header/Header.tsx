import React from 'react';
import logo from '../../icon.png';
import { Navbar } from "react-bootstrap";
import './Header.scss'

export interface HeaderProps {
    
}
 
export interface HeaderState {
    sidebarExists:boolean
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    state = {sidebarExists:false }

    mobileSidebarToggle = (e:any) =>{
        if (this.state.sidebarExists === false) {
          this.setState({
            sidebarExists: true
          });
        }
        //  if body click exists then removing
        let bodyClick = document.getElementById("bodyClick");
        if(bodyClick && bodyClick.parentElement){
            bodyClick.parentElement.removeChild(bodyClick);
        }
        e.preventDefault();
        //  if exist remove sidebar-toggle class
        document.documentElement.classList.remove("sidebar-toggle");
        document.documentElement.classList.toggle("nav-open");
        let node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = () => {
            if(node && node.parentElement){
                node.parentElement.removeChild(node);
            }
            document.documentElement.classList.remove("nav-open");
        };
        document.body.appendChild(node);
    }
    render() {
        return (
            <Navbar expand='lg' expanded={false} onToggle={()=>{}}  bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' PRO-Email'}
                </Navbar.Brand>
                <Navbar.Toggle onClick={this.mobileSidebarToggle} />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Neeraj Shah</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default Header;