import { SendHorizontal} from 'lucide-react';
import { useState } from 'react';

interface PropData {
    question:string,
    submitHandler: (questionStr: string) => void;
}


function Prompter({question, submitHandler}: PropData) {
  const [inputQuestion, setInputQuestion] = useState(question);
  const formSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Input question at submit is:" + inputQuestion);
    console.log("Value of target is:" + e.target);
    submitHandler(inputQuestion);
  }

return <div>
      <form onSubmit={formSubmitted} className="p-4 border-t border-gray-100">
        <div className="relative">
          <input
            type="text"
            value={inputQuestion}
            onChange={(event: React.ChangeEvent<HTMLInputElement>):void =>{
              setInputQuestion(event.target.value);
              console.log("Input question is:" + inputQuestion)
            }}
            placeholder={"Type your question here..."}
            className="w-full pl-4 pr-12 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <SendHorizontal className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
}

export default Prompter;