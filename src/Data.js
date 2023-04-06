import React from "react";
import { useState } from "react";


//  {posts,loading,setLoading}
  
export default function Data(props) {
const[isActive,setIsActive]=useState(false)



function change(){isActive ? setIsActive( false) : setIsActive(true)}

  return (
    // <div className='list-group mb-4'>
    //   {data.map((item,index) => (
    //     <p key={index} ><div onClick={()=>{setLoading(!loading)}} >
    //        {item.name}
    //     {loading? <i className='fas fa-times close home-btn'></i> : <i className='fa fa-chevron-down'></i> }<br/>
    //     {loading && item.capital }
    //     </div>
    //     </p>
    //   ))}
     
    //  {posts.map((item,index) =>(
    //   <p key={index} onClick={()=>{setLoading(!loading)}} className='list-group-item'>{item.name}
    //   {loading? <i className='fas fa-times close home-btn'></i> : <i className='fa fa-chevron-down'></i> }<br/>
    //     {loading && item.capital } </p>

    //  ))}
// </div>



<div>
                <div  className="accordion" style={{textDecorationLine: "underline"}}>
                    <div>{props.name}</div>
                    <div onClick={change}>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div style={{color:"red"}}>{props.capital}</div>}
            </div>
  );

}



