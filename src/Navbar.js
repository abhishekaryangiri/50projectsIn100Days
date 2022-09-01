import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

//this function name should be diff. from class
function Navbar() {
    return (
            <div className="navbar">

<div className="navbar_logo">
      <StorefrontIcon  fontSize="large" className='navbar_logo_img'></StorefrontIcon>
        <h2 className="navbar_title">amazone</h2>
      </div>

      <div className="navbar_search">
          <input className='navbar_search_input' type="text" />
          <SearchIcon className='navbar_search_icon'></SearchIcon>
      </div>



      <div className="navbar_itom">
        <div className="navbar_item_common">
        <span className="navbar_itom1">Hello Guest</span> <br />
        <span className="navbar_itom2">Sign In</span>
        </div>

      

      <div className="navbar_itom_common">
        <span className="navbar_itom1">Returns</span> <br />
        <span className="navbar_itom2">& Order</span>
      </div>


      <div className="navbar_itom_common">
        <ShoppingCartIcon className="Shopping_cart_icon" fontSize="large"> </ShoppingCartIcon>
        <span className="shopping_cart_count shopping_count">0</span>
      </div>

</div>
</div>

    )
};
export default Navbar