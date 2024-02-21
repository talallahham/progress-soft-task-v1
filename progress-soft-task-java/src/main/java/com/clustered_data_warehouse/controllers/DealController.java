package com.clustered_data_warehouse.controllers;

import com.clustered_data_warehouse.dto.DealDto;
import com.clustered_data_warehouse.entities.Deal;
import com.clustered_data_warehouse.services.DealService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/deal")
@Slf4j
public class DealController {
    @Autowired
    DealService dealService;

    @PostMapping("/save")
    public ResponseEntity<String> saveDeal(@Valid @RequestBody DealDto payload) {
        try {
            log.info("In /save endpoint: receiving payload {}", payload);

            dealService.validateDealData(payload);
            log.info("In /save endpoint: payload data passes the validation");

            dealService.saveDeal(payload);
            log.info("In /save endpoint: payload data passes the duplicate detection and stored in the database");

            return ResponseEntity.ok("Deal saved successfully");
        }
        catch (Exception e) {
            log.info("In /save endpoint: payload data failed to be saved: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save deal: " + e.getMessage());
        }
    }

    @GetMapping("/deals")
    public ResponseEntity<?> getDeals() {
        try {
            log.info("In /deals endpoint, calling the service function");
            List<Deal> deals = dealService.getDeals();

            log.info("In /deals endpoint: deals are loaded successfully");
            return ResponseEntity.status(HttpStatus.OK).body(deals);
        }
        catch (Exception e) {
            log.info("In /deals endpoint: deals failed to be loaded: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save deal: " + e.getMessage());
        }
    }
}