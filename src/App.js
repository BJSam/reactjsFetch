import './App.css';
import { useEffect, useState } from 'react';
import Table from './table'
require('isomorphic-fetch');
function App() {
  const [data,setData] = useState(null);
  const [searchData,setSearch] = useState("");
 useEffect(async()=>{
  await fetch('https://reqres.in/api/users?page=2')
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  .then(function(data) {
     setData(data.data)
  });
 },[]);
 function search(data){   
  return  data.filter(dt=>dt.first_name.toLowerCase().indexOf(searchData)>-1)
 }
 if(data != null){
  return <div className="App">
  <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Search Table</span>
  </div>
  <input type="text" className="form-control" value={searchData} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Start typing" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<Table data={search(data)}/>
  </div>
 }else{
  return (
    <div className="App">
      <h1 className="text-danger">No Data</h1>
    </div>
  );
 }
  
}

export default App;
