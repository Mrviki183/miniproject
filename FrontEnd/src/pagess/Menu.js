// Menu.js
import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/Menulitem";
import '../styles/Menu.css';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import  PaymentForm  from '../pagess/Payment'
function Menu() {
  const handleAddToCart = (productName) => {
    // Implement your logic to add the product to the cart here
    console.log(`Product "${productName}" added to the cart.`);
  };
   const Navigate = useNavigate();
   const eventNavigate =()=>{
    Navigate("/pay")
   }
  return (
    <div>
      <Navbar />
      <div className="menu">
        <h1 className="menuTitle">Our Crafts</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => (
            <div key={key} className="menuListItem">
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}  
                price={menuItem.price}
              />
               <button onClick={eventNavigate}>Buy now</button> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
