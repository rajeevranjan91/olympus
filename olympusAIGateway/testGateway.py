import requests

gateway_url = "http://127.0.0.1:5100/askGPT"
aiServer_url = "http://127.0.0.1:8080/olympusService/api/askAI"
gptRequest = {"question" : "Hello how are you?"}

print("Testing gateway directly with url=" + gateway_url)
response = requests.post(gateway_url, json=gptRequest)
print("Got below response:")
print(response.json())

print("Calling springboot server with url=" + aiServer_url)
response = requests.post(aiServer_url, json=gptRequest)
print("Got below response:")
print(response.json())

print("Test complete. Exiting.")