package com.C722.CriptoAlgo.criptoAlgo.models.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

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

    @Column(name= "owner_id")
    private Long ownerid;

    @Column(name= "usd_balance")// revisar si el tipo de dato es correcto con pruebas
    private Double usdBalance;

    @Column(name = "argpesos_balance")
    private Double argpesosBalance;

    @Column(name = "usdt_balance")
    private Double usdtBalance;

    @Column(name = "usdc_balance")
    private Double usdcBalance;

    @Column(name = "busd_balance")
    private Double busdBalance;

    @Column(name = "btc_balance")
    private Double btcBalance;

    @Column(name = "eth_balance")
    private Double ethBalance;

    @Column(name = "bnb_balance")
    private Double bnbalance;

    @Column(name = "ada_balance")
    private Double ADABalance;

}
