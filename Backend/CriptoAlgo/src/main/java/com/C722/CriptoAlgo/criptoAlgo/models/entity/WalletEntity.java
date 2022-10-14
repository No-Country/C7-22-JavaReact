package com.C722.CriptoAlgo.criptoAlgo.models.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "wallets")
@SQLDelete(sql= "UPDATE users SET deleted = true Where id=?")
@Where(clause = "deleted=false")
public class WalletEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "wallet")
    private UserEntity owner;


    private Boolean deleted = Boolean.FALSE;

    @Column(name= "usd_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double usdBalance;

    @Column(name = "argpesos_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double argPesosBalance;

    @Column(name = "usdt_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double usdtBalance;

    @Column(name = "usdc_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double usdcBalance;

    @Column(name = "busd_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double busdBalance;

    @Column(name = "btc_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double btcBalance;

    @Column(name = "eth_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double ethBalance;

    @Column(name = "bnb_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double bnbBalance;

    @Column(name = "ada_balance")
    @NotNull
    @NotEmpty
    @NotBlank
    private Double adaBalance;

}
