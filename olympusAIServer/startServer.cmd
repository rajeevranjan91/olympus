@echo off
cd ..\olympusUI
rem npm run build
cd ..\olympusAIServer

call mvnw.cmd "clean"

call mvnw.cmd "spring-boot:run"