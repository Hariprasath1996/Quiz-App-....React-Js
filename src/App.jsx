import { useState } from "react";
import data from "./index";

const App = () => {
  // why use state variable zero for que , becoz of its stored in array formate
  const [currentQuestion,setCurrentQuestion]=useState(0);
  // create score variable
  const[score,setScore]=useState(0)
  return (<>
    <div className="Quiz-Container">
      <h1>Quiz_App</h1>
      <div className="Score-section"  style={{display : "none"}}  >
        <p>Your Score : 3/3</p>
        <button>Restart</button>
      </div>
      <div className="Question-Section">
          <h2>Question : 1</h2>
          <p>This is a sample question</p>
          <div className="btn-box">
            <button>option-1</button>
            <button>option-2</button>
            <button>option-3</button>
            <button>option-4</button>
          </div>
        <div className="timer">
          <h3>Time Left : <span>5s</span></h3>
        </div>
      </div>
    </div>

  </>);
}

export default App
  ;