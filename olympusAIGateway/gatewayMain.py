# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

def getResponse(question:str):
    response = {"responseStr": "My placeholder response is: Hello World"}
    return response


@app.post("/askGPT")
def askGPT():
    print("Request received with below request object:")
    print(request)
    if request.is_json:
        print("Request is JSON")
        requestObj = request.get_json()
        print("Request JSON is:")
        print(requestObj)
        responseStr = getResponse(requestObj["question"])
        return responseStr, 201
    print("Not JSON request")
    return {"error": "Request must be JSON"}, 415