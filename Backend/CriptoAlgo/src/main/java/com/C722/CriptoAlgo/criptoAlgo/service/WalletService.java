package com.C722.CriptoAlgo.criptoAlgo.service;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface WalletService {

   WalletEntity create( Long userId);

   List<WalletResponse> getAll();

   WalletResponse update (WalletUpdateRequest request, String token);

   WalletResponse getById(Long id);


   void deleteById(Long id);

   WalletResponse transfer(WalletUpdateRequest request, String token);

   WalletResponse exchangeFiatCrypto(WalletUpdateRequest request, String token, String fiat, String crypto);
}
