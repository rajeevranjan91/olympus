import { AIResponse } from "../services/AIService";

interface PropData {
    responses:AIResponse[]
}


function Output({responses}: PropData) {
    return <div className="min-h-96">{
        responses && responses.map(response => {
            return (<div
                key={responses.indexOf(response)}
                className="bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100"
            >
                <p className="text-sm text-gray-700">{response.responseStr}</p>
            </div>);
        })
    }
    {responses && responses.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400 text-sm">Your questions will appear here</p>
          </div>
        )}
        </div>;
}

export default Output;