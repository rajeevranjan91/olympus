import requests

gateway_url = "http://127.0.0.1:5100/askGPT"
gptRequest = {"question" : "Hello how are you?"}
response = requests.post(gateway_url, json=gptRequest)
print(response.json()["response"])