cd ..\olympusUI
npm run build
cd ..\olympusAIServer
call .\mvnw.cmd clean package spring-boot:run
