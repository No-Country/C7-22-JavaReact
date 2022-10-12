package com.C722.CriptoAlgo.criptoAlgo.repository;

import com.C722.CriptoAlgo.criptoAlgo.models.entity.WalletEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository <WalletEntity, Long> {

}
