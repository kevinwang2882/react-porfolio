import { GoChevronRight } from "react-icons/go";
import '../style/AboutMe.css'
export default function AboutMe () {
  return (
    <div className="project-container">
      <h1>About</h1>
      <div className="text-container">
        <p>
          I am a Software Engineer who thrives on the challenges of coding and problem-solving. In my previous career as a store manager, I honed my leadership and organizational abilities, ensuring smooth operations and customer satisfaction. Looking ahead, I aspire to leverage my skills in backend development to contribute to innovative projects that push the boundaries of technology. I am driven by a desire to continuously learn and grow, with the ultimate goal of making meaningful contributions to the world.
        </p>
      </div>
      <div className="image-container">
       
        <img src="WechatIMG350.jpg" alt="Your Image" style={{ width: '400px', height: '400px',marginRight: '20px', marginTop: '20px'  }} />
        <div className="word" >
          <div className="word1" style ={{
                alignItems: 'center'}}> 
        <h1>Fullstack developer</h1>
        <h3><GoChevronRight style={{ width: '25px', height: '25px',marginRight: '5px',marginTop: '5px'}}/>Website:  </h3>
        <h3><GoChevronRight style={{ width: '25px', height: '25px',marginRight: '5px',marginTop: '5px'}}/>Degree: Bachelor of Electrical Engineer </h3>
        <h3><GoChevronRight style={{ width: '25px', height: '25px',marginRight: '5px',marginTop: '5px'}}/>City:New York, USA </h3>
        <h3><GoChevronRight style={{ width: '25px', height: '25px',marginRight: '5px',marginTop: '5px'}}/>Phone: 917-238-1526 </h3>
        <h3><GoChevronRight style={{ width: '25px', height: '25px',marginRight: '5px',marginTop: '5px'}}/>Email: xinjiewang2882@gmail.com </h3>
        <p> graduate from General Assembly </p>
        </div>
        </div>
      </div>
    </div>
  );
  
    }