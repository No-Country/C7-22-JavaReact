package com.C722.CriptoAlgo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.access.SecurityConfig;

@SpringBootApplication (exclude = {SecurityAutoConfiguration.class})
public class CriptoAlgoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CriptoAlgoApplication.class, args);
	}

}
