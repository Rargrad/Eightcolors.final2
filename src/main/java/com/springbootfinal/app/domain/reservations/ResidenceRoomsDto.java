package com.springbootfinal.app.domain.reservations;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResidenceRoomsDto {

    private long roomNo;
    private long residNo;
    private String roomName;
    private long pricePerNight;
}
