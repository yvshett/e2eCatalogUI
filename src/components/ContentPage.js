import React from 'react';
import logo from '../images/windowsserver.png';
import data from '../data/jsondata.json';
import { Dropdown , Item} from '@spark-design/react';





const ContentPage = ({ selectedCategory , selectedSubCategory }) => {
  


  return (
    <div style={{"paddingLeft":"5px"}}>
      {/*  <h5 className="spark-font-300">selectedCategory: {selectedCategory}</h5>
        <h5 className="spark-font-300">selectedSubCategory: {selectedSubCategory}</h5> */}
        <p>Select IAPM ID</p>
        <Dropdown style={{"width":"150px"}}></Dropdown>
     
        <hr style={{"backgroundColor":"black","height":"2px"}} />
        <div className="content-page">
          <div >
    {
        
        data && data.map( item => { 
            return ( 
            <div className="row spark-font-75">  
                
                {
                    
                 (item.Category===selectedCategory && item.SubCategory===selectedSubCategory) ? (
                    item.Asset && item.Asset.map( ( assetattributes , index) => { 
                        return ( 
                        <>
                        <div className="vertical" >
        <div style={{ "width":"50px", "paddingTop":"5px"}} >
        
          <img src={assetattributes.Image} alt='apache' height="50px" width="50px"  ></img>
          
        </div>
        <div className="horizontal">
           <div className="hr1" style={{"fontWeight":"bold"}}>{assetattributes.Name}</div>
           <div className="group">
          <table>
            <tr>
              <td>
              <a href={assetattributes.Attributes[0].Value} target="_blank" rel="noreferrer">Create</a><span class="mx-2">|</span>
           </td>
           <td>
              <a href={assetattributes.Attributes[1].Value} target="_blank" rel="noreferrer">Docs</a><span class="mx-2">|</span>
              </td>
              <td>
               <a href={assetattributes.Attributes[2].Value} target="_blank" rel="noreferrer">AGS</a><span class="mx-2">|</span>
               </td>
               <td>
                <a href={assetattributes.Attributes[3].Value} target="_blank" rel="noreferrer">View</a>
                 </td>
            </tr>
          </table>
             
             </div>
        </div>
      </div>
                        </>
                        )})
                    
                    ) : null }
                 </div>
                 )})
      
}
</div>
</div>
      </div>
    
  )
}

export default ContentPage;
