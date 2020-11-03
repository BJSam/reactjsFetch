import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
const table =({data})=>{
if(data){
    console.log((data))
    return(
        <div>
            <table className="table">
                {
                     data.length===0?
                     <thead>
                         <tr>
                         <td>
                            <h1 className="text-danger">No Matched Data Found</h1>
                         </td>
                     </tr>
                     </thead>
                     
                     :<>
                     <thead>
                     <tr>
                         {
                         Object.keys(data[0]).map(
                                (headding)=>{
                                    return <th key={headding}>
                                         {headding}
                                     </th>
                                }
                            )
                         }
                     </tr>
                 </thead>
                 <tbody>
                     {                       
                         data.map(
                             (dt)=>{
                                 return <tr key={Math.random()}>                                
                                        {
                                           Object.keys(dt).map(
                                               (key)=>{return key==="avatar"?
                                               <td
                                               key={Math.random()}
                                               className="tdAvatar">
                                                  <div className="RoundProf justify-content-center">
                                                  <img className="tdImg" src={dt[key]} alt="Profile Img"/>
                                                  </div>
                                                </td>
                                                   :
                                                  <td
                                                  key={Math.random()}
                                                  >
                                                     {
                                                         dt[key]
                                                     }
                                                 </td>
                                               }
                                           )
                                        }                                
                                 </tr>
                                 
                             }
                         )
                     }
                 </tbody>
                     </>
                }
               
            </table>
        </div>
    )
}

}
export default table