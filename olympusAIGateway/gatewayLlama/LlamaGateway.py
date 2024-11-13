from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

class LlamaGateway:

    def __init__(self):
        # Initialization code here
        print("Initializing module")
        template = """Question: {question}
        Answer: Answer in around 10 to 20 words and exclude unnecessary items in the response."""
        prompt = ChatPromptTemplate.from_template(template)
        self._model = OllamaLLM(model="llama3.2")
        chain = prompt | self._model

    def askLlama(self, question):
        responseStr = "";
        for chunk in self._model.stream(question):
            responseStr +=chunk
            print(chunk, end="", flush=True)
        print("Complete response is:" + responseStr)
        return responseStr