import React , {useEffect , useState} from 'react';
import axios from "axios";
import { Dropdown , Item} from '@spark-design/react';

const View = () => {
    const[data1, setdata1]= useState([]);
// const[accesstoken, setaccesstoken]= useState(''); 

   useEffect(() => {
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
       {/*  try {
            const response = await axios.post(tokenUrl, {
                params: {
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret
                }
            });
            const accessToken = response.data.access_token;
            setdata(accessToken);
            console.log(accessToken);
        } catch (error) {
            console.error('Error fetching data:', error);
        } */}
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
          const rs = response.data.value;
          setdata1(rs);
            // setdata(rs.value);
            console.log(data1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }; 
   // const test = `Bearer${accesstoken}`; 
return (
    <div>
         <p>Select IAPM ID</p>
        {/*   <p>{test}</p> */}
         <Dropdown style={{"width":"300px"}}>
        {data1.map((obj) => (
<Item key={`page_size_${obj.applicationId}`} textValue={`${obj.applicationId}`}>
                {obj.applicationId}-{obj.applicationNm}
</Item>))}
        </Dropdown>  

        <hr style={{"backgroundColor":"black","height":"2px"}} />
         
         
    </div>
);
};

export default View;