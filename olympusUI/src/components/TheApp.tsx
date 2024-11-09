import { useState } from 'react';
import Header from './Header';
import Prompter from './Prompter';
import { invokeAI, AIRequest, AIResponse } from '../services/AIService';
import Output from './Output';
import Spinner from './Spinner';

function TheApp() {
const [question, setQuestion] = useState('');
const [answers, setAnswers] = useState<AIResponse[]>([]);
const [spinForAnswer, setSpinForAnswer] = useState(false);


const handleSubmit = (questionStr:string) => {
  console.log("Handle Submit called with questionStr:" + questionStr)
  if (questionStr.trim()) {
    setSpinForAnswer(true);
    const req: AIRequest = {'question': questionStr};
    invokeAI(req).then(resp => {
        console.log("Response received from service:" + resp.responseStr);
        const newAnwers: AIResponse[] = [{responseStr: "Qustion:" + questionStr + " Answer:" + resp.responseStr}, ...answers];
        setAnswers(newAnwers);
        console.log("Num answers:" + answers.length);
        setSpinForAnswer(false);
    }).catch(() => {
      console.log("Some error happend.");
      const newAnwers: AIResponse[] = [{responseStr: "Qustion:" + questionStr + " Answer:" + "Error in fetching response"}, ...answers];
      setAnswers(newAnwers);
      console.log("Num answers:" + answers.length);
    setSpinForAnswer(false);
    });
  }
  setQuestion("");
};

return (<>
    <div className="w-[450px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <Header/>
      {spinForAnswer ? <Spinner /> : ""}
      <Output responses={answers} />
      <Prompter question={question} submitHandler={handleSubmit } />
    </div>
  </>);
};



export default TheApp;