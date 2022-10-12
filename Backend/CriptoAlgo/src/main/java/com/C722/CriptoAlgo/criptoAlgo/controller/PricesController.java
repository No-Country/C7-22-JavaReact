package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.auth.utils.CryptoPrice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/prices")
public class PricesController {

    //@GetMapping("/ars")
    public CryptoPrice getCryptoFiatPrice(String crypto, String fiat){
        String url ="https://criptoya.com/api/bitso/"+crypto+"/"+fiat+"/1";
        RestTemplate restTemplate = new RestTemplate();
        CryptoPrice prices = restTemplate.getForObject(url, CryptoPrice.class);
        return prices;

    }

}
