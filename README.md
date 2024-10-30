Olympus Project structure:
     UI - In ReactJS using NodeJS(20.11.1).
     Server - Java(21.0.1) using SpringBoot

For build and run do the following (on Windows machine)
1) cd to olympusUI folder
2) Run: npm install
3) Run: npm build   (this command will build and copy the static to the server side project)
4) cd to olympusAIServer folder
5) Run: .\mvnw.cmd clean package
6) Run: .\mvnw.cmd spring-boot:run

   Open UI and go to the link:
   http://localhost:8080/index.html
