import React , {useEffect , useState} from 'react';
import axios from 'axios';
import { Dropdown , Item} from '@spark-design/react';
import { Link } from 'react-router-dom';

const ContentPage1 = ({ selectedCategory , selectedSubCategory }) => {
    const[data, setdata]= useState([]);
    const[data1, setdata1]= useState([]);
    const[loading, setLoading] = useState(false);
    const[loading1, setLoading1] = useState(false);


    useEffect(() => {
       
        fetchData();
        getToken();
    }, []); 

 
    const getToken = async () => {
        const clientId = '8d546231-f347-4f27-a673-83a34739bd72';
        const clientSecret = 'yTP8Q~_1AfhpzK6eiD921RrjlCVCJLEXUYI7fbtn';
        const tokenUrl = 'https://apis-dev.intel.com/v1/auth/token';

        fetch(tokenUrl, {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then (resp => resp.json())

.then(data => {

	// Log the API data
	//setaccesstoken(data.access_token);
    fetchData1(data.access_token);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
}; 

const fetchData1 = async (accesstoken) => {
     const workId = 'yvshett';
     try {
         const response = await axios.get('https://apis-dev.intel.com/iapm/services/global/v1/solutions', {
             headers: {
                 Authorization: `Bearer ${accesstoken}`
                 
             },
             params: {
                workerId: workId
            }
        });
      //  const rs = (JSON.parse(response.data));
      const rs = response.data;
      setdata1(response.data);
      setLoading(true);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}; 
      


        const fetchData = async () => {
            try {
                // const response = await axios.get('https://e2e-api-dev.apps1-fm-int.icloud.intel.com/api/HomePage');
                const response = await axios.get('https://e2e-api-dev.apps1-fm-int.icloud.intel.com/api/HomePage');
                setdata(response.data);
                setLoading1(true);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

     
    
    const getAssetsByCategoriesandSubCategory = (CategoryValue , SubCategoryValue) => {
        const cat = data.find((item) => item.category === CategoryValue);
        if(cat) {
            const subcat = cat.subCategory.find((item) => item.subCategory === SubCategoryValue);
            if(subcat) {
                return subcat.assets;
            }
        }
        return [];
    };

    const assets = getAssetsByCategoriesandSubCategory(selectedCategory, selectedSubCategory );

    return (
    <div style={{"paddingLeft":"5px"}}>
      {/*}  <h5 className="spark-font-300">selectedCategory: {selectedCategory}</h5>
        <h5 className="spark-font-300">selectedSubCategory: {selectedSubCategory}</h5> */}
     <p>Select IAPM ID</p>
        {/*   <p>{test}</p> */}
         <Dropdown style={{"width":"300px"}}>
        {
        loading==true? data1.map((obj) => (
<Item key={`page_size_${obj.ApplicationId}`} textValue={`${obj.ApplicationId}`}>
                {obj.ApplicationId}-{obj.ApplicationNm}
</Item>)): null
}
        </Dropdown>  


        <hr style={{"backgroundColor":"black","height":"2px"}} />
        <div className="content-page">
            <div className="row spark-font-75">
              {
                loading1==true?( assets && assets.map( ( assetattributes , index) => {
                    return ( 
                        <>
                             <div className="vertical" >
                                <div style={{ "width":"50px", "paddingTop":"5px"}} >
                                    <img src={assetattributes.image} alt='apache' height="50px" width="50px" className='image' ></img>
                    </div> 
                                <div className="horizontal">
                                    <div className="hr1" style={{"fontWeight":"bold"}}>{assetattributes.name}</div>
                                      <div className="group">
                                        {
                                            assetattributes.attributes.map((item , index) => {
                                                return (
                                                    <>
                                      
                                                        <a href={item.value} target="_blank" rel="noreferrer">{item.key}</a><span class="mx-2">|</span> 

                                          </>
                                            )})
                                        }
                                        </div> 
                                </div>
                             </div>
                        </>
                    )
                })):<span>Loading Content</span>
              }
            </div>
        </div>
    </div>
  );
     
};
export default ContentPage1;