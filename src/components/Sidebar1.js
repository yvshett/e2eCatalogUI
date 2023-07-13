import React , {useEffect , useState} from 'react';
import axios from 'axios';
import SidebarItem1 from "../components/SidebarItem1";

const Sidebar1 = ({children , onMenuClick}) => {
    const[data, setdata]= useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
              //  const response = await axios.get('/api/Category');
                const response = await axios.get('https://e2e-api-dev.apps1-fm-int.icloud.intel.com/api/HomePage');
                setdata(response.data);
                setLoading(true);
                console.log("success");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); 
    
        
        

   

    return(
            <div className="sidebar">
            {
           loading==true? data.map((item) => (
            <SidebarItem1 category={item.category} onMenuClick={onMenuClick} data={data} />
         
            )) : <span>Loading in progress</span>
            }
            </div>

    );
};



export default Sidebar1;
