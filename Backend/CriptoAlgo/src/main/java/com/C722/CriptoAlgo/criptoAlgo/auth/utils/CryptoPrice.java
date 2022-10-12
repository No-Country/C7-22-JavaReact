package com.C722.CriptoAlgo.criptoAlgo.auth.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CryptoPrice {

    Double ask;
    Double totalAsk;
    Double bid;
    Double totalBid;
    Timestamp time;


}
