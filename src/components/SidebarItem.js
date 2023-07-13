import React, { useState, useEffect } from "react";
import data from "../data/jsondata.json";
import {  NavLink } from "react-router-dom";



const SidebarItem = ({ Category, onMenuClick }) => {
   
  const [open, setOpen] = useState(false);
  const handleclick = (menuItem) => {
    onMenuClick(menuItem.Category , menuItem.SubCategory);
   }

   return (
    <div key={Category} className="link_text" >
    <div className="spark-font-300">
    {Category}
    <span
aria-hidden="true"
role="img"
class="spark-icon icon chevron-down light"
style={{"font-size":"24px" , "paddingLeft" : "20px" ,"paddingTop":"10px"}}
onClick={() => setOpen(!open)}
></span>
</div>
    <div
      style={{  "paddingLeft":"15px", "lineHeight":"1.3"}}
      className="subCategory"
    >
      {data
        .filter((item) => item.Category === Category)
        .map((item) => (
          <div key={item.SubCategory} className="selected" style={{ display: open ? "block" : "none" }}>
            <NavLink
              to={`/${Category}/${item.SubCategory}`}
              className="link_test spark-font-100"
              onClick={() => handleclick(item)}
            >
              {item.SubCategory}
            </NavLink>
          </div>
        ))}
    </div>
  </div>
   );
    };
    
    export default SidebarItem;

