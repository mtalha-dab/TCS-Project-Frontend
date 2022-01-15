import React, { useState, useEffect } from "react";
import axios from "axios";

function Teacher() {
  const [material,setMaterial] = useState([])

     
       useEffect(() => {
         axios.get("http://localhost:5000/materials").then((res) => {
           const material = res.data;
           setMaterial(material);
         });
       }, []);
         
           return (
             <div>
               <h1>Teacher</h1>
         
               <table>
                 <tr>
                   <th>Book</th>
                   <th>Stationary</th>
                 </tr>
                 {material.map((i) => {
                   return (
                     <tr>
                       <td>{i.book}</td>
                       <td>{i.stationary}</td>
                     </tr>
                   );
                 })}
               </table>
             </div>
     )
 }

export default Teacher
