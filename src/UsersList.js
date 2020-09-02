import React ,{useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';
import User from "./User";
import { Spinner } from 'reactstrap';

const UsersList = () => {
 const [listOfUser , setListOfUser ] = useState([]);
 const [isLoading,setIsLoading]=useState(true)
 useEffect(() => {

   const fetchData=async()=>{
     const response = await axios('https://jsonplaceholder.typicode.com/users')
     setListOfUser(response.data)
     setIsLoading(false)
   }
   setIsLoading(true);
   fetchData();
 },[]);

  return (
      <div className="Container">

        <ul>
          {isLoading?<div style={{padding:"50px", textAlign:"center"}}><Spinner color="info" /></div>:listOfUser.map( (user,i)=><User user={user}/>) }
        </ul>
      </div>
  );
}


export default UsersList;
