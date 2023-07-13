import React from 'react';
import logo from "../logo3.png";

const Header = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <img aria-hidden="true" class="navbar-brand" id="logo" sty="" src={logo} height="45"></img>
                <a class="navbar-brand spark-font-100" href="#" style={{color:"white"}}>e2e Catalog</a>
                {/* <a class="navbar-brand spark-font-100" href="#" style={{color:"white","textAlign":"right"}}>Welcome Muskaan Agrawal</a> */}
                <span class=" navbar-brand navbar-text " style={{"color":"white","marginLeft":"45rem"}}>Welcome Muskaan Agrawal !</span>
            </div>
        </div>
      </nav>

    </React.Fragment>
       
    
  )
}

export default Header;
