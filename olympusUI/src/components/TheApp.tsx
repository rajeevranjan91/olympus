import { useState } from 'react';
import Header from './Header';
import Prompter from './Prompter';
import { invokeAI, AIRequest, AIResponse } from '../services/AIService';
import Output from './Output';

function TheApp() {
const [question, setQuestion] = useState('');
const [answers, setAnswers] = useState<AIResponse[]>([]);


const handleSubmit = (questionStr:string) => {
  console.log("Handle Submit called with questionStr:" + questionStr)
  if (questionStr.trim()) {
    const req: AIRequest = {'question': questionStr};
    invokeAI(req).then(resp => {
        console.log("Response received from service:" + resp.responseStr)
        const newAnwers = [resp];
        if(answers && newAnwers.length>0){
          answers.forEach(answer => newAnwers.push(answer));
        }
        setAnswers(newAnwers);
        console.log("Num answers:" + answers.length);
    });
  }
  setQuestion(questionStr);
};

return (<>
    <div className="w-[450px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <Header/>
      <Output responses={answers} />
      <Prompter question={question} submitHandler={handleSubmit } />
    </div>
  </>);
};



export default TheApp;