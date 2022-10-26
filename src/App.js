import React, { useState } from "react";
import Main from "./components/Main";
import { v4 as uuidv4 } from 'uuid';
import cvData from './modules/cv-example';
import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [personal, setPersonal] = useState(cvData.personal);
  const [experience, setExerience] = useState(cvData.experience);
  const [education, setEducation] = useState(cvData.education);

  function mergeState(object) {
    return Object.assign({}, object);
  }

  function newArray(array) {
    return Array.from(array);
  }

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    const newPersonal = mergeState(personal);
    newPersonal[name] = value;
    setPersonal(newPersonal);
  }

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    const instanceId = e.target.parentElement.id;
    const instanceIndex = education.indexOf(education.find(i => i.id === instanceId));

    const newEducation = newArray(education);
    newEducation[instanceIndex][name] = value;
    setEducation(newEducation);
  }

  const handleEducationAdd = () => {
    const newEducation = newArray(education);
    newEducation.push({
      id: uuidv4(),
      from: "",
      to: "",
      title: "",
      location: ""
    })

    setEducation(newEducation);
  }

  const handleEducationDelete = (e) => {
    const instanceId = e.target.parentElement.id;
    let newEducation = newArray(education);
    newEducation = newEducation.filter(i => { 
      return i.id !== instanceId
    })

    setEducation(newEducation);
  }
  
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    const instanceId = e.target.parentElement.id;
    const instanceIndex = experience.indexOf(experience.find(i => i.id === instanceId));

    const newExperience = newArray(experience);
    newExperience[instanceIndex][name] = value;
    setExerience(newExperience);
  }

  const handleExperienceAdd = () => {
    const newExperience = newArray(experience);
    newExperience.push({
      id: uuidv4(),
      from: "",
      to: "",
      position: "",
      company: "",
      location: ""
    })

    setExerience(newExperience);
  }

  const handleExperienceDelete = (e) => {
    const instanceId = e.target.parentElement.id;
    let newExperience = newArray(experience);
    newExperience = newExperience.filter(i => { 
      return i.id !== instanceId
    })

    setExerience(newExperience);
  }


  return <>
    <Header />
    <Main
      personal={personal}
      experience={experience}
      education={education}
      handlePersonalChange={handlePersonalChange} 
      
      handleEducationChange={handleEducationChange}
      handleEducationAdd={handleEducationAdd}
      handleEducationDelete={handleEducationDelete}

      handleExperienceChange={handleExperienceChange}
      handleExperienceAdd={handleExperienceAdd}
      handleExperienceDelete={handleExperienceDelete}
    />
    <Footer />
  </>
}

export default App;
