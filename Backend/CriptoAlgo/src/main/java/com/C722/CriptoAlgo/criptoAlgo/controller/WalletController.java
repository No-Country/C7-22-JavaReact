package com.C722.CriptoAlgo.criptoAlgo.controller;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.UserUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.UserResponse;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;
import com.C722.CriptoAlgo.criptoAlgo.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/wallets")
public class WalletController {

    @Autowired
    WalletService walletService;

    @GetMapping("/getAll")
    public ResponseEntity<List<WalletResponse>> getAll(){
        return ResponseEntity.ok(walletService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WalletResponse> getWalletbyId(@PathVariable("id") @Valid @NotNull Long id){
        return ResponseEntity.ok(walletService.getById(id));
    }

    @PatchMapping("/me")
    public ResponseEntity<WalletResponse> update(@RequestHeader(name = "Authorization") String token,
                                                   @RequestBody @Valid WalletUpdateRequest request) {
        WalletResponse update = walletService.update(request, token);
        return ResponseEntity.ok().body(update);

    }
    @GetMapping("/me")
    public ResponseEntity<WalletResponse> getWalletBalance(@RequestHeader(name = "Authorization") String token) {
        WalletResponse response = walletService.getWalletBalance(token);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id")@Valid @NotNull Long id) {
        walletService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /*@PutMapping("/exchange/{fiat}/{crypto}")
    public ResponseEntity<WalletResponse> exchangeFiatCrypto(@RequestHeader(name= "Authorization") String token,
                                                   @RequestBody @Valid WalletUpdateRequest request,
                                                             @PathVariable("fiat")@Valid @NotNull String fiat,
                                                             @PathVariable("crypto")@Valid @NotNull String crypto){
        WalletResponse update = walletService.exchangeFiatCrypto(request, token, fiat, crypto);
        return ResponseEntity.ok().body(update);
    }*/

}
