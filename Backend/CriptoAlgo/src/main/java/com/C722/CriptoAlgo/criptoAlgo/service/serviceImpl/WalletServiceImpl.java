package com.C722.CriptoAlgo.criptoAlgo.service.serviceImpl;

import com.C722.CriptoAlgo.criptoAlgo.Exceptions.InsufficientAvailableBalanceException;
import com.C722.CriptoAlgo.criptoAlgo.auth.utils.JwtUtils;
import com.C722.CriptoAlgo.criptoAlgo.controller.PricesController;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.mapper.WalletMapper;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;
import com.C722.CriptoAlgo.criptoAlgo.repository.UserRepository;
import com.C722.CriptoAlgo.criptoAlgo.repository.WalletRepository;
import com.C722.CriptoAlgo.criptoAlgo.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.naming.InsufficientResourcesException;
import java.util.List;
import java.util.Optional;

@Service
public class WalletServiceImpl implements WalletService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    WalletMapper walletMapper;
    @Autowired
    WalletRepository walletRepository;
    @Autowired
    PricesController pricesController;

    @Override
    public WalletEntity create(UserEntity owner) {
        WalletEntity wallet = walletMapper.newWalletMapper(owner);
        return wallet;
    }

    @Override
    public List<WalletResponse> getAll() {
        List <WalletEntity> wallets = walletRepository.findAll();
        List<WalletResponse> response= walletMapper.entityToResponseList(wallets);
        return response;
    }

    @Override
    public WalletResponse update(WalletUpdateRequest request, String token) {
        String userToken = jwtUtils.rebuildToken(token);
        Optional <WalletEntity> entity = walletRepository.findWalletByOwner(userRepository.findByEmail(jwtUtils.extractUsername(userToken)).get());
        walletMapper.updateRequestToEntity(request, entity.get());
        walletRepository.save(entity.get());
        return walletMapper.entityToResponse(entity.get());

    }

    @Override
    public WalletResponse getById(Long id) {
        WalletEntity entity = walletRepository.findById(id).get();
        return walletMapper.entityToResponse(entity);
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    @Transactional
    public WalletResponse addUsdBalance(WalletUpdateRequest request, String token) {
        String userToken = jwtUtils.rebuildToken(token);
        Optional <WalletEntity> entityDb = walletRepository.findWalletByOwner(userRepository.findByEmail(jwtUtils.extractUsername(userToken)).get());;
        WalletEntity update = new WalletEntity();
        walletMapper.updateRequestToEntity(request, update);
        entityDb.get().setUsdBalance(entityDb.get().getUsdBalance() + Math.abs(update.getUsdBalance()));
        walletRepository.save(entityDb.get());
        return walletMapper.entityToResponse(entityDb.get());
    }

    @Override
    @Transactional
    public WalletResponse withdrawUsdBalance(WalletUpdateRequest request, String token) {
        String userToken = jwtUtils.rebuildToken(token);
        Optional <WalletEntity> entityDb = walletRepository.findWalletByOwner(userRepository.findByEmail(jwtUtils.extractUsername(userToken)).get());;
        WalletEntity update = new WalletEntity();
        walletMapper.updateRequestToEntity(request, update);
        entityDb.get().setUsdBalance(entityDb.get().getUsdBalance() - Math.abs(update.getUsdBalance()));
        walletRepository.save(entityDb.get());
        return walletMapper.entityToResponse(entityDb.get());
    }

    @Override
    public WalletResponse getWalletBalance(String token) {
        String userToken = jwtUtils.rebuildToken(token);
        WalletEntity entity = walletRepository.findWalletByOwner(userRepository.findByEmail(jwtUtils.extractUsername(userToken)).get()).get();
        return walletMapper.entityToResponse(entity);
    }


    @Override @Transactional
    public WalletResponse exchangeUsdCrypto(WalletUpdateRequest request, String token, String crypto) {
        String userToken = jwtUtils.rebuildToken(token);
        WalletEntity entityDb = walletRepository.findWalletByOwner(userRepository.findByEmail(jwtUtils.extractUsername(userToken)).get()).get();
        WalletEntity entity = new WalletEntity();
        walletMapper.updateRequestToEntity(request, entity);

        //usd-ada
        if (crypto.equals("cardano")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setAdaBalance(entityDb.getAdaBalance() + balance);
            }
        }//usd-btc
        if (crypto.equals("bitcoin")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBtcBalance(entityDb.getBtcBalance() + balance);
            }
        }//usd-bnb
        if (crypto.equals("binance-coin")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBnbBalance(entityDb.getBnbBalance() + balance);
            }
        }//usd-eth
        if (crypto.equals("ethereum")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setEthBalance(entityDb.getEthBalance() + balance);
            }
        }//usd-busd
        if (crypto.equals("binance-usd")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBusdBalance(entityDb.getBusdBalance() + balance);
            }
        }// usd-sdc
        if (crypto.equals("usd-coin")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setUsdcBalance(entityDb.getUsdcBalance() + balance);
            }
        }//usd-usdt
        if (crypto.equals("tether")) {
            if (entity.getUsdBalance() >= entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto).get(0).getCurrent_price();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setUsdtBalance(entityDb.getUsdtBalance() + balance);
            }
        }

        walletRepository.save(entityDb);
        return walletMapper.entityToResponse(entityDb);
    }


}
