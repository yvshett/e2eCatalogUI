import React, { useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";

const SidebarItem1 = ({ category, onMenuClick , data}) => {
   
    const [open, setOpen] = useState(false);
    const handleclick = (cat, subCat) => {
      onMenuClick(cat , subCat );
     }

     const getSubCategoriesByCategory = (categoryvalue) => {
        const sub = data.find((item) =>item.category===categoryvalue);
        if(sub) {
            return sub.subCategory;
        }
        return [];
     };
     
     const subCategories = getSubCategoriesByCategory(category);
     const subCategories1 = subCategories.filter(item => item.isActive);


     return (
        <div key={category} className="link_text" >
        <div className="spark-font-200" style={{"color":"blue"}}>
        {category}
        <span
    aria-hidden="true"
    role="img"
    class="spark-icon icon chevron-down light"
    style={{"font-size":"24px" , "paddingLeft" : "20px" ,"paddingTop":"10px"}}
    onClick={() => setOpen(!open)}
    ></span>
    </div>
        <div
          style={{   "lineHeight":"1.3"}}
          className="subCategory"
        >
           { subCategories1
            .map((item) => (
              <div key={item.subCategory} className="selected" style={{ display: open ? "block" : "none" }}>
              
                  <NavLink
                  to={`/${category}/${item.subCategory}`}
                  className="link_test spark-font-100"
                  onClick={() => handleclick(category,item.subCategory)}
                >
              
                  {item.subCategory}
                </NavLink>
                
                
              </div>
            )) }
        </div>
      </div>
       );
    };
    export default SidebarItem1;  