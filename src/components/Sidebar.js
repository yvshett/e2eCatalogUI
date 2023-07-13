import SidebarItem from "../components/SidebarItem.js";
import data from "../data/jsondata.json";
import React, { useState } from 'react';




const Sidebar = ({children , onMenuClick}) => {
    
    
    const UniqueCategories = new Set();
    data.forEach(item => {
     UniqueCategories.add(item.Category);
    });

    
    
    
   
    return (
        
          <div className="sidebar">
            {[...UniqueCategories].map((Category) => (
              <SidebarItem Category={Category} onMenuClick={onMenuClick}/>
            ))}
          </div>
          
      );
};

export default Sidebar;