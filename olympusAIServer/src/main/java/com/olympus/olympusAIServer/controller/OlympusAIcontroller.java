package com.olympus.olympusAIServer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.olympus.olympusAIServer.vo.Info;

@RestController
@RequestMapping("/olympusService/api")
public class OlympusAIcontroller {
    Info info = new Info("Team Olympus", "Hello World");

    @GetMapping("/info")
    public Info getInfo(){
        return info;
    }
}
