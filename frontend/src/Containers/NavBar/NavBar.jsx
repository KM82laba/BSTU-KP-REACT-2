import React , {useState} from 'react'
import {FaBars, FaShoppingBag, FaStore , FaHome} from 'react-icons/fa';
import { NavLink , Link} from 'react-router-dom';
import './NavBar.css'

const  NavBar = ({children}) => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle = ()=> setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"/Home_page",
            name:"Home",
            icon: <FaHome/>
        },
        {
            path:"/Main_page",
            name:"Store",
            icon: <FaStore/>
        },
        {
            path:"/Bag_page",
            name:"Bag",
            icon:<FaShoppingBag/>
        }
    ]
  return (
    <div className='container_navbar'>
        
        <div style={{width: isOpen ? "100px" : "50px"} } className="sidebar" >
        <Link to="/Home_page" className="link-title">
            <p className='container_navbar-title'>Estore</p>
        </Link>
            <div className="top_section">
                
                
                <div style={{marginLeft: isOpen ? "50" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <p className="icon" style={{height: isOpen ? "" : "40px"}} >{item.icon}<p style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</p></p>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  );
};
export default NavBar;
