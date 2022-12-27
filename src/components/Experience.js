import '../styles/App.css';
import uniqid from 'uniqid';
import React, {useState} from 'react';

const Experience=(props)=>{

  const[experience,setExperience]=useState({
      company:'',
      position:'',
      tasks:'',
      startDate:'',
      id: uniqid()
  });

  const[experienceList,setExperienceList]=useState([]);

  const handleChangeExperience=(e)=>{
    //declare
    let company=document.getElementById("companyInput").value;
    let position=document.getElementById("positionInput").value;
    let tasks=document.getElementById("tasksInput").value;
    let startDate=document.getElementById("startDate").value;
    setExperience({
        company:company,
        position:position,
        tasks:tasks,
        startDate:startDate,
        id: experience.id,
    })
  };

  const addExperience=(e)=>{
    //declare
    e.preventDefault();
    setExperienceList(experienceList.concat(experience))
    setExperience({
      company:'',
      position:'',
      tasks:'',
      startDate:'',
      id: uniqid()
    })
  };

  const deleteExperience=(e)=>{
    //declare
    e.preventDefault();
    const experienceId=document.getElementById("deleteExperienceButton").dataset.id
    //remove from array
    const newExperienceList=experienceList.filter(item=>item.id !== experienceId);
    setExperienceList(newExperienceList);
    setExperience({
        company:'',
        position:'',
        tasks:'',
        startDate:'',
        id: uniqid()
      })
  };

  if (!props.preview || props.preview !=='Preview'){
    const firstForm=(
     <form>
      <div className="generalForm5">
        
        <div className="col-15">
          <label htmlFor="companyInput">Company Name:</label>
          <input
            onChange={handleChangeExperience}
            value={experience.company} 
            type="text" 
            id="companyInput"/>
        </div>
        <div className="col-25">
            <label htmlFor="positionInput">Position &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input
            onChange={handleChangeExperience}
            value={experience.position}  
            type="text" 
            id="positionInput"/>
        </div>
        <div className="col-35">
            <label htmlFor="tasksInput">Tasks &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input
            onChange={handleChangeExperience}
            value={experience.tasks}  
            type="text" 
            id="tasksInput"/>
        </div>
        <div className="col-45">
            <label htmlFor="startDate">Start Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input
            onChange={handleChangeExperience}
            value={experience.startDate}  
            type="date" 
            id="startDate"/>
        </div>
        <div className="col-55">
          <button type="submit" onClick={addExperience} id="addExperienceButton" >
             Add
            </button>
          </div>
      </div>
    </form>)
    const nextForms= experienceList.map((experience)=>
      <form>
        <div className="generalForm5" key={experience.id}>
          
          <div className="col-15">
            <label>Company Name:</label>
            <div> 
               {experience.company}
            </div>
          </div>
          <div className="col-25">
              <label>Position:</label>
              <div> 
                {experience.position}
              </div>
          </div>
          <div className="col-35">
              <label>Tasks:</label>
              <div> 
                {experience.tasks}
              </div>
          </div>
          <div className="col-45">
              <label>Start Date:</label>
              <div> 
                {experience.startDate}
              </div>
          </div>
          <div className="col-55">
          <button type="submit" onClick={deleteExperience} id="deleteExperienceButton" data-id={experience.id}>
             Delete
            </button>
          </div>
        </div>
      </form>
    )                        
  return(
    <div className="generalForm2">
          <h2>Work Experience</h2>
          
          {nextForms}
          {firstForm}
          
     </div>
       
    )
  
   }
  if (props.preview==='Preview'){
      const nextForms = experienceList.map((experience)=>
      <form>
      <div className="generalForm5">
        <div className="col-15">
          <label >Company Name:</label>
          <div> 
           {experience.company}
          </div>
        </div>
        <div className="col-25">
          <label>Position:</label>
          <div>{experience.position}</div>
        </div>
        <div className="col-35">
          <label>Tasks:</label>
          <div>{experience.tasks}</div>
        </div>
        <div className="col-45">
          <label >Start Date:</label>
          <div>{experience.startDate}</div>
        </div>
      </div>
    </form>
      )    
      return(

          <div className="generalForm2">
              <h2>Work Experience</h2>
             
              {nextForms}
              
              
         </div>
      )
      
      
  }
};

export default Experience;