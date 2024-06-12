import { useEffect, useState } from "react";
import data from "./index";

const App = () => {
  // why use state variable zero for que here zero means index so its first que , becoz of its stored in array formate
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // create score variable
  const [score, setScore] = useState(0)
  // this variable only for , show your score how much u get from that 
  const [showScore, setShowScore] = useState(false)
  // create variable for timer , its depends on  how much seconds this question will show 
  const [timer, setTimer] = useState(10)

  // function for answer clicking 
  //  parameter selectedOptions means which option we selected 
  const handleAnswerClick = (selectedOption) => {
    // below if condition means if u r selecting crct answer na score will be added 
    if (selectedOption === data[currentQuestion].correctOPtions) {
      setScore((score) => score + 1)
    }
    //  in this below if conditions says what ?? , over all data length is given (3).. 
    // if data length  is higher than the  currentQuestion length na , 
    // setCurrentQuestion length will be increased in current value 0 means 0+1 , 1 means 1+1 
    // 2 means 2+1 , when its entered 3 its automatically stop bcoz of data length is 3 
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1)
      setTimer(10)
    }
    // if everything happens score will showed and  others are hidden 
    else {
      setShowScore(true)
    }
  };
  // create restart component , when user click restart btn its shows everything in initial stage ...
const restartQuiz=()=>{
  setCurrentQuestion(0);
  setScore(0);
  setShowScore(false);
  setTimer(10) 
}
// create use Effect for timer method
useEffect(()=>{
  let interval;
  if(timer > 0 && !showScore){
    interval = setInterval(() => {
      setTimer((timer)=>timer-1)
    }, 1000);
  }
  else{
    clearInterval(interval)
    setShowScore(true);
  }
  return ()=>clearInterval(interval)
  // dependency array shows this timer function depends this two state variable 
},[timer,showScore]);

  return (<>
    <div className="Quiz-Container">
      <h1>Quiz_App</h1>
      {showScore ? (<div className="Score-section"  >
        <p>Your Score : {score}/{data.length}</p>
        <button onClick={restartQuiz}>Restart</button>
      </div>) : (<div className="Question-Section">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{data[currentQuestion].questions}</p>
        <div className="btn-box">
          {data[currentQuestion].options.map((option, index) => (
            <button onClick={() => handleAnswerClick(option)} key={index}>
              {option}
            </button>
          ))}
        </div>
        <div className="timer">
          <h3>Time Left : <span>{timer}s</span></h3>
        </div>
      </div>)}
    </div>

  </>);
}

export default App
  ;