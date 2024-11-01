## Olympus Project structure:
###     UI - In ReactJS using NodeJS(20.11.1).  
###     Server - Java(21.0.1) using SpringBoot 
###     ServerGateway to AI - Python3.13 

## For build and run do the following (on Windows machine)
Pre-requisite: Install NodeJS(version 20 or higher), Java JDK (21 or higher). git (latest version)   
1) choose any folder you want to store your code into. Open windows command line tool and cd into it.   
2) Run: **git clone https://github.com/rajeevranjan91/olympus.git**   
3) cd to **olympusUI** folder   
4) Run: *npm install*  
5) Run: *npm run build*   (this command will build and copy the static to the server side project)   
6) cd to **olympusAIServer** folder   
7) Run: *.\mvnw.cmd clean package*   
8) Run: *.\mvnw.cmd spring-boot:run*     

### Open UI and go to the link:
   http://localhost:8080/index.html

## Olympus Gateway  
1) Install python 3.13 for windows   
2) Add python folder scripts to the path
   eg: *%PATH%;C:\Users\ranja\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\ranja\AppData\Local\Programs\Python\Python313\*
3) Run following commands to install packages needed
*python -m pip install request*  
*python -m pit install flask*  

cd to folder *olympusAIGateway*  
4) You need two windows command terminals.   
In one run the server and in another test it out.   
In one terminal run: *.\runServer.cmd*  
In another: *python testGateway.py*  

