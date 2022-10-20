package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.auth.utils.CryptoPrice;
import net.bytebuddy.asm.Advice;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/prices")
public class PricesController {

    @GetMapping("/usd_crypto/{crypto}")
    public List <CryptoPrice> getCryptoFiatPrice(@PathVariable("crypto") @Valid @NotNull String crypto){

            String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+crypto+"&order=market_cap_desc&per_page=100&page=1&sparkline=false";
            RestTemplate restTemplate=new RestTemplate();
            CryptoPrice[] results = restTemplate.getForObject(url, CryptoPrice[].class);
            //CryptoPrice prices = restTemplate.getForObject(url, CryptoPrice.class);
            return Arrays.asList(results);
}

    @GetMapping("/usd_crypto/{crypto}/calculate/{usd}")
    public Double calculateCoinBalance(@PathVariable("crypto") @Valid @NotNull String crypto,
                                       @PathVariable("usd") @Valid @NotNull Double usd){

        String url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+crypto+"&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        RestTemplate restTemplate=new RestTemplate();
        CryptoPrice[] results = restTemplate.getForObject(url, CryptoPrice[].class);
        List<CryptoPrice> coins = Arrays.asList(results);
        return usd / coins.get(0).getCurrent_price();
    }

}
