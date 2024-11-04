package com.olympus.olympusAIServer.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.olympus.olympusAIServer.vo.AIRequest;
import com.olympus.olympusAIServer.vo.AIResponse;
import com.olympus.olympusAIServer.vo.Info;

@RestController
@RequestMapping("/olympusService/api")
public class OlympusAIcontroller {
Logger logger = LoggerFactory.getLogger(OlympusAIcontroller.class);

    Info info = new Info("Project Olympus", "Hello World!!");


    @Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

    @GetMapping("/info")
    public Info getInfo(){
        return info;
    }

    @PostMapping("/askAI")
    public AIResponse askAI(@RequestBody AIRequest aiRequest)
    {
        logger.info("Got post request for askAI with request:" + aiRequest);
        AIResponse responseObj =restTemplate(new RestTemplateBuilder()).postForObject("http://127.0.0.1:5100/askGPT",aiRequest, AIResponse.class);
        logger.info("Response received:" + responseObj);
        return responseObj;
    }
}
