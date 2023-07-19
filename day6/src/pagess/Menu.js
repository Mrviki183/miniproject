import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/Menulitem";
import '../styles/Menu.css';
import Navbar from "../components/Navbar";

function Menu() {
  return (
    <div>
      <Navbar/>
    <div className="menu">
      <h1 className="menuTitle">Our Crafts</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
          <MenuItem 
          key={key}
          image={menuItem.image} 
          name={menuItem.name} 
          price={menuItem.price} 
          />
        );
        })}
      </div>
    </div>
    ,/</div>
  );
}

export default Menu;