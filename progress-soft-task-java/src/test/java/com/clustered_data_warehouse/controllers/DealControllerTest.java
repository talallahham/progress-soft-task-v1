package com.clustered_data_warehouse.controllers;

import com.clustered_data_warehouse.dto.DealDto;
import com.clustered_data_warehouse.entities.Deal;
import com.clustered_data_warehouse.services.DealService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.validation.ConstraintViolationException;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class DealControllerTest {

    @Mock
    private DealService dealService;

    @InjectMocks
    private DealController dealController;

    @Test
    public void success() {
        DealDto payload = new DealDto();
        ResponseEntity<String> response = dealController.saveDeal(payload);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Deal saved successfully", response.getBody());
    }

    @Test
    public void failed() {
        DealDto payload = new DealDto();
        doThrow(new ConstraintViolationException("Validation failed", null)).when(dealService).validateDealData(any());

        ResponseEntity<String> response = dealController.saveDeal(payload);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
    }

    @Test
    void getDealsSuccess() {
        List<Deal> deals = Arrays.asList(new Deal(), new Deal());
        when(dealService.getDeals()).thenReturn(deals);

        ResponseEntity<?> responseEntity = dealController.getDeals();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(deals, responseEntity.getBody());
        verify(dealService, times(1)).getDeals();
    }

    @Test
    void getDealsException() {
        String errorMessage = "An error occurred";
        when(dealService.getDeals()).thenThrow(new RuntimeException(errorMessage));

        ResponseEntity<?> responseEntity = dealController.getDeals();

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Failed to save deal: " + errorMessage, responseEntity.getBody());
        verify(dealService, times(1)).getDeals();
    }
}