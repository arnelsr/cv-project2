
import '../styles/App.css';
import uniqid from 'uniqid';
import React, {useState} from 'react';

const Education=(props)=>{
  const[education,setEducation]=useState({
      school:'',
      course:'',
      schoolDate:'',
      id: uniqid()
  });
  const[educationList,setEducationList]=useState([]);

  const handleChangeEducation=(e)=>{
    //declare
    let school=document.getElementById("schoolInput").value;
    let course=document.getElementById("courseInput").value;
    let schoolDate=document.getElementById("dateInput").value;
    setEducation({
        school:school,
        course:course,
        schoolDate:schoolDate,
        id: education.id,
    })
  };
  const addEducation=(e)=>{
    //declare
    e.preventDefault();
 
    setEducationList(educationList.concat(education));
    setEducation({
      school:'',
      course:'',
      schoolDate:'',
      id: uniqid()
    });
  };
 const deleteEducation=(e)=>{
    //declare
    e.preventDefault();
    const educationId=document.getElementById("deleteButton").dataset.id
    //remove from array
    const newEducationList=educationList.filter(item=>item.id !== educationId);
    setEducationList(newEducationList);
    setEducation({
        school:'',
        course:'',
        schoolDate:'',
        id: uniqid()
    });
 };
 if (!props.preview || props.preview !=='Preview'){
  const firstForm=(
   <form>
    <div className="generalFormx">
     
      <div className="col-1x">
        <label htmlFor="schoolInput">School Name:</label>
        <input
          onChange={handleChangeEducation}
          value={education.school} 
          type="text" 
          id="schoolInput"/>
      </div>
      <div className="col-2x">
          <label htmlFor="courseInput">Course &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
          <input
          onChange={handleChangeEducation}
          value={education.course}  
          type="text" 
          id="courseInput"/>
      </div>
      <div className="col-3x">
          <label htmlFor="dateInput">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
          <input
          onChange={handleChangeEducation}
          value={education.schoolDate}  
          type="date" 
          id="dateInput"/>
      </div>
      <div className="col-4x">
        <button type="submit" onClick={addEducation} id="addButton" >
           Add
          </button>
        </div>
    </div>
  </form>)
  const nextForms= educationList.map((education)=>
    <form>
      <div className="generalFormx" key={education.id}>
        <div className="col-1x">
          <label>School Name:</label>
          <div> 
             {education.school}
          </div>
        </div>
        <div className="col-2x">
            <label>Course:</label>
            <div> 
              {education.course}
            </div>
        </div>
        <div className="col-3x">
            <label>Date:</label>
            <div> 
              {education.schoolDate}
            </div>
        </div>
        <div className="col-4x">
        <button type="submit" onClick={deleteEducation} id="deleteButton" data-id={education.id}>
           Delete
          </button>
        </div>
      </div>
    </form>
  )                        
return(
  <div className="generalForm2">
        <h2>Educational Background</h2>
        {nextForms}
        {firstForm}
        
   </div>
     
  )

 }
if (props.preview==='Preview'){
    const nextForms = educationList.map((education)=>
    <form>
    <div className="generalFormx">
      <div className="col-1x">
        <label >School Name:</label>
        <div> 
         {education.school}
        </div>
      </div>
      <div className="col-2x">
        <label>Course &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        <div>{education.course}</div>
      </div>
      <div className="col-3x">
        <label >Date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        <div>{education.schoolDate}</div>
      </div>
    </div>
  </form>
    )    
    return(
        <div className="generalForm2">
            <h2>Educational Background</h2>
            {nextForms}
       </div>
    )
}
};



export default Education;