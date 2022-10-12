package com.C722.CriptoAlgo.criptoAlgo.models.mapper;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;

public class WalletMapper {

    public WalletEntity updateRequestToEntity(WalletUpdateRequest request, WalletEntity entity) {
        //ADA
        if (request.getADABalance() != null && !request.getADABalance().isEmpty() && !request.getADABalance().isBlank()) {
            entity.setAdaBalance(Double.parseDouble(request.getADABalance()));
        }
        //BNB
        if (request.getBnBalance() != null && !request.getBnBalance().isEmpty() && !request.getBnBalance().isBlank()) {
            entity.setBnbBalance(Double.parseDouble(request.getBnBalance()));
        }
        //ArgPesos
        if (request.getArgpesosBalance() != null && !request.getArgpesosBalance().isEmpty() && !request.getArgpesosBalance().isBlank()) {
            entity.setArgPesosBalance(Double.parseDouble(request.getArgpesosBalance()));
        }
        //BTC
        if (request.getArgpesosBalance() != null && !request.getArgpesosBalance().isEmpty() && !request.getArgpesosBalance().isBlank()) {
            entity.setArgPesosBalance(Double.parseDouble(request.getArgpesosBalance()));
        }
        //BUSD
        if (request.getBusdBalance() != null && !request.getBusdBalance().isEmpty() && !request.getBusdBalance().isBlank()) {
            entity.setBusdBalance(Double.parseDouble(request.getBusdBalance()));
        }
        //USDT
        if (request.getUsdtBalance() != null && !request.getUsdtBalance().isEmpty() && !request.getUsdtBalance().isBlank()) {
            entity.setUsdtBalance(Double.parseDouble(request.getUsdtBalance()));
        }
        //USDC
        if (request.getUsdcBalance() != null && !request.getUsdcBalance().isEmpty() && !request.getUsdcBalance().isBlank()) {
            entity.setUsdcBalance(Double.parseDouble(request.getUsdcBalance()));
        }
        //USD
        if (request.getUsdBalance() != null && !request.getUsdBalance().isEmpty() && !request.getUsdBalance().isBlank()) {
            entity.setUsdBalance(Double.parseDouble(request.getUsdBalance()));
        }
        //ETH
        if (request.getEthBalance() != null && !request.getEthBalance().isEmpty() && !request.getEthBalance().isBlank()) {
            entity.setEthBalance(Double.parseDouble(request.getEthBalance()));
        }

        return entity;


    }

    public WalletEntity newWalletMapper(Long userId) {

        WalletEntity entity = new WalletEntity();
        entity.setOwnerId(userId);
        entity.setAdaBalance(0d);
        entity.setBnbBalance(0d);
        entity.setArgPesosBalance(0d);
        entity.setBtcBalance(0d);
        entity.setBusdBalance(0d);
        entity.setUsdtBalance(0d);
        entity.setUsdcBalance(0d);
        entity.setUsdBalance(0d);
        entity.setEthBalance(0d);

        return entity;
    }

    public WalletResponse userEntityToResponse(WalletEntity entity) {
        WalletResponse response = new WalletResponse();

        response.setAdaBalance(entity.getAdaBalance());
        response.setBnbalance(entity.getBnbBalance());
        response.setArgpesosBalance(entity.getArgPesosBalance());
        response.setBtcBalance(entity.getBtcBalance());
        response.setBusdBalance(entity.getBusdBalance());
        response.setUsdtBalance(entity.getUsdtBalance());
        response.setUsdcBalance(entity.getUsdcBalance());
        response.setUsdBalance(entity.getUsdBalance());
        response.setEthBalance(entity.getEthBalance());

        return response;
    }
}
