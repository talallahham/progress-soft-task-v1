package com.clustered_data_warehouse.repos;

import com.clustered_data_warehouse.entities.Deal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DealRepo extends MongoRepository<Deal, Long> {
}
