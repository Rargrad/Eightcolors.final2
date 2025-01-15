package com.springbootfinal.app.domain.reservations;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationsDto {

    private long reservationNo;
    private long userNo;
    private long roomNo;
    private Date checkinDate;
    private Date checkoutDate;
    private BigDecimal totalPrice;
    private Integer discountRate;
    private BigDecimal discountedPrice;
    private String transactionId;
    private String paymentStatus;
    private String reservationStatus;
    private Date createdAt;
}