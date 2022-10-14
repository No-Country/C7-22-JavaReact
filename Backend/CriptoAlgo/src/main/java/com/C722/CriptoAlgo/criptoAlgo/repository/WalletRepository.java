package com.C722.CriptoAlgo.criptoAlgo.repository;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.UserEntity;
import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository <WalletEntity, Long> {
    Optional<WalletEntity> findWalletByOwner(UserEntity entity);
}
