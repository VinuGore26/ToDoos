import React from "react";
import bg1 from "../img/bg1.png"

const About = () => {

    let styleBg = {
        width: "45%",
        height: "45%"
    }

  return (
    <>
      <div className="container p-3">
        <div className="container">
            <h1 className="fw-bold">About</h1>
            <p className="fs-6 fw-lighter">Welcome to ToDoo, your go-to web app for managing daily tasks and boosting productivity! ToDoo is a simple yet powerful task management application built using React.js. Whether you're a busy professional juggling multiple projects, a student keeping track of assignments, or anyone looking to stay organized in the hustle and bustle of daily life, ToDoo is designed to be your digital companion in helping you streamline your day.</p>
            <div className="d-flex py-4">
                <img className="m-2" src={bg1} alt="bg" style={styleBg}/> 
                <p className="fs-6" style={{fontWeight: "300"}}><h4 className="fw-bold">Key Features :</h4>
                1. Intuitive User Interface - ToDoo boasts a clean and intuitive user interface designed to streamline your task management experience. The user-friendly design ensures that you can quickly navigate and focus on what matters most - your tasks.<br /><br />
                2. Task Categories - Organize your tasks efficiently by categorizing them into different sections. Whether it's work-related, personal, or miscellaneous, ToDoo allows you to create categories to suit your unique needs.<br /><br />
                3. Priority Levels - Easily prioritize your tasks by assigning priority levels. This feature helps you identify and tackle high-priority tasks first, ensuring you stay on top of your most crucial responsibilities.<br /><br />
                4. Deadline Tracking - Set deadlines for your tasks to stay on schedule. ToDoo provides a visual representation of approaching deadlines, helping you manage your time effectively.</p>
            </div>
            <h4 className="fw-bold">Our Mission :</h4>
            <p className="fs-6 fw-lighter">At ToDoo, our mission is to simplify task management and empower users to achieve their goals with less stress. We understand the challenges of a busy lifestyle, and our app is designed to be a reliable companion in your journey towards productivity.</p>
            <br />
            <h4 className="fw-bold">Feedback and Support :</h4>
            <p className="fs-6 fw-lighter">We value your feedback! If you have any suggestions, encounter issues, or simply want to share your experience with ToDoo, feel free to reach out to our support team. Your input is crucial in helping us enhance ToDoo and make it an even more effective tool for task management.</p>
            <p className="fs-6 text-center mt-5 mb-3" style={{fontWeight: "400"}}>Thank you for choosing ToDoo. Start organizing your tasks today and make every day more productive !</p>
        </div>
      </div>
    </>
  );
};

export default About;
