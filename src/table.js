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
                     data.length==0?
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
                                    return <th>
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
                                 return <tr>                                
                                        {
                                           Object.keys(dt).map(
                                               (key)=>{return key==="avatar"?
                                               <td className="tdAvatar">
                                                  <div className="RoundProf justify-content-center">
                                                  <img className="tdImg" src={dt[key]}/>
                                                  </div>
                                                </td>
                                                   :
                                                  <td>
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