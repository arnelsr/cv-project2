
import '../styles/App.css';

import React, {useState} from 'react';

const GeneralInfo=(props)=>{
  const[generalInfo,setGeneralInfo]=useState({
      name:'',
      email:'',
      phone:'',
  });

  const handleChangeGeneralInfo=(e)=>{
    let name=document.getElementById("nameInput").value;
    let email=document.getElementById("emailInput").value;
    let phone=document.getElementById("phoneInput").value;
    setGeneralInfo({
        name:name,
        email:email,
        phone:phone,
    })
 };
 if (!props.preview || props.preview !=='Preview'){
  const returnForm=(
    <form>
      <div className="generalForm">
        <div><h2>General Information</h2></div>
        <div className="col-1">
          <label htmlFor="nameInput">Name:</label>
          <input 
            onChange={handleChangeGeneralInfo}
            value={generalInfo.name}
            type="text" 
            id="nameInput"/>
        </div>
        <div className="col-2">
            <label htmlFor="emailInput">Email :</label>
            <input 
             onChange={handleChangeGeneralInfo}
             value={generalInfo.email}
            type="text" 
            id="emailInput"/>
        </div>
        <div className="col-3">
            <label htmlFor="phoneInput">Phone:</label>
            <input 
             onChange={handleChangeGeneralInfo}
             value={generalInfo.phone}
            type="text" 
            id="phoneInput"/>
        </div>
      </div>
    </form>
  )
  return(
    <div>
    {returnForm}
    </div>
  )
 }; 
 if (props.preview==='Preview'){
  const returnForm=(
   <form>
     <div className="generalForm">
       <div><h2>General Information</h2></div>
       <div className="col-1">
         <label >Name:</label>
         <div> 
          {generalInfo.name}
         </div>
       </div>
       <div className="col-2">
         <label>Email:</label>
         <div>{generalInfo.email}</div>
       </div>
       <div className="col-3">
         <label >Phone:</label>
         <div>{generalInfo.phone}</div>
       </div>
     </div>
   </form>
  )
  return(
   <div>
   {returnForm}
   </div>
  )
 }
};

export default GeneralInfo;
