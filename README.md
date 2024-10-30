Olympus Project structure:
     UI - In ReactJS using NodeJS(20.11.1).
     Server - Java(21.0.1) using SpringBoot

For build and run do the following (on Windows machine)
Pre-requisite: Install NodeJS(version 20 or higher), Java JDK (21 or higher). git (latest version)
1) choose any folder you want to store your code into. Open windows command line tool and cd into it.
2) Run: git clone https://github.com/rajeevranjan91/olympus.git
3)  cd to olympusUI folder
4) Run: npm install
5) Run: npm build   (this command will build and copy the static to the server side project)
6) cd to olympusAIServer folder
7) Run: .\mvnw.cmd clean package
8) Run: .\mvnw.cmd spring-boot:run

   Open UI and go to the link:
   http://localhost:8080/index.html
