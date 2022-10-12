package com.C722.CriptoAlgo.criptoAlgo.service.serviceImpl;

import com.C722.CriptoAlgo.criptoAlgo.Exceptions.InsufficientAvailableBalanceException;
import com.C722.CriptoAlgo.criptoAlgo.auth.utils.JwtUtils;
import com.C722.CriptoAlgo.criptoAlgo.controller.PricesController;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.mapper.WalletMapper;
import com.C722.CriptoAlgo.criptoAlgo.models.request.WalletUpdateRequest;
import com.C722.CriptoAlgo.criptoAlgo.models.response.WalletResponse;
import com.C722.CriptoAlgo.criptoAlgo.repository.UserRepository;
import com.C722.CriptoAlgo.criptoAlgo.repository.WalletRepository;
import com.C722.CriptoAlgo.criptoAlgo.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.InsufficientResourcesException;
import java.util.List;

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
    public WalletEntity create(Long userId) {
        WalletEntity wallet = walletMapper.newWalletMapper(userId);
        return wallet;
    }

    @Override
    public List<WalletResponse> getAll() {
        return null;
    }

    @Override
    public WalletResponse update(WalletUpdateRequest request, String Token) {
        return null;
    }

    @Override
    public WalletResponse getById(Long id) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public WalletResponse transfer(WalletUpdateRequest request, String token) {
        return null;
    }


    @Override
    public WalletResponse exchangeFiatCrypto(WalletUpdateRequest request, String token, String fiat, String crypto) {
        String userToken = jwtUtils.rebuildToken(token);
        WalletEntity entityDb = userRepository.findWalletByEmail(jwtUtils.extractUsername(userToken)).get();
        WalletEntity entity = new WalletEntity();
        walletMapper.updateRequestToEntity(request, entity);
       //ars-btc
        if (fiat.equals("ars") && crypto.equals("btc")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setBtcBalance(entityDb.getBtcBalance()+ balance);
            }
        }//ars-ada
        if (fiat.equals("ars") && crypto.equals("ada")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setAdaBalance(entityDb.getAdaBalance() + balance);
            }
        }//ars-bnb
        if (fiat.equals("ars") && crypto.equals("bnb")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setBnbBalance(entityDb.getBnbBalance() + balance);
            }
        }//ars-busd
        if (fiat.equals("ars") && crypto.equals("busd")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setBusdBalance(entityDb.getBusdBalance() + balance);
            }
        }//ars-eth
        if (fiat.equals("ars") && crypto.equals("eth")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setEthBalance(entityDb.getEthBalance() + balance);
            }
        }//ars-usdc
        if (fiat.equals("ars") && crypto.equals("usdc")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setUsdcBalance(entityDb.getUsdcBalance() + balance);
            }
        } //ars-usdt
        if (fiat.equals("ars") && crypto.equals("usdt")) {
            if (entity.getArgPesosBalance() > entityDb.getArgPesosBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getArgPesosBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setArgPesosBalance(entityDb.getArgPesosBalance() - var1);
                entityDb.setUsdtBalance(entityDb.getUsdtBalance() + balance);
            }
        }//usd-ada
        if (fiat.equals("usd") && crypto.equals("ada")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setAdaBalance(entityDb.getAdaBalance() + balance);
            }
        }//usd-btc
        if (fiat.equals("usd") && crypto.equals("btc")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBtcBalance(entityDb.getBtcBalance() + balance);
            }
        }//usd-bnb
        if (fiat.equals("usd") && crypto.equals("bnb")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBnbBalance(entityDb.getBnbBalance() + balance);
            }
        }//usd-eth
        if (fiat.equals("usd") && crypto.equals("eth")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setEthBalance(entityDb.getEthBalance() + balance);
            }
        }//usd-busd
        if (fiat.equals("usd") && crypto.equals("busd")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setBusdBalance(entityDb.getBusdBalance() + balance);
            }
        }// usd-sdc
        if (fiat.equals("usd") && crypto.equals("usdc")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setUsdcBalance(entityDb.getUsdcBalance() + balance);
            }
        }//usd-usdt
        if (fiat.equals("usd") && crypto.equals("usdt")) {
            if (entity.getUsdBalance() > entityDb.getUsdBalance()) {
                throw new InsufficientAvailableBalanceException();
            } else {
                Double var1 = entity.getUsdBalance();
                Double var2 = pricesController.getCryptoFiatPrice(crypto, fiat).getAsk();
                Double balance = var1 / var2;
                entityDb.setUsdBalance(entityDb.getUsdBalance() - var1);
                entityDb.setUsdtBalance(entityDb.getUsdtBalance() + balance);
            }
        }

        walletRepository.save(entityDb);
        return walletMapper.userEntityToResponse(entity);
    }



}
