import React, { useState } from 'react';
import { SendHorizontal} from 'lucide-react';
import Header from './Header';

function TheApp() {
 const [question, setQuestion] = useState('');
const [answers, setAnswers] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (question.trim()) {
    setAnswers(prev => [question, ...prev]);
    setQuestion('');
  }
};

return (<>
    <div className="w-[450px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <Header/>
      {/* Answers Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100"
          >
            <p className="text-sm text-gray-700">{answer}</p>
          </div>
        ))}
        {answers.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400 text-sm">Your questions will appear here</p>
          </div>
        )}
      </div>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
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
  </>
);
}



export default TheApp;