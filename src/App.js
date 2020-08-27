import React ,{useState , useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const User=({user})=>{
  return(
      <div className="card">
        <div className="firstinfo">
          <img src="pingo.png" alt="user"/>
          <h1>{user.username}</h1>
        </div>
        <div className="secondinfo">
          <h2><b>name</b> : {user.name}</h2>
          <p> <b>E-mail</b>:{user.email}</p>
          <p> <b>city</b> : {user.address.city}</p>
          <p> <b>Adress</b> : {user.address.street}</p>

        </div>
      </div>

  )
}
const App = () => {
 const [listOfUser , setListOfUser ] = useState([]);
 /*const [error, setError] = useState(null);*/
 useEffect(() => {
   // the function to fetch data from the api
   const fetchData=async()=>{
     const response = await axios('https://jsonplaceholder.typicode.com/users')
     setListOfUser(response.data)

     /*
      axios.get('https://jsonplaceholder.typicode.com/users')
       .then(function (response) {
         setListOfUser(response.data)
       })
       .catch(function(error){
       })
       */
   }

   fetchData();
 },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="20%" />
      </header>
      <div className="Container">
        <ul>
          {listOfUser.map( (user,i)=><User user={user}/>)}
        </ul>
      </div>
    </div>
  );
}


export default App;
