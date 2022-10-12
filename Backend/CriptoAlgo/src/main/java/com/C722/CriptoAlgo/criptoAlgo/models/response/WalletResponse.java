package com.C722.CriptoAlgo.criptoAlgo.models.response;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class WalletResponse {

    private Long id;

    private Double usdBalance;

    private Double argpesosBalance;

    private Double usdtBalance;

    private Double usdcBalance;

    private Double busdBalance;

    private Double btcBalance;

    private Double ethBalance;

    private Double bnbalance;

    private Double adaBalance;
}
