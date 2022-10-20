package com.C722.CriptoAlgo.criptoAlgo.service;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface WalletService {

   WalletEntity create(UserEntity owner);

   List<WalletResponse> getAll();

   WalletResponse update (WalletUpdateRequest request, String token);

   WalletResponse getById(Long id);

   void deleteById(Long id);

   WalletResponse addUsdBalance(WalletUpdateRequest request, String token);

   WalletResponse getWalletBalance(String token);

   WalletResponse exchangeUsdCrypto(WalletUpdateRequest request, String token, String crypto);

   WalletResponse withdrawUsdBalance(WalletUpdateRequest request, String token);
}
