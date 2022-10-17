package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.auth.utils.CryptoPrice;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/prices")
public class PricesController {

    @GetMapping("/{fiat}/{crypto}")
    public CryptoPrice getCryptoFiatPrice(@PathVariable("fiat") @Valid @NotNull String fiat,
                                          @PathVariable("crypto") @Valid @NotNull String crypto)

    {
        String url = "https://criptoya.com/api/bitso/" + crypto + "/" + fiat + "/1";
        RestTemplate restTemplate = new RestTemplate();
        CryptoPrice prices = restTemplate.getForObject(url, CryptoPrice.class);
        return prices;

    }

}
