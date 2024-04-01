import React from 'react';
import { LiaCheckCircleSolid } from "react-icons/lia";
import '../style/Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className='sub-title'>Explore My</h2>
      <h1 className="resume-title">Experience</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <div className="frontend-box">
          <h1>Frontend Development</h1>
          <h2><LiaCheckCircleSolid /> HTML <LiaCheckCircleSolid /> CSS <LiaCheckCircleSolid /> JavaScript </h2>
          <h2><LiaCheckCircleSolid /> React <LiaCheckCircleSolid /> Figma </h2>
        </div>
        <div className="backend-box">
          <h1>Backend Development</h1>
          <h2><LiaCheckCircleSolid /> JSON <LiaCheckCircleSolid /> Express JS <LiaCheckCircleSolid /> Django </h2>
          <h2><LiaCheckCircleSolid /> Python <LiaCheckCircleSolid /> Mango DB <LiaCheckCircleSolid /> SQL </h2>
        </div>
      </div>
    </div>
  );
}
