import React, { useState } from "react";
const questions =[
    {
      question:"What is the virtual DOM in React?",
      answerOptions:[
        {answer:"A direct copy of the real DOM that can be modified",isCorrect:false},
        {answer:"A lightweight copy of the real DOM to improve performance",isCorrect:true},
        {answer:"A replacement for the real DOM",isCorrect:false},
        {answer:"A component in React",isCorrect:false},
      ]
    },
    {
      question:"Which of the following is used to create a functional component in React?",
      answerOptions:[
        {answer:"class Component extends React.Component",isCorrect:false},
        {answer:"React.createElement",isCorrect:false},
        {answer:"function Component() { return <div></div>; }",isCorrect:true},
        {answer:"React.createComponent()",isCorrect:false},
      ]
    },
    {
      question:"What is the purpose of useState in React?",
      answerOptions:[
        {answer:"To create a state variable in functional components",isCorrect:true},
        {answer:"To manage side effects in components",isCorrect:false},
        {answer:"To handle routing in React",isCorrect:false},
        {answer:"To update the props of a component",isCorrect:false},
      ]
    },
    {
      question:"Which method is used to pass data from a parent component to a child component in React?",
      answerOptions:[
        {answer:"useContext",isCorrect:false},
        {answer:"props",isCorrect:true},
        {answer:"state",isCorrect:false},
        {answer:"useReducer",isCorrect:false},
      ]
    },
    {
      question:"Which of the following hooks is used for handling side effects in React functional components?",
      answerOptions:[
        {answer:"useState",isCorrect:false},
        {answer:"useEffect",isCorrect:true},
        {answer:"useContext",isCorrect:false},
        {answer:"useRef",isCorrect:false},
      ]
    }
];

function Quiz(){
    const [currQuestion,setCurrQuestion] = useState(0);
    const [answered,setAnswered] = useState(false);
    const [selectedAns,setSelectedAns] = useState(null);
    const [score,setScore] = useState(0);
    const [showScore,setShowScore] = useState(false);

    const NextQuestion =() => {
        setAnswered(false);
        setSelectedAns(null);
        const nextQuestion = currQuestion+1;
        if (nextQuestion < questions.length)
        {
            setCurrQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
        
    }

    const handleAnswer = (index,isCorrect) => {
        setAnswered(true);
        setSelectedAns(index);
        if(isCorrect){
            setScore(score+1);
        }
    }

     return (
        <div className="bg-blue-200 flex justify-center items-center h-screen">
          <div className="bg-white w-3/4 rounded-lg p-5 shadow-lg lg:w-1/2">
            <h1 className="text-center font-bold text-xl p-2 border mb-2">Quiz App</h1>
            {showScore ? `You scored ${score} of ${questions.length}`:
            <div>
                <div className="text-xl">{questions[currQuestion].question}</div>
                <div>{questions[currQuestion].answerOptions.map((option,index)=>
                    <button onClick={()=>handleAnswer(index,option.isCorrect)}
                     className={`block w-full p-2 mt-2 rounded border 
                     ${answered ? 
                     option.isCorrect ? 
                     "bg-green-200" : 
                     selectedAns === index ?
                     "bg-red-200"
                      : "" 
                      : ""
                      }`}>{option.answer}</button>)}
                </div>
                <button className={`${answered ? "bg-green-500" : "bg-green-300"} w-full  text-white p-2 rounded mt-2`}
                onClick={NextQuestion} disabled = {answered ? "" : "disabled" }>Next Question</button>
                <p className="text-center text-gray-400 text-sm">Question {currQuestion+1} of {questions.length}</p>
            </div>
            }
          </div>
        </div>
      )
}
export default Quiz