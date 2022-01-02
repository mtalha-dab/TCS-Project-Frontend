import React, { useState, useEffect } from "react";
import axios from "axios";

function Head() {
    const [material, setMaterial] = useState([
       {book:"ML", stationary:"Laptop"},
       {book:"MAD", stationary:"Data Cable"},
       {book:"Calculus", stationary:"Calculator"},
       {book:"HCI", stationary:"Drawning Book"},
       {book:"ML", stationary:"Laptop"},


      ]);
    
      useEffect(() => {
        axios.get("http://localhost:5000/head").then((res) => {
          const material = res.data;
          setMaterial(material);
        });
      }, []);
        
          return (
            <div>
              <h1>Head</h1>
        
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

export default Head
